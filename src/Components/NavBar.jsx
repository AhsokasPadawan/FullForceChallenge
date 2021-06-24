import React from 'react';
import Style from '../Styles/NavBar.module.css';
import Logo from '../Images/logo.png';
import {NavLink} from 'react-router-dom';

function NavBar(){
    return(
        <div className={Style.container}>
            <NavLink exact to="/home"><img src={Logo} alt="logo" className={Style.logo} /></NavLink> 
            <div className={Style.navLink}>
                <h1>Commit logs</h1>
            </div>
        </div>
    )
}

export default NavBar;