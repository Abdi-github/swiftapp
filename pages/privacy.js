
export default function PrivacyPolicy() {
  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "60px 24px", fontFamily: "sans-serif", lineHeight: 1.7, color: "#fff" }}>
      <h1>Privacy Policy</h1>
      <p><em>Last updated: 31 May 2026</em></p>

      <p>This Privacy Policy describes how Swift AI Marketing ("<strong>we</strong>", "<strong>us</strong>", "<strong>our</strong>") collects, uses, and protects personal data in accordance with the Swiss Federal Act on Data Protection (FADP) and applicable EU/EEA data protection law.</p>

      <p><strong>Data controller:</strong> Swift AI Marketing, Switzerland — <a href="mailto:abdi@swiftapp.ch">abdi@swiftapp.ch</a></p>

      <h2>1. Data we collect</h2>
      <ul>
        <li><strong>Account data:</strong> name, email address, business name, password (hashed — never stored in plain text).</li>
        <li><strong>Billing data:</strong> subscription plan, payment history. Card details are processed and stored exclusively by Stripe, Inc. We do not store card numbers.</li>
        <li><strong>AI content data:</strong> prompts and content you submit for AI generation (social posts, landing pages). This data is processed by Anthropic, Inc. (Claude API) to generate outputs on your behalf.</li>
        <li><strong>Social media tokens:</strong> if you connect your Facebook Page or Instagram Business account, we store an access token issued by Meta Platforms, Inc. to publish content on your behalf. We do not access your personal Facebook profile or personal messages.</li>
        <li><strong>Usage data:</strong> log data, IP addresses, browser type, pages visited — used to operate and improve the service.</li>
      </ul>

      <h2>2. How we use your data</h2>
      <ul>
        <li>To provide and operate the Swift AI Marketing service.</li>
        <li>To process payments via Stripe.</li>
        <li>To publish content to your connected social media accounts at your direction.</li>
        <li>To send transactional emails (account confirmation, billing receipts).</li>
        <li>To detect and prevent fraud or abuse.</li>
      </ul>
      <p>We do not sell your personal data. We do not use your data to train AI models.</p>

      <h2>3. Third-party processors</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
        <thead>
          <tr style={{ background: "#f5f5f5" }}>
            <th style={{ textAlign: "left", padding: "8px", border: "1px solid #ddd" }}>Processor</th>
            <th style={{ textAlign: "left", padding: "8px", border: "1px solid #ddd" }}>Purpose</th>
            <th style={{ textAlign: "left", padding: "8px", border: "1px solid #ddd" }}>Location</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Stripe, Inc.", "Payment processing", "USA (SCCs)"],
            ["Anthropic, Inc.", "AI content generation", "USA (SCCs)"],
            ["Meta Platforms, Inc.", "Facebook / Instagram publishing", "USA (SCCs)"],
            ["Replicate, Inc.", "AI image generation", "USA (SCCs)"],
            ["Scaleway SAS", "Cloud hosting & storage", "France / EU"],
          ].map(([p, pur, loc]) => (
            <tr key={p}>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>{p}</td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>{pur}</td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>{loc}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{ fontSize: 13, color: "#666" }}>SCCs = Standard Contractual Clauses (EU adequacy mechanism for transfers outside the EU/EEA).</p>

      <h2>4. Data retention</h2>
      <p>Account data is retained for the duration of your subscription plus 12 months after cancellation, then deleted or anonymised. Billing records are retained for 10 years as required by Swiss accounting law. AI-generated content is retained until you delete it or close your account.</p>

      <h2>5. Your rights (FADP / GDPR)</h2>
      <p>You have the right to access, correct, export, or delete your personal data. To exercise these rights, email <a href="mailto:abdi@swiftapp.ch">abdi@swiftapp.ch</a>. We will respond within 30 days.</p>

      <h2>6. Cookies</h2>
      <p>We use a session cookie to keep you logged in. We do not use advertising or tracking cookies.</p>

      <h2>7. Data deletion (Meta / Instagram)</h2>
      <p>If you disconnect your Facebook or Instagram account, we immediately revoke and delete the associated access token. To request deletion of all data associated with your Meta connection, email <a href="mailto:abdi@swiftapp.ch">abdi@swiftapp.ch</a> with subject "Meta Data Deletion Request".</p>

      <h2>8. Contact</h2>
      <p>Data protection enquiries: <a href="mailto:abdi@swiftapp.ch">abdi@swiftapp.ch</a></p>
    </main>
  );
}
