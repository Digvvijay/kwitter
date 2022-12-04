//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBdLP34JU2PQXB-ADFL-BsDwUHSvNlDDis",
      authDomain: "kwitter-280db.firebaseapp.com",
      projectId: "kwitter-280db",
      databaseURL:"https://kwitter-280db-default-rtdb.firebaseio.com/",
      storageBucket: "kwitter-280db.appspot.com",
      messagingSenderId: "178454884208",
      appId: "1:178454884208:web:334200276d0d3d921029b5",
      measurementId: "G-206WSTYXTN"
    };
    username=localStorage.getItem("username");
    roomname=localStorage.getItem("roomname");
function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(roomname).push({
            name:username,
            message:msg,
            like:0
      });  
      document.getElementById("msg").value="";  
}
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
