import { useTheme } from "../Context/useTheme.js"
import {Moon, Sun} from 'lucide-react'

export const ThemeToggleBtn = () =>{

    const {theme, toggleTheme} = useTheme()
    return (
        <button
    type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="theme-toggle"
    >
      {theme === "light" ? (
        /* Moon Icon */
        <Moon />
      ) : (
        /* Sun Icon */ 
        <Sun/>
      )}
    </button>

    )
}