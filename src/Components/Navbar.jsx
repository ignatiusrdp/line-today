import React, {useState} from 'react'
import "./css/Navbar.css"
import { useDispatch , useSelector} from "react-redux";
import { Link, NavLink, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars , faTimes, faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import { toPath } from "../utils/helper"
const Navbar = () => {
    const appState = useSelector(state => state.appState)
    const routerState = useSelector(state => state.router)
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
                <div className="menu-button-icon" onClick={handleMenu}>
                    <p style={{padding:"0", margin:"0 .2em", fontSize:"1.2em", fontWeight:"600"}}>Kategori</p>
                    <FontAwesomeIcon icon={open ? faChevronUp : faChevronDown} size="lg" fixedWidth className="arrow-ico" />
                </div>
            </div>
            <div className="tab-menu-wrapper">
                <div className={open ? "tab-menu active" : "tab-menu"} onClick={closeMenu}>
                    <ul className={"tab-items"}>
                        {
                            appState.categoryTab.map((category, i) =>{
                                return (<li className={toPath(category.name) === routerState.location.pathname ? "menu-item current" : "menu-item"} key={i}>
                                
                                            <NavLink
                                                exact
                                                to={ 
                                                    toPath(category.name)
                                                }
                                                activeClassName='nav-selected'
                                                className={category.highlight === true ? 'nav-links hightlight' : 'nav-links'}
                                                onClick={closeMenu}
                                            >
                                                {category.name}
                                            </NavLink>
                                        </li>)
                            })
                        }
                        
                    </ul>
                </div>
            </div>
            
        </nav>
    
    )
}

export default Navbar
