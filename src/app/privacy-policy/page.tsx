import { LegalLayout } from "@/components/ui/LegalLayout";

export const metadata = {
    title: "Privacy Policy | TradeMade",
    description: "Read the TradeMade Privacy Policy to understand how we collect, use, and protect your personal data.",
};

export default function PrivacyPolicyPage() {
    return (
        <LegalLayout title="Privacy Policy for TradeMade" lastUpdated="December 24, 2023">
            <p>
                Thank you for choosing to be part of our community at BlueBuck Research LLP ("Company," "we," "us," or "our"). We are committed to protecting your personal information and your right to privacy.
            </p>

            <h2>Information We Collect</h2>
            <p>
                We collect personal information that you voluntarily provide to us when you register on our platform, express an interest in obtaining information about us or our products and services, or otherwise contact us.
            </p>
            <p>
                The personal information we collect may include:
            </p>
            <ul>
                <li>Name and contact information</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Broker account details</li>
                <li>Trading preferences and history</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>
                We use the information we collect for various purposes, including:
            </p>
            <ul>
                <li>Providing and maintaining our services</li>
                <li>Processing your transactions</li>
                <li>Sending you service-related notifications</li>
                <li>Responding to your inquiries and support requests</li>
                <li>Improving our platform and user experience</li>
                <li>Complying with legal obligations</li>
            </ul>

            <h2>Data Security</h2>
            <p>
                We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>Your Rights</h2>
            <p>
                You have the right to:
            </p>
            <ul>
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to our processing of your data</li>
                <li>Withdraw consent at any time</li>
            </ul>

            <h2>Contact Information</h2>
            <p>
                For privacy-related inquiries, please contact us at:
            </p>
            <p>
                <strong>Email:</strong> <a href="mailto:connect@trademade.in">connect@trademade.in</a><br />
                <strong>Address:</strong> BlueBuck Research LLP, 4G KrishtiKunja, Kaikhali Main Rd, near Chola Finance, Airport, Kolkata, West Bengal 700052
            </p>
        </LegalLayout>
    );
}
