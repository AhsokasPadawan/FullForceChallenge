import React, {useEffect} from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Style from '../Styles/Home.module.css';
import CardContainer from './CardContainer';
import {getCommits} from '../Actions/index';
import { useDispatch } from "react-redux";



function Home(){
    
    const dispatch = useDispatch();

    useEffect(
        ()=>{ 
            dispatch(getCommits())
        },[]
    )

    return(
        <div id="home" className={Style.container}>
            <NavBar />
            <CardContainer />
            <Footer />
        </div>
    )
}


export default Home;
