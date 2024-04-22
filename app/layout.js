import { Inter, Signika } from "next/font/google";
import "./globals.css";

const signika = Signika({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={signika.className}>{children}</body>
    </html>
  );
}
