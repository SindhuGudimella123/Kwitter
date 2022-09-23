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
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome " + user_name + ".";
  function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
  }
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row = "<div class='room_name' id = "+Room_names+" onclick='redirectToRoomName(this.id)' > #" + Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}