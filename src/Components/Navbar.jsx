import React, {useState} from 'react'
import "./css/Navbar.css"
import { useDispatch , useSelector} from "react-redux";
import { Link, NavLink, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars , faTimes} from '@fortawesome/free-solid-svg-icons';
import { toPath } from "../utils/helper"
const Navbar = () => {
    const appState = useSelector(state => state.appState)
    const [open, setOpen] = useState(false)

    const closeMenu = () =>{
        setOpen(false)
    }

    const handleMenu = () =>{
        setOpen(!open)
    }

    return (
        <nav className="navbar">
            <div className="nav-items">
                <NavLink to="/" className="nav-logo">
                    <img className="line-today-ico" src="https://static-today.line-scdn.net/dist/d4981dd1/static/img/brand-logo-rectangle-today-solid.svg" alt="logo" />
                </NavLink>
                <div className="button-bar-icon">
                    <FontAwesomeIcon icon={open ? faTimes : faBars} size="lg" fixedWidth onClick={handleMenu}/>
                </div>
            </div>
            <div className={open ? "tab-menu active" : "tab-menu"}>
                <ul className="tab-items">
                    {
                        appState.categoryList.map((category) =>{
                            return (<li className="menu-item">
                        
                            <NavLink
                                exact
                                to={"/" + 
                                    toPath(category.name)
                                }
                                activeClassName='nav-selected'
                                className='nav-links'
                                onClick={closeMenu}
                            >
                                {category.name}
                                        </NavLink>
                            </li>)
                        })
                    }
                    
                </ul>
            </div>
        </nav>
    
    )
}

export default Navbar
