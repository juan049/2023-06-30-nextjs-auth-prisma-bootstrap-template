import { NextAuthProvider } from "@/providers/auth/providers";

export default function ProtectedPageLayout({ children }) {
  return (
    <NextAuthProvider>
      <div className="container">{children}</div>
    </NextAuthProvider>
  );
}
