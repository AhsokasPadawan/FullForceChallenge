import React, {useEffect} from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Style from '../Styles/Home.module.css';
import CardContainer from './CardContainer';
import {getDogs, getTemperaments, getNames} from '../Actions/index';



function Home({getDogs, getTemperaments, getNames}){
    
    useEffect(
        ()=>{ 
            getDogs()
            getTemperaments()
            getNames()
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
