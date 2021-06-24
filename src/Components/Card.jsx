import React from 'react';
import {Link} from 'react-router-dom';
import Style from '../Styles/Card.module.css'; 


function Card({sha,user,email,date,message,url }){

    return(
        <div className={Style.Card}>
            <h1 className ={Style.title}>User: {user}</h1>
            <div className={Style.data}>
                <h3 className ={Style.item}>Email: {email}</h3>
                <h3 className ={Style.item}>Date: {date}</h3>
                <h3 className ={Style.item}>Message: {message}</h3>
                <h3 className ={Style.item}>Commit Sha: {sha}</h3>
            </div>
            <a href={url}><span className={Style.urlBtn}>Go to URL</span></a>
        </div>
    )
}

export default Card;

