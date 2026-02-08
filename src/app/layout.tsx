import type { Metadata } from "next";
import { spectral } from '../lib/fonts.ts';
import "./globals.css";
import BackgroundGradient from "../components/ui/BackgroundGradient";

export const metadata: Metadata = {
  title: "Chase's Server",
  description: "Chase's homelab server for all projects",
};
//style="background-image: url('/images/backgrounds/bg-gradient.png'); background-size: 161px; background-repeat: repeat;"
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
    <html lang="en" className={`${spectral.variable} bg-background-subtle`}>
        <body className="relative bg-background-subtle min-h-screen">
            <BackgroundGradient classes='' opacity={.06}/>
            {children}
        </body>
    </html>
    );
}
