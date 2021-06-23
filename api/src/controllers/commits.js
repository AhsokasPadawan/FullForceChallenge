const axios = require('axios');
const { response } = require('express');
const {BASE_URL, COMMIT} = require('../../constants');




function getCommits(req, res){
        const data = axios.get(`https://api.github.com/repos/AhsokasPadawan/FullForceChallenge/tree/master/fullforcechallenge/git/commits/COMMIT_SHA`, {header :{username: `AhsokasPadawan` }, Accept: 'application/vnd.github.v3+json'});
        data.then(response=>{
            console.log(response.author, response.message)
            res.json(response.author, response.message);
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

