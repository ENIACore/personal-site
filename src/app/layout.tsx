import type { Metadata } from "next";
import { spectral } from '../lib/fonts';
import "./globals.css";
import BackgroundGradient from "../components/ui/BackgroundGradient";
import ThemeToggle from "../components/ui/ThemeToggle";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

export const metadata: Metadata = {
  title: "Chase's Server",
  description: "Chase's homelab server for all projects",
};
//style="background-image: url('/images/backgrounds/bg-gradient.png'); background-size: 161px; background-repeat: repeat;"
// Tailwind CSS class order: Layout -> Flex/Grid -> Spacing -> Sizing -> Typography -> Visual -> Effects -> Misc -> State -> Responsive
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
    <html lang="en" className={`${spectral.variable} bg-background-subtle`}>
        <body className="relative flex flex-col min-h-screen bg-background-subtle">

            {/* paper texture and theme toggle */}
            <ThemeToggle/>
            <BackgroundGradient opacity={.06}/>

            {/* header (navbar) */}
            <Navbar/>

            {/* body (container fills height if minimal content) */}
            <main className="flex flex-col flex-1">
                <div className="my-auto">
                {children}
                </div>
            </main>

            {/* footer */}
            <Footer/>
        </body>
    </html>
    );
}
// <main className="my-auto">
