import { NavLink } from "react-router-dom"
import { ThemeToggleBtn } from "./themeToggle.jsx"
import { DownLoadCv } from "./downloadeCV.jsx"
//import { X } from "lucide-react"
//import { MobileMenuButton } from "./mobileMenuButton.jsx"

const navigationLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Projects", path: "/projects" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
]

export const MobileMenu = ({ isOpen, onClose }) => {
    return (
        <>
            {/* dark overlay behind the navigation when use click ,close the navigatio*/}
            <div className={`mobile-naigation-overlay ${isOpen ? 'is-visible' : ""}`} onClick={onClose}></div>


            <aside  className={`mobile-navigation ${isOpen ? 'is-open' : ""}`} aria-label="Mobile navigation" aria-hidden={!isOpen}>

                {/* Mobile navigation header */}
                <div className="mobile-navigation-header">
                    <span className="mobile-navigation-title">
                        Menu
                    </span>

                    {/* Close button */}
                    
                </div>

                {/* Navigation links */}
                <nav>
                    <ul className="mobile-navigation-links">
                        {navigationLinks.map(({ label, path }) => (
                            <li key={path}>
                                <NavLink
                                    to={path}
                                    className={({ isActive }) =>
                                        `mobile-navigation-link ${isActive ? "active" : ""
                                        }`
                                    }
                                    onClick={onClose}
                                >
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>




                <div className="mobile-menu-action">
                    <ThemeToggleBtn />
                    <DownLoadCv />
                </div>

            </aside>
        </>
    )
}