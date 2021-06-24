const axios = require('axios');
const {BASE_URL, COMMITS, REPO, USER} = require('../../constants');


function getCommits(req, res){
        // const data = axios.get(`https://api.github.com/repos/AhsokasPadawan/FullForceChallenge/commits`, 
        const data = axios.get(`${BASE_URL}${USER}${REPO}${COMMITS}`, 
        {header :{username: `AhsokasPadawan` }, Accept: 'application/vnd.github.v3+json'});
        data.then(response=>{
            let arrayOfCommits = response.data.map(each=>{

                let date = `${each.commit.author.date.split('T')[0]} ${each.commit.author.date.replace("Z", "").split('T')[1] }` ;
                return    {
                    user : each.author.login,
                    email : each.commit.author.email,
                    date: date,
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

