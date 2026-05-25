import LegalPage from "@/components/LegalPage";

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        <strong>Last updated:</strong> May 2026
      </p>
      <p>
        FUEL Coworking (&quot;FUEL,&quot; &quot;we,&quot; &quot;us,&quot; or
        &quot;our&quot;) respects your privacy. This Privacy Policy explains how
        we collect, use, and protect personal information when you visit our
        website, inquire about memberships, or use our coworking space in
        Spokane, Washington.
      </p>
      <h2 className="font-display text-xl font-bold text-dark">
        Information we collect
      </h2>
      <p>
        We may collect your name, email address, phone number, company name,
        membership interests, and any message you send through our contact form.
        We also collect basic usage data such as browser type, pages visited, and
        general analytics to improve our website.
      </p>
      <h2 className="font-display text-xl font-bold text-dark">How we use it</h2>
      <p>
        We use your information to respond to inquiries, process membership
        requests, communicate about events and services, operate our website, and
        comply with legal obligations. We do not sell your personal information.
      </p>
      <h2 className="font-display text-xl font-bold text-dark">Sharing</h2>
      <p>
        We may share information with service providers who help us operate our
        website, email systems, or payment tools, and only as needed to perform
        those services. We may also disclose information if required by law.
      </p>
      <h2 className="font-display text-xl font-bold text-dark">Your choices</h2>
      <p>
        You may request access to, correction of, or deletion of your personal
        information by contacting us at hello@fuelcoworking.com. You can opt out
        of marketing emails at any time using the unsubscribe link in our
        messages.
      </p>
      <h2 className="font-display text-xl font-bold text-dark">Contact</h2>
      <p>
        Questions about this policy can be sent to FUEL Coworking, 809 W Main Ave,
        Suite 212, Spokane, WA, or hello@fuelcoworking.com.
      </p>
    </LegalPage>
  );
}
