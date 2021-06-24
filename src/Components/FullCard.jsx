import React from "react";
// import React, {useEffect}from 'react';
// import { useDispatch, useSelector } from "react-redux";
// import { getFullCommits } from '../Actions/index';
// import Style from '../Styles/FullCard.module.css';
// import NavBar from './NavBar';
// import Footer from './Footer';


function FullCard({commitSha}){

    // const commits = useSelector((state) => state.fullCommit);
    // const dispatch = useDispatch();
    // useEffect(()=>{
    //     dispatch(getFullCommits(commitSha));
    // }, [])
    
   
    
    return(
        <div>
            {/* <NavBar />
            <div className={Style.Card}>
                <h3 className ={Style.title}>{fullDog.Name}</h3>
                <img className={Style.dogImg} src={fullDog.Image || "https://img2.freepng.es/20180415/jdw/kisspng-logo-silhouette-dog-bone-dog-5ad41d4b59e7d5.7560651515238505713683.jpg"} alt="a dog"/>
                <p>Temperaments: {fullDog.Temperament}</p>
                <p>Height: {fullDog.Height} cm </p>
                <p>Weight: {fullDog.Weight} kg</p>
                <p>LifeSpan: {fullDog.LifeSpan} </p>
            </div>
            <Footer /> */}
        </div>
    )
}

export default FullCard;

