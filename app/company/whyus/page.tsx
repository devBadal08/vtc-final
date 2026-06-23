import type { Metadata } from "next";
import WhyUs from "./WhyUs";

export const metadata: Metadata = {
  title:
    "Why Choose Vestigo - Expertise in dealing with Complex Claims | Risk Advisory India",
  description:
    "Vestigo has managed complex claims including IAR, Marine, Crime and CAR policies across industries.",
};

export default function Page() {
  return <WhyUs />;
}
