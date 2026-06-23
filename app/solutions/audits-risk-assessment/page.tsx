import type { Metadata } from "next";
import AuditRiskAssessment from "./AuditRiskAssessment";

export const metadata: Metadata = {
  title: "Audits & Risk Assessment Insurance for Businesses | Vestigo India",
  description:
    "Risk assessment and audit solutions for businesses to identify exposure and strengthen protection.",
};

export default function Page() {
  return <AuditRiskAssessment />;
}
