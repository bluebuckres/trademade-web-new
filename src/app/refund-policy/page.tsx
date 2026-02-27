import { LegalLayout } from "@/components/ui/LegalLayout";

export const metadata = {
    title: "Refund Policy | TradeMade",
    description: "Read the TradeMade Refund Policy and general subscription cancellation terms.",
};

export default function RefundPolicyPage() {
    return (
        <LegalLayout title="Refund Policy for TradeMade" lastUpdated="December 23, 2023">
            <h2>1. General Refund Policy</h2>
            <p>
                BlueBuck Research LLP ("Company," "we," "us," or "our") provides a SaaS platform ("Platform") for automated trading. All sales are final, and the Company does not offer any money-back guarantees. You recognize and agree that you shall not be entitled to a refund for any purchase under any circumstances.
            </p>

            <h2>2. Subscription Cancellation</h2>
            <p>
                Users may cancel their subscription at any time. However, no refunds will be issued for any unused portion of the subscription.
            </p>

            <h2>3. Exceptional Circumstances</h2>
            <p>
                In exceptional circumstances, such as a platform malfunction or billing error, users may contact our support team to request a review of their case. The Company reserves the right to grant refunds at its sole discretion.
            </p>

            <h2>4. No Warranties</h2>
            <p>
                The Platform is provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not guarantee that the Platform will always be available, uninterrupted, or error-free.
            </p>

            <h2>5. Limitation of Liability</h2>
            <p>
                In no event shall BlueBuck Research LLP be liable for any special, incidental, indirect, or consequential damages whatsoever arising out of or in connection with your use of the Platform.
            </p>

            <h2>6. Changes to Refund Policy</h2>
            <p>
                We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting to the Platform. Your continued use of the Platform following the posting of changes constitutes your acceptance of such changes.
            </p>

            <h2>Contact Information</h2>
            <p>
                For further inquiries, please contact us at:
            </p>
            <p>
                <strong>Email:</strong> <a href="mailto:contact@trademade.in">contact@trademade.in</a><br />
                <strong>Address:</strong> BlueBuck Research LLP, 4G KrishtiKunja, Kaikhali Main Rd, near Chola Finance, Airport, Kolkata, West Bengal 700052
            </p>

            <p className="mt-8 border-l-4 border-primary/50 pl-4 py-2 bg-surface/30">
                <strong>Important Notice:</strong> To maintain the integrity of our premium services and ensure consistent quality, all payments made to TradeMade are considered final and non-refundable. This policy helps us focus on delivering exceptional value and continuous platform improvements for our users.
            </p>
        </LegalLayout>
    );
}
