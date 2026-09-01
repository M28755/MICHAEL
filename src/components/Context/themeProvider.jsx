import { useEffect, useState } from "react"
import { ThemeContext } from "./themeContext.jsx";


export const ThemeProvider =({children}) =>{
    const [theme , setTheme] = useState(()=>{
         const saveTheme = localStorage.getItem('theme');

        if (saveTheme) return saveTheme;
        // Detect system preference as a fallback
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';
    })

    useEffect(()=>{
          const root = document.documentElement;

        // Set data-theme attribute
        root.setAttribute("data-theme", theme);

        // Add/remove Tailwind dark mode class
        root.classList.toggle("dark", theme === "dark");

        // Persist theme
        localStorage.setItem("theme", theme);
    }, [theme])
    const toggleTheme = () => {
        setTheme((currentTheme) =>
            currentTheme === "light" ? "dark" : "light"
        );
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}