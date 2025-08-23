import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import "../index.css";

export const metadata: Metadata = {
  title: "Loomi",
  description: "Your Loomi application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-inter bg-[#0a0a0a] min-h-screen">{children}</body>
    </html>
  );
}
