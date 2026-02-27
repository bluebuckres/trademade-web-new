import { LegalLayout } from "@/components/ui/LegalLayout";

export const metadata = {
    title: "Security at TradeMade",
    description: "Learn about TradeMade's industry-leading security measures, data encryption, and compliance.",
};

export default function SecurityPage() {
    return (
        <LegalLayout title="Security at TradeMade">
            <p className="text-xl">
                Your security is our top priority. We implement industry-leading security measures to protect your data and transactions.
            </p>

            <h2>Data Encryption</h2>
            <p>
                All data is encrypted in transit and at rest using industry-standard AES-256 encryption. We use SSL/TLS for all data transmission.
            </p>

            <h2>Access Control</h2>
            <p>
                Multi-factor authentication, role-based access control, and regular security audits ensure only authorized access to your account.
            </p>

            <h2>Infrastructure Security</h2>
            <p>
                Our infrastructure is hosted on secure cloud providers with SOC 2 compliance. Regular security patches and updates maintain system integrity.
            </p>

            <h2>Compliance</h2>
            <p>
                We adhere to industry security standards and best practices. Regular security assessments ensure continuous compliance.
            </p>

            <h2>Our Security Commitment</h2>
            <ul>
                <li>Regular security audits and penetration testing</li>
                <li>24/7 security monitoring and incident response</li>
                <li>Secure API endpoints with rate limiting and authentication</li>
                <li>Regular backup and disaster recovery procedures</li>
                <li>GDPR & Data Protection Compliant</li>
            </ul>
        </LegalLayout>
    );
}
