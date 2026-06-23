import type { Metadata } from "next";
import ClaimsManagement from "./ClaimsManagement";

export const metadata: Metadata = {
  title: "Claims Management Insurance for Businesses | Vestigo India",
  description:
    "Comprehensive claims management solutions for businesses to ensure timely and fair resolution of insurance claims.",
};

export default function Page() {
  return <ClaimsManagement />;
}
