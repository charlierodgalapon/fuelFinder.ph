

  firebase.auth().onAuthStateChanged(function(user) {
    if(user){
    var db = firebase.database();
    var ref = db.ref("admin/");
    var user = firebase.auth().currentUser;
    var id = firebase.auth().currentUser.uid
    var email_ver = user.emailVerified;
    var email_id = user.email;
    document.getElementById('navtop_email').innerHTML = email_id;
    document.getElementById('navtop_email1').innerHTML = email_id;
    console.log(email_id);
    console.log(email_ver);

    ref.orderByChild('email').equalTo(email_id).on("child_added", function(snapshot) {
   emaill = snapshot.val().email;
   profilepic = snapshot.val().profilepicurl;
   
  var type = snapshot.val().type; 
  document.getElementById('typevalue').innerHTML = type;
  document.getElementById('profilepic').src = profilepic;

  if(email_ver == false){
      console.log("your email is not verified");
      
  }else{
    console.log("your email is verified");
    document.getElementById('verification').style.display = "none";

  }
   
});
  }else{
    location.href = "../../pages/gasstation/login.html";
  }

});
 
  function sendverification(){

    var user = firebase.auth().currentUser;
 
    user.sendEmailVerification().then(function(){
   //Email sent
   
    window.alert(" Verification Email Sent! Please check your inbox");
   
    location.reload;
    }).catch(function(error){
   //An error happened.
 
    window.alert("Error: " + error.message);
   
   });



   }

   function logout(){
    firebase.auth().signOut();
    location.href = "login.html";
  }


// TABLE ALL Stations



var db = firebase.database();
var ref = db.ref("GasStations");
ref.orderByKey().on("child_added", function(snapshot) {

console.log(snapshot.key + " was key id of " + snapshot.val().firstname + " Firstname and"  + snapshot.val().status + " status");

var key = snapshot.key;
var gasname = snapshot.val().gsname;
var contact = snapshot.val().contactnumber;
var owner = snapshot.val().owner;
var address = snapshot.val().address;







$('#allstation').append(html(snapshot.val()));
// document.getElementById("pendingusers").value = html();
//   var myColours = [];
//   for(let i = 0; i< data.length; i++){
//     myColours.push(data[i].key);
//     myColours.push(data[i].firstname);
//     myColours.push(data[i].lastname);
//     myColours.push(data[i].region);
//     myColours.push(data[i].img);
// }


function html(){
var html = '';

html += '<tr>';
html += '<td class="py-1">';
html += key; 
html += ' </td>';
html += ' <td>';
html += gasname;
html += '</td>';
html += '<td>';
html += owner;
html += '</td>';
html += '<td>';
html += address;
html += '</td>';


                       
                      





return html;
}




});



