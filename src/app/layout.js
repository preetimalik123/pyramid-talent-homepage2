import { Plus_Jakarta_Sans   } from "next/font/google";
import "./globals.css";

const dmSans = Plus_Jakarta_Sans  ({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Pyramid Talent",
  description: "Global talent solutions homepage redesign",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}