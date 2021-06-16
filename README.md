# Chatify-Frontend

## About
Chatify is a web app that allows users create their personal account, send and search messages. Beside text, users can also send image. This app created using React, Redux. In this app, there are also an example how to doing unit testing. [Server-side](https://github.com/deaedria/chatify-server.git) created with Node.js and Express.js.

## Getting started

To get the React app running locally:

* Clone this repo with `git clone https://github.com/deaedria/chatify-react-ui.git`
* `cd chatify-react-ui`
* `npm install` to install all required dependencies
* Create a `.env` file and reference the `env.example` file
* `npm start` to start the local server

## Folder Structure

    ├── public                    
    │   ├── img              
    │   ├── svg
    │   ├── uploads
    │   └── index.html            
    ├── src
    │   ├── Redux
    │   │   ├── Actions 
    │   │   │   ├── chats.js  
    │   │   │   ├── message.js 
    │   │   │   ├── users.js   
    │   │   ├── Reducers   
    │   │   │   ├── ...      
    │   │   │   └── index.js    
    │   |   └── store.js
    │   ├── Components 
    │   │   ├── ActionMenu.js  
    │   │   ├── BackPage.js  
    │   │   ├── Routes 
    │   │   │   ├── PrivateRoute.js  
    │   │   │   ├── PublicRoute.js     
    │   │   │   └── index.js  
    │   │   ├── ...
    │   |   └── index.js    
    │   ├── pages 
    │   │   ├── Message     
    │   │   │   └── ...    
    │   │   ├── Chatlist 
    │   │   │   └── ... 
    │   │   ├── Login 
    │   │   │   └── ... 
    │   │   └── index.js     
    │   ├── App.js
    |   ├── index.js
    |   └── ...   
    └── ...
    
### **Screenshots :**

| Dekstop  | Mobile |
| - | - |
|>**Login**||
|![Desktop](https://i.ibb.co/yBvpDZY/Capture.png)|![Mobile](https://i.ibb.co/9Z0WZY9/Capture1.png)|
|>**Chat List**||
|![Desktop](https://i.ibb.co/L96pyRk/Capture2.png)|![Mobile](https://i.ibb.co/HnQtncL/Capture3.png)|
|>**Message**||
|![Desktop](https://i.ibb.co/ssVn8JZ/Capture4.png)|![Mobile](https://i.ibb.co/NVhzhZx/Capture5.png)|
```


