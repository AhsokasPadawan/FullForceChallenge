
# FullForce Challenge / Get commits. 

This is a web app that allows you to see all the commits for a 
proyect that you configure.



## API Reference

#### Get all items

```http
  GET /api/commits
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `REPO` | `string` | **Required**. Your chosen repository |
| `USER` | `string` | **Required**. Your GitHub User |


We will use our own API. In the folder Api you need to find
the file constants.js, and add your Github User and repository.


  
## Installation 

Once you forked the repository you will need to install 
all the dependencies

```bash 
  at Client and Api folder you must do npm i
```
    
## Documentation

[Documentation]

This App is composed by an Api and a client. 
At the Api folder
you will find the routes and controllers that bring data 
from the GitHub Api and send it to the client.

At the client you will find a SPA built with React and Redux. 
You will find the call to our API at Actions folder.
If you want to change the Style, you can do it by accessign
the files within the Style folder.


  
## Feedback

If you have any feedback, please reach out to us at mrossijavier@gmail.com

  
## Authors

- [@AhsokasPadawan](https://ahsokaspadawan.github.io/#)
