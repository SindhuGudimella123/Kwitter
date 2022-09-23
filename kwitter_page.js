//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyB1UBief4RC2NrR3cvUWj07q664LmqVKVE",
      authDomain: "kwitter-999fd.firebaseapp.com",
      databaseURL: "https://kwitter-999fd-default-rtdb.firebaseio.com",
      projectId: "kwitter-999fd",
      storageBucket: "kwitter-999fd.appspot.com",
      messagingSenderId: "580049561154",
      appId: "1:580049561154:web:1968c770a703e0898fafdb"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   function send()
{
      msg=document.getElementById("msg").ariaValueMax;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
