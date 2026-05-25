import LegalPage from "@/components/LegalPage";

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use">
      <p>
        <strong>Last updated:</strong> May 2026
      </p>
      <p>
        These Terms of Use govern your access to the FUEL Coworking website and
        related online services. By using this site, you agree to these terms.
      </p>
      <h2 className="font-display text-xl font-bold text-dark">Use of the site</h2>
      <p>
        You may use this website for lawful purposes only. You agree not to
        misuse the site, attempt unauthorized access, interfere with its
        operation, or submit false or misleading information through our forms.
      </p>
      <h2 className="font-display text-xl font-bold text-dark">
        Memberships and services
      </h2>
      <p>
        Information on this website about memberships, pricing, and amenities is
        provided for general reference. Final terms for workspace use are set out
        in separate membership or service agreements provided by FUEL Coworking.
      </p>
      <h2 className="font-display text-xl font-bold text-dark">
        Intellectual property
      </h2>
      <p>
        All content on this website, including text, branding, images, and
        design, is owned by or licensed to FUEL Coworking and may not be copied
        or reused without permission.
      </p>
      <h2 className="font-display text-xl font-bold text-dark">Disclaimer</h2>
      <p>
        This website is provided on an &quot;as is&quot; basis. To the fullest
        extent permitted by law, FUEL Coworking disclaims warranties regarding
        uninterrupted or error-free access to the site.
      </p>
      <h2 className="font-display text-xl font-bold text-dark">Contact</h2>
      <p>
        For questions about these terms, contact hello@fuelcoworking.com or FUEL
        Coworking, 809 W Main Ave, Suite 212, Spokane, WA.
      </p>
    </LegalPage>
  );
}
