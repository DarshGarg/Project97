// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBnusffh9gUNTwanSKj83tvFshhzdFwq1E",
  authDomain: "kwitter-6fbd8.firebaseapp.com",
  databaseURL: "https://kwitter-6fbd8-default-rtdb.firebaseio.com",
  projectId: "kwitter-6fbd8",
  storageBucket: "kwitter-6fbd8.appspot.com",
  messagingSenderId: "389423376843",
  appId: "1:389423376843:web:073302119bbf11f2ca2e4e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("Username");
  document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

  function addroom() {
         room_name = document.getElementById("room_name").value;

         firebase.database().ref("/").child(room_name).update({
              purpose: "Adding Room Name"
        });

        localStorage.setItem("Roomname",room_name);
    
        window.location = "kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
        console.log("room_name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML += row;
  //End code
  });});}
getData();
function redirectToroomname(name){
  console.log(name);
  localStorage.setItem("Roomname",name);
  window.location = "kwitter_page.html";
}
function logout() {
  localStorage.removeItem("Username");
  localStorage.removeItem("Roomname");
  window.location = "index.html";
}