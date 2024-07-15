import Link from "next/link";
import "./globals.css";

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
            <li><Link href={'/team/about'}>Team About</Link></li>
          </ul>
        </nav>
        <h1>hi</h1>
        {children}
      </body>
    </html>
  );
}
