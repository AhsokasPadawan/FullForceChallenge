import React from 'react';
import {Link} from 'react-router-dom';
import Style from '../Styles/DogCard.module.css'; 

/*
 sha={commit.sha}
                                    user={commit.user}
                                    email={commit.email}
                                    date={commit.date}
                                    message={commit.message}
                                    url={commit.url}
*/

function DogCard({sha,user,email,date,message,url }){

    return(
        <div className={Style.Card}>
            <div className={Style.info}>
            <h3 className ={Style.title}>User: {user}</h3>
            <h3 className ={Style.title}>Email: {email}</h3>
            <h3 className ={Style.title}>Date: {date}</h3>
            <h3 className ={Style.title}>Message: {message}</h3>
            <h3 className ={Style.title}>Url: <a href={url}>{url}</a></h3>
            </div>
            <div className={Style.titleContainer}>
            <Link to={`/home/${sha}`} >Get Details</Link>
            </div>
        </div>
    )
}

export default DogCard;

