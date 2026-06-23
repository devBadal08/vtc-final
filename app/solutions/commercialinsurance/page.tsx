import type { Metadata } from "next";
import CommercialInsurance from "./CommercialInsurance";

export const metadata: Metadata = {
  title: "Commercial Insurance for Businesses | Vestigo India",
  description:
    "Comprehensive commercial insurance solutions for businesses to protect against various risks and liabilities.",
};

export default function Page() {
  return <CommercialInsurance />;
}
