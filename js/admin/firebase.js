

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


var rows = document.getElementById('allownerstable').getElementsByTagName("tr").length;
document.getElementById('numtotalowners').innerHTML = rows;
console.log(snapshot.numChildren + "Counts");




$('#allownerstable').append(html(snapshot.val()));
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


var rows = document.getElementById('allstation').getElementsByTagName("tr").length;
document.getElementById('numgasstation').innerHTML = rows;






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
// TABLE PENDING GASOWNERSERS STATUS FROM FIREBASE DB
  var db = firebase.database();
  var ref = db.ref("GasOwners");
ref.orderByChild("status").equalTo('pending').on("child_added", function(snapshot) {

console.log(snapshot.key + " was key id of " + snapshot.val().firstname + " Firstname and"  + snapshot.val().status + " status");

var key = snapshot.key;
var firstname = snapshot.val().firstname;
var lastname = snapshot.val().lastname;
var region = snapshot.val().region;
var imgurl = snapshot.val().profilepictureURL;
var email = snapshot.val().email;
var rows = document.getElementById('tableid').getElementsByTagName("tr").length;
document.getElementById('numrequest').innerHTML = rows;






$('#pendingusers').append(html(snapshot.val()));
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
html += '<img class=""   src="' +imgurl+'" alt="imageurl"'; 
html += ' </td>';
html += '<td>';
html += firstname + '&nbsp;' + lastname;
html += '</td>';;
html += '<td>';
html += '<button type="button" value="'+key+'" class="btn btn-icons btn-rounded btn-outline-info"  data-placement="top" title="View Profile" onclick="viewprofile(this);"  data-toggle="modal" data-target="#profile">';
html += ' <i class="fa fa-address-card"></i>';
html += '</button>';
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
var rows = document.getElementById('tablereport').getElementsByTagName("tr").length;
document.getElementById('numreport').innerHTML = rows;







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
    document.getElementById('disapprovedid').value = snapshot.key;







    console.log("KEY : " + snapshot.key);
  });
  
//    reff = db.ref("GasOwners").child(kk);
//     reff.child("products/").on("value", function(product_snap){
//       gsp = product_snap.val().gasolineplus;
//       gs = product_snap.val().gasoline;
//       ds = product_snap.val().diesel;
//       console.log("GasolinePlus: " + gsp + "Gasoline: " + gs + "Diesel: " + ds);
//       $('#modaldata').append(html(product_snap.val()));
//     function html(){
//     var html = '';
  
//     html += ' <input id="updategasolineplus" value="'+ gsp +'"/>';
//     html += ' <input id="updategasoline" value="'+ gs +'"/>';
//     html += ' <input id="updatediesel" value="'+ ds +'"/>';  
//     return html;
//     }
//     });


  
    
  
  }
  function approved(id){
    id = id.value;
    console.log(id + "id");
    var db = firebase.database();
    var ref = db.ref("GasOwners/" + id);
    ref.update({
        status : "approved"
    })
    
         window.alert("Update Success");
       location.reload();

  
// var updateref =  firebase.database().ref('GasStations/' + key);
// productref = updateref.child('products');
//    productref.update({
//     gasolineplus: gasolineplus,
//      gasoline: gasoline,
//      diesel: diesel
//    })
//      window.alert("Update Success");
//    location.reload();

}
function disapproved(id){
  var del = id.value;
  var db = firebase.database();
  var ref = db.ref("GasOwners/");
  ref.child(del).remove();
     window.alert("Deleted!");
     location.reload();
    }

function disabled(){
    admin.auth().updateUser(kk, {
       
        disabled: true
      })
        .then(function(userRecord) {
          // See the UserRecord reference doc for the contents of userRecord.
          console.log("Successfully updated user", userRecord.toJSON());
        })
        .catch(function(error) {
          console.log("Error updating user:", error);
        });

}

 //Upload image
  //Get elements
  var uploader = document.getElementById('profilepic_uploader');
  var fileButton = document.getElementById('user_profilepic');
  var iname = document.getElementById('user_profilepic_url');
  
  // Listenforfileselection
if(fileButton){
  fileButton.addEventListener('change',function(e){
   
   
    // Getfile
    var file = e.target.files[0];
    // Create a storage ref
    var storageRef =  firebase.storage().ref('adminprofilephoto/' + file.name);
    // uloadfile
    var task = storageRef.put(file);
    // update prgress
    task.on('state_changed',
      function progress(snapshot){
        var percentage = (snapshot.bytesTransferred /
        snapshot.totalBytes) * 100;
        
       
        document.getElementById('profilepic_uploader').style.width = percentage + '%';
        
      },
      function error(err){

      },

      function complete(){
        task.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          console.log('File available at', downloadURL);
          document.getElementById('user_profilepic_url').value = downloadURL;
          document.getElementById('submitbtn').disabled = false;
          document.getElementById('submitbtn').className = "btn  btn-outline-success  btn-fw";
          document.getElementById('profilepic_uploader').className = "progress-bar bg-success";
         
        
          
        });


      // redirect to other pages..
      }
    )
  });
}



