import type { Metadata } from "next";
import IndustriesHome from "./IndustriesHome";

export const metadata: Metadata = {
  title:
    "Insurance for Manufacturing, Chemical, IT & 12+ Industries | Vestigo India",

  description:
    "Sector-specific insurance programmes for chemical, infrastructure, automotive, BFSI, green energy and SME industries.",
};

export default function Page() {
  return <IndustriesHome />;
}
