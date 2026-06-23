import type { Metadata } from "next";
import SuretyBond from "./SuretyBond";

export const metadata: Metadata = {
  title: "Surety Bond Insurance for Businesses | Vestigo India",
  description:
    "Surety bond solutions for businesses to meet legal and contractual obligations.",
};

export default function Page() {
  return <SuretyBond />;
}
