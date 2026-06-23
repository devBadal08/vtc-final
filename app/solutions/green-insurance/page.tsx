import type { Metadata } from "next";
import GreenInsurance from "./GreenInsurance";

export const metadata: Metadata = {
  title: "Green Insurance for Businesses | Vestigo India",
  description:
    "Sustainable insurance solutions for businesses committed to environmental responsibility.",
};

export default function Page() {
  return <GreenInsurance />;
}
