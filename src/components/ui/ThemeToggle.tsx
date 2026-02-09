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
                <Moon className="w-7 h-7 sm:w-10 sm:h-10 text-foreground hover:text-foreground-muted" />
            ) : (
                <Sun className="w-7 h-7 sm:w-10 sm:h-10 text-foreground hover:text-foreground-muted" />
            )}
        </button>
        </>
    );
}

export default ThemeToggle;
