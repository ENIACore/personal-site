import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import BackgroundGradient from "../components/ui/BackgroundGradient";

const crimsonPro = localFont({
    src: [
    {
        path: '../../public/fonts/crimson-pro/CrimsonPro-VariableFont_wght.ttf',
        style: 'normal',
    },
    {
        path: '../../public/fonts/crimson-pro/CrimsonPro-Italic-VariableFont_wght.ttf',
        style: 'italic',
    },
    ],
    variable: '--font-crimson-pro',
    display: 'swap',
});


export const metadata: Metadata = {
  title: "Chase's Server",
  description: "Chase's homelab server for all projects",
};
//style="background-image: url('/bg-gradient.png'); background-size: 161px; background-repeat: repeat;"
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
    <html lang="en" className={`${crimsonPro.variable}`}>
        <body className="relative bg-background-subtle">
            <BackgroundGradient classes='' opacity={.04}/> 
            {children}
        </body>
    </html>
    );
}
