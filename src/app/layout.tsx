import type { Metadata } from "next";
import { nonceCache } from "./nonceCache";
import { headers } from "next/headers";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Hoisted style tag",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nonce = (await headers()).get("x-nonce");
  nonceCache().current = nonce;
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
