import type { Metadata } from "next";
import { AuthLayout } from "@/components/auth/AuthLayout";

export const metadata: Metadata = { title: "Sign In | ByteSpace" };

export default function LoginPage() { return <AuthLayout mode="login" />; }
