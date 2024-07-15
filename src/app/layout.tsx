import Link from "next/link";
import "./globals.css";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Hi from root layout!",
  description: "Desc form root",
  openGraph: {
    type: "profile",
    lastName:"moeg",
    firstName: "cisu"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav>
          <ul>
            <li><Link href={'/'} prefetch={false}>Home</Link></li>
            <li><Link href={'/about'}>About</Link></li>
            <li><Link href={'/team'}>Team</Link></li>
          </ul>
        </nav>
        <h1>hi</h1>
        {children}
      </body>
    </html>
  );
}
