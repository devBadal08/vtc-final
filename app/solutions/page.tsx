import type { Metadata } from "next";
import Solutions from "./Solutions";

export const metadata: Metadata = {
  title:
    "Commercial Insurance Solutions for Businesses | Vestigo Insurance Brokers",
  description:
    "Explore Vestigo's full range of commercial insurance, liability, employee benefits and risk advisory solutions for indian enterprises.",
};

export default function Page() {
  return <Solutions />;
}
