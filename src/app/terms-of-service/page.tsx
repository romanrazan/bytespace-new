import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = { title: "Terms of Service | ByteSpace" };

export default function TermsOfServicePage() {
  return <LegalPage title="Terms of Service" intro="Terms for using the ByteSpace assessment experience." sections={[
    { title: "Demonstration service", body: "ByteSpace is presented here as a frontend assessment. Course enrollment, payments, authentication, and social sign-in are visual demonstrations and do not create real transactions or accounts." },
    { title: "Acceptable use", body: "Use the interface lawfully and do not attempt to disrupt, misuse, or interfere with the application or its supporting services." },
    { title: "Content and availability", body: "Course information and creator profiles are sample content. Features, content, and availability may change as the demonstration evolves." },
  ]} />;
}
