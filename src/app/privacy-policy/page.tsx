import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = { title: "Privacy Policy | ByteSpace" };

export default function PrivacyPolicyPage() {
  return <LegalPage title="Privacy Policy" intro="A clear summary of how this frontend demonstration treats information." sections={[
    { title: "Information you provide", body: "ByteSpace may receive information you enter into forms, such as an email address. This assessment frontend does not send that information to a server or persist it in a database." },
    { title: "How information is used", body: "Information entered in the interface is used only to demonstrate form validation and user experience behavior in the current browser session." },
    { title: "Your choices", body: "You can leave forms empty, clear entered values, or close the page at any time. No marketing subscription is created by this demonstration." },
  ]} />;
}
