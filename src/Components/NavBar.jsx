import React from 'react';
import Style from '../Styles/NavBar.module.css';
import Logo from '../Images/logo.png';
import {NavLink} from 'react-router-dom';
import { useDispatch } from "react-redux";
import {getCommits} from '../Actions/index';

function NavBar(){

    const dispatch = useDispatch();
    function onClick(){
        dispatch(getCommits())
    }


    return(
        <div className={Style.container}>
            <NavLink exact to="/home"><img src={Logo} alt="logo" className={Style.logo} /></NavLink> 
            <div className={Style.navLink}>
                <button onClick={onClick} className={Style.refreshBtn}>Refresh Commits</button>
            </div>
        </div>
    )
}

export default NavBar;