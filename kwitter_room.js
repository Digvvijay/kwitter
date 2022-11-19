
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      const firebaseConfig = {
            apiKey: "AIzaSyBdLP34JU2PQXB-ADFL-BsDwUHSvNlDDis",
            authDomain: "kwitter-280db.firebaseapp.com",
            projectId: "kwitter-280db",
            firebase db:"https://kwitter-280db-default-rtdb.firebaseio.com/";
            storageBucket: "kwitter-280db.appspot.com",
            messagingSenderId: "178454884208",
            appId: "1:178454884208:web:334200276d0d3d921029b5",
            measurementId: "G-206WSTYXTN"
          };
          
          // Initialize Firebase
          const app = initializeApp(firebaseConfig);
          const analytics = getAnalytics(app);
          

      //End code
      });});}
getData();
