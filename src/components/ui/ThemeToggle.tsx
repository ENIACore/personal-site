'use client';
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

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
            className="fixed top-3.5 left-1 sm:top-3.5 sm:left-3.5 lg:top-10 lg:left-10 cursor-pointer z-50"
        >
            {isDark ? (
                <Sun className="w-7 h-7 sm:w-10 sm:h-10 text-foreground hover:text-foreground-muted" />
            ) : (
                <Moon className="w-7 h-7 sm:w-10 sm:h-10 text-foreground hover:text-foreground-muted" />
            )}
        </button>
        <span className="fixed left-4 top-27 sm:left-8.5 sm:top-29.5 lg:left-15 lg:top-37 -rotate-90 origin-left text-sm text-foreground italic pointer-events-none">
            Click me! ☞
        </span>
        </>
    );
}

export default ThemeToggle;
