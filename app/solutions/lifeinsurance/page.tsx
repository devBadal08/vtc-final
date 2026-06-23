import type { Metadata } from "next";
import LifeInsurance from "./LifeInsurance";

export const metadata: Metadata = {
  title: "Life Insurance for Businesses | Vestigo India",
  description:
    "Comprehensive life insurance solutions for businesses to protect their employees and assets.",
};

export default function Page() {
  return <LifeInsurance />;
}
