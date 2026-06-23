import type { Metadata } from "next";
import AbilitySuite from "./AbilitySuite";

export const metadata: Metadata = {
  title: "Ability Suite Insurance for Businesses | Vestigo India",
  description:
    "Comprehensive ability suite solutions for businesses to enhance their insurance coverage and risk management.",
};

export default function Page() {
  return <AbilitySuite />;
}
