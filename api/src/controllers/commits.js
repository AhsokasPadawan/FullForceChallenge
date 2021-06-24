const axios = require('axios');
const { response } = require('express');
const {BASE_URL, COMMIT} = require('../../constants');




function getCommits(req, res){
        const data = axios.get(`https://api.github.com/repos/AhsokasPadawan/FullForceChallenge/commits`, 
        {header :{username: `AhsokasPadawan` }, Accept: 'application/vnd.github.v3+json'});
        data.then(response=>{
            console.log('response', response.data[0].commit);
            let arrayOfCommits = response.data.map(each=>{

                return    {
                    user : each.author.login,
                    email : each.commit.author.email,
                    date: each.commit.author.date,
                    message : each.commit.message,
                    sha : each.commit.tree.sha,
                    url : each.commit.tree.url,
                }
            }
            )
            res.json(arrayOfCommits);
        })
        .catch(err => console.log(err));
        
}

function sayHi(req, res){
    res.send('You should probably stop and eat something')
}


module.exports = {
    getCommits,
    sayHi

}

