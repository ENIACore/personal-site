'use client';
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

// Tailwind CSS class order: Layout -> Flex/Grid -> Spacing -> Sizing -> Typography -> Visual -> Effects -> Misc -> State -> Responsive
function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

    }, [isDark]);

    const toggle = () => {
        setIsDark(!isDark);
    }
    return (
        <>
        <button
            onClick={toggle}
            className="fixed top-3.5 left-1 z-50 cursor-pointer sm:top-3.5 sm:left-3.5 lg:top-10 lg:left-10"
        >
            {isDark ? (
                <Sun className="w-7 h-7 text-foreground hover:text-foreground-muted sm:w-10 sm:h-10" />
            ) : (
                <Moon className="w-7 h-7 text-foreground hover:text-foreground-muted sm:w-10 sm:h-10" />
            )}
        </button>
        <span className="fixed left-4 top-27 text-sm text-foreground italic -rotate-90 origin-left pointer-events-none sm:left-8.5 sm:top-29.5 lg:left-15 lg:top-37">
            Click me! ☞
        </span>
        </>
    );
}

export default ThemeToggle;
