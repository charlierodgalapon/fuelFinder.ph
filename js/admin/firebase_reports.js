

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


// TABLE ALL GASOWNERUSERS



var db = firebase.database();
var ref = db.ref("GasOwners");
ref.orderByKey().on("child_added", function(snapshot) {

console.log(snapshot.key + " was key id of " + snapshot.val().firstname + " Firstname and"  + snapshot.val().status + " status");

var key = snapshot.key;
var firstname = snapshot.val().firstname;
var lastname = snapshot.val().lastname;
var region = snapshot.val().region;
var imgurl = snapshot.val().profilepictureURL;
var email = snapshot.val().email;
var contact = snapshot.val().contactnumber;







$('#allowners').append(html(snapshot.val()));
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
html += '<td class="py-1">';
html += '<img class=""   src="' +imgurl+'" alt="imageurl"'; 
html += ' </td>';
html += '<td>';
html += firstname + '&nbsp;' + lastname;
html += '</td>';
html += '<td>';
html += email;
html += '</td>';
html += '<td>';
html += region;
html += '</td>';
html += '<td>';
html += contact;
html += '</td>';


                       
                      





return html;
}




});
// REPORT DATA TABLE
var db = firebase.database();
var ref = db.ref("RateReview");
ref.orderByChild("status").equalTo('negative').on("child_added", function(snapshot) {

console.log(snapshot.key + " was key id of " + snapshot.val().firstname + " Firstname and"  + snapshot.val().status + " status");

var review = snapshot.val().review;
var key = snapshot.key;
var useruid = snapshot.val().userUid;
var stationid = snapshot.val().gsUid;
// var rows = document.getElementById('tablereport').getElementsByTagName("tr").length;
// document.getElementById('numreport').innerHTML = rows;






$('#tablereport').append(html(snapshot.val()));
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
html += '<td>';
html += review; 
html += '</td>';;
html += '<td>';
html += stationid;
html += '</td>';
html += '<td>';
html += useruid;
html += '</td>';
html += '<td>';
html += ' <button type="button" value="'+ key +'" onclick="deletereportedcomment(this)" class="btn btn-danger btn-icons btn-rounded"> <i class="fa fa-power-off"></i></button>';
html += '</td>';


                       
                      





return html;
}




});

// Delete reported comments from direbase db
function deletereportedcomment(deleteit){
  var del = deleteit.value;
  var db = firebase.database();
  var ref = db.ref("RateReview/");
  ref.child(del).remove();
     window.alert("REPORTED");
     location.reload();
}

// Getting data from firebase to modal and update price
function viewprofile(elem) {   
    console.log(elem.value);
   
  
    kk = elem.value;
    // var id = firebase.auth().currentUser.uid
      var db = firebase.database();
      var ref = db.ref("GasOwners/");
  
  ref.orderByKey().equalTo(kk).on("child_added", function(snapshot) {
    var email = snapshot.val().email;
    var ownerid = snapshot.val().gasownerid;
    var firstname = snapshot.val().firstname;
    var lastname = snapshot.val().lastname;
    var age = snapshot.val().age;
    var dob = snapshot.val().dateofbirth;
    var contact = snapshot.val().contactnumber;
    var street = snapshot.val().streetaddress;
    var baranggay = snapshot.val().baranggay;
    var city = snapshot.val().city;
    var region = snapshot.val().region;
    var zipcode = snapshot.val().zipcode;

    var govid = snapshot.val().governementidURL;


    var imgurlto = snapshot.val().profilepictureURL;
    document.getElementById('ownerprofilepic').src = imgurlto;
    document.getElementById('userid').innerHTML = ownerid;
    document.getElementById('fullnameid').innerHTML = firstname + "&nbsp;" + lastname;
    document.getElementById('dobid').innerHTML = dob;
    document.getElementById('emailid').innerHTML = email;
    document.getElementById('contactid').innerHTML = contact;
    document.getElementById('streetid').innerHTML = street;
    document.getElementById('baranggayid').innerHTML = baranggay +",&nbsp;" + city +",&nbsp;" + region ;
    document.getElementById('zipcodeid').innerHTML = zipcode;
    document.getElementById('govlink').href = govid;
    document.getElementById('approvedid').value = snapshot.key;






    console.log("KEY : " + snapshot.key);
  });
  
  
  }


