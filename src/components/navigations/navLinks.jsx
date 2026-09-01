import { NavLink } from "react-router-dom"

const links = [
    {label:'Home' , path: '/'},
    {label:'About' , path: '/about'},
    {label:'Services' , path: '/services'},
    {label:'Projects' , path: '/projects'},
    {label:'Blog' , path: '/blog'},
    {label:'Contact' , path: '/contact'}
]

export const NavLinks = () =>{
    return(
        <ul className="nav-links">
            { links.map(({label , path})=>(
                <li key={path}> 
                <NavLink  to={path} className={({isActive}) =>`nav-link ${isActive ? "active" : ""}`}>
                  {label}
                </NavLink>
                </li>
            ))}
        </ul>
    )
}