import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = { title: "Cookie Settings | ByteSpace" };

export default function CookiesPage() {
  return <LegalPage title="Cookie Settings" intro="Cookie information for this ByteSpace frontend assessment." sections={[
    { title: "Essential storage", body: "The current assessment does not set custom advertising or analytics cookies. Framework-level storage may be used only when necessary for local development and normal application operation." },
    { title: "Preferences", body: "No persistent marketing preferences are stored by the newsletter, category filter, or search controls in this demonstration." },
    { title: "Browser controls", body: "You can review, block, or remove cookies through your browser settings. Blocking essential browser storage may affect some website behavior." },
  ]} />;
}
