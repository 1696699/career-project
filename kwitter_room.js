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
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("userName_Now");
document.getElementById("username").innerHTML = "Welcome " + user_name + "!";
function createRoom(){
      room_name = document.getElementById("roomInput").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding Room Name"
      });
      localStorage.setItem("room_name", room_name);
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room-names are " + Room_names)
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoom(this.id);'>"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoom(nameOfRoom){
      localStorage.setItem("room_name", nameOfRoom);
      window.location = "ChatWithMe_page.html"
}
function logoutOfPage(){
      localStorage.removeItem("userName_Now");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}