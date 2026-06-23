import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Vestigo - Insurance Advisors in Ahmedabad & Vadodara",
  description:
    "Reach Vestigo's advisory team for a comprehensive risk review. Call +91 97260 60360 or email enquiry@vestigoinsurance.com.",
};

export default function Page() {
  return <ContactForm />;
}
