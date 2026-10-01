import type { Metadata } from "next";
import { AuthLayout } from "@/components/auth/AuthLayout";

export const metadata: Metadata = { title: "Create an Account | ByteSpace" };

export default function SignupPage() { return <AuthLayout mode="signup" />; }
