var firebaseConfig = {
    apiKey: "AIzaSyAhL7lcNs-ah3RBVypww2bAbjhzlfmBX_g",
    authDomain: "career-project-aa868.firebaseapp.com",
    databaseURL: "https://career-project-aa868-default-rtdb.firebaseio.com",
    projectId: "career-project-aa868",
    storageBucket: "career-project-aa868.appspot.com",
    messagingSenderId: "166152489614",
    appId: "1:166152489614:web:a6529e232b8385ac3a57df"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//-------------------------------------------
//            Firebase connection
//-------------------------------------------

function load(){
    window.location = "#Home";
    screenHeight = screen.height;
    document.getElementById("homePage").style.height = screenHeight;
    document.getElementById("Chat").style.height = screenHeight;
}

function addUser(){
    userName = document.getElementById("user_name").value;
    localStorage.setItem("userName_Now", userName);
    window.location = "ChatWithMe_room.html";
    
}