import type { Metadata } from "next";
import CreditInsurance from "./CreditInsurance";

export const metadata: Metadata = {
  title: "Credit Insurance for Businesses | Vestigo India",
  description:
    "Comprehensive credit insurance solutions for businesses to protect against credit risks and defaults.",
};

export default function Page() {
  return <CreditInsurance />;
}
