import type { Metadata } from "next";
import WhoWeAre from "./WhoWeAre";

export const metadata: Metadata = {
  title: "About Vestigo - Risk Intelligence Broker | IRDAI Regn. 1131",
  description:
    "Vestigo is an IRDAI licensed direct broker founded on the conviction that insurance must work when it is needed most.",
};

export default function Page() {
  return <WhoWeAre />;
}
