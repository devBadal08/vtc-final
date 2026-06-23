import type { Metadata } from "next";
import EmployeeBenefits from "./EmployeeBenefits";

export const metadata: Metadata = {
  title: "Employee Benefits Insurance for Businesses | Vestigo India",
  description:
    "Comprehensive employee benefits solutions for businesses to attract and retain top talent.",
};

export default function Page() {
  return <EmployeeBenefits />;
}
