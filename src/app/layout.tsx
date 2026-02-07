import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import SectionWrapper from "../components/layout/SectionWrapper";
import Section from "../components/layout/Section";
import Gradient from "../components/shared/Gradient";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
    <html lang="en" className={crimsonPro.variable}>
        <body className="bg-neutral-100">
        <Gradient/>
        {children}
        </body>
    </html>
    );
}
