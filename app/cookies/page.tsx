import LegalPage from "@/components/LegalPage";
import Link from "next/link";

export default function CookiesPage() {
  return (
    <LegalPage title="Cookie Policy">
      <p>
        <strong>Last updated:</strong> May 2026
      </p>
      <p>
        This Cookie Policy explains how FUEL Coworking uses cookies and similar
        technologies when you visit our website.
      </p>
      <h2 className="font-display text-xl font-bold text-dark">What are cookies?</h2>
      <p>
        Cookies are small text files stored on your device when you visit a
        website. They help the site remember preferences, understand usage, and
        improve performance.
      </p>
      <h2 className="font-display text-xl font-bold text-dark">How we use cookies</h2>
      <p>
        We may use essential cookies required for the site to function, analytics
        cookies to understand how visitors use our pages, and preference cookies
        to remember settings where applicable.
      </p>
      <h2 className="font-display text-xl font-bold text-dark">Managing cookies</h2>
      <p>
        Most browsers let you block or delete cookies through settings. If you
        disable cookies, some parts of the website may not work as intended.
      </p>
      <h2 className="font-display text-xl font-bold text-dark">More information</h2>
      <p>
        For details on how we handle personal data, see our{" "}
        <Link href="/privacy" className="text-primary underline underline-offset-2">
          Privacy Policy
        </Link>
        . Questions can be sent to hello@fuelcoworking.com.
      </p>
    </LegalPage>
  );
}
