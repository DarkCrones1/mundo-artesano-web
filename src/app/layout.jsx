import { Roboto } from "next/font/google";
import "@/css/globals.css";

export const metadata = {
  title: 'Mundo Artesano',
  description: 'Generated by Next.js',
}

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}</body>
    </html>
  )
}
