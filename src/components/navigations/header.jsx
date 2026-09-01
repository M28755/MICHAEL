import { Logo } from "./logo"

import { NavLinks } from "./navLinks"
import { DownLoadCv } from "./downloadeCV"
import { ThemeToggleBtn } from "./themeToggle.jsx"
import { MobileMenuButton } from "./mobileMenuButton.jsx"
import { MobileMenu } from "./mobileMenu.jsx"
import { useState } from "react"

export const Header = () =>{
    //lets controll whether the mobile navigation is open or not
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () =>{
        setIsMenuOpen((prev) => !prev)
    }
    //close the mobile navigation
   const closeMenu =() =>{
    setIsMenuOpen(false)
   }
    return(
        <header className="site-header">
            <div className="header-container">
                  <Logo/>

                <nav className="desktop-navigation">
                    <NavLinks/>
                </nav>

                 <div className="header-actions">
                      <ThemeToggleBtn/>
                      <DownLoadCv/>
                 </div>
               <MobileMenuButton  isOpen={isMenuOpen} onClick={toggleMenu}/>

            </div>
            <MobileMenu isOpen={isMenuOpen} onclose={closeMenu}/>
        </header>
    )
}