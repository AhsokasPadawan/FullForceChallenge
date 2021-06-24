import React, {useState } from 'react';
import Card from './Card'
import Style from '../Styles/CardContainer.module.css';
import { useSelector } from "react-redux";


function CardContainer(){
  
    //gettin the commits
    const commits = useSelector((state) => state.commits);
    console.log('commits', commits);
    
    // Pagination
    const [initial, setInitial] = useState(0);
    const [end, setEnd] = useState(8);
    
    function handleClick(each){
        setInitial((parseInt(each) - 1)*8 );
        setEnd(parseInt(each)*8)    
    }

    let pages = [];
    let someCommits= [];
    if(commits.length > 0){
        someCommits= commits.slice(initial, end);
        for(let i= 0; i < Math.ceil(commits.length/8); i++){
            pages.push(i + 1);
        }
    }

    

    if(commits.length < 1){
        return(
            <div className={Style.cardContainer}>
                <h1>There are no commits for this proyect </h1>
            </div>
        )
    }


    return(
        <div className={Style.container}>
            <div className={Style.cardContainer}>
            {someCommits.map((commit, index)=> <Card 
                                    sha={commit.sha}
                                    user={commit.user}
                                    email={commit.email}
                                    date={commit.date}
                                    message={commit.message}
                                    url={commit.url}
                                    key={index}
                                    />)}
            </div>
            <div>{pages.map((each, index)=> <button className={Style.pageButton} value={each} key={index} onClick = {(e)=>handleClick(e.target.value)}>{each}</button>)}</div>
        </div>
    )
}

export default CardContainer;