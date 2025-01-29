import { doc, setDoc, getDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

interface OTPData {
  otp: string;
  email: string;
  expiresAt: Date;
}

const OTP_COLLECTION = 'otps';
const OTP_EXPIRY_MINUTES = 10;

const generateOTPCode = (): string => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Local OTP storage (in production, use a proper database)
const otpStore = new Map<string, { otp: string; expiry: number }>();

export const generateOTP = (): string => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export const storeOTP = async (email: string, otp: string) => {
  const expiry = Date.now() + 10 * 60 * 1000; // 10 minutes expiry
  otpStore.set(email, { otp, expiry });
};

export const verifyOTP = async (email: string, otp: string): Promise<boolean> => {
  const storedData = otpStore.get(email);
  if (!storedData) return false;

  const { otp: storedOTP, expiry } = storedData;
  if (Date.now() > expiry) {
    otpStore.delete(email);
    return false;
  }

  if (otp === storedOTP) {
    otpStore.delete(email);
    return true;
  }

  return false;
};

export const sendOTPByEmail = async (email: string, otp: string) => {
  // TODO: Implement email sending logic using your preferred email service
  console.log(`Sending OTP ${otp} to ${email}`);
};

// Removed functions
// export const saveOTP = async (userId: string, email: string): Promise<string> => {
//   const otp = await generateOTP(email);
//   const expiresAt = new Date();
//   expiresAt.setMinutes(expiresAt.getMinutes() + OTP_EXPIRY_MINUTES);

//   await setDoc(doc(db, OTP_COLLECTION, userId), {
//     otp,
//     email,
//     expiresAt,
//     createdAt: new Date()
//   });

//   return otp;
// };

// export const verifyOTPFromDB = async (userId: string, inputOTP: string): Promise<boolean> => {
//   const otpDoc = await getDoc(doc(db, OTP_COLLECTION, userId));
  
//   if (!otpDoc.exists()) {
//     throw new Error('OTP not found');
//   }

//   const otpData = otpDoc.data();
//   const now = new Date();
//   const expiresAt = otpData.expiresAt.toDate();

//   if (now > expiresAt) {
//     await deleteOTP(userId);
//     throw new Error('OTP has expired');
//   }

//   if (otpData.otp !== inputOTP) {
//     throw new Error('Invalid OTP');
//   }

//   await deleteOTP(userId);
//   return true;
// };

// export const deleteOTP = async (userId: string): Promise<void> => {
//   await deleteDoc(doc(db, OTP_COLLECTION, userId));
// };

// export const sendOTPEmail = async (email: string, otp: string): Promise<void> => {
//   // TODO: Implement email sending logic using Firebase Cloud Functions
//   // For now, we'll just log it
//   console.log(`Sending OTP ${otp} to ${email}`);
  
//   // In production, you would:
//   // 1. Create a Firebase Cloud Function
//   // 2. Use a service like SendGrid or Nodemailer
//   // 3. Send a properly formatted email with the OTP
// };
