export const metadata = {
  title: "Door Vincent | Training & Coaching",
  description: "Praktische training en coaching voor bedrijven, teams en professionals.",
};

import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
