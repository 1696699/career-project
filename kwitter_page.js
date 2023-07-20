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
//YOUR FIREBASE LINKS
user_name = localStorage.getItem("userName_Now");
room_name = localStorage.getItem("room_name");
function sendMsg(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = ""
}



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
      //Start code
      console.log(firebase_message_id);
      name1 = message_data['name'];
      message = message_data['message'];
      like = message_data['like'];
      name_tag = "<h4>" + name1 + "<img class='user_tick' src='tick.png'></h4>";
      message_tag = "<h4 class='message_h4'>" + message+ "</h4>";
      row = name_tag + message_tag;
      document.getElementById("output").innerHTML += row;
      //End code
      } });  }); }
getData();
function updateLikes(message_id){
      console.log("clicked on the like button -" + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      update_likes = Number(likes)+1;
      console.log("updated likes: " + update_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like:update_likes
      });
}
function logout(){
      localStorage.removeItem("userName_Now");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}