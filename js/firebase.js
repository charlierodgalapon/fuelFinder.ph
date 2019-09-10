function user_create(){

  var userEmail = document.getElementById("reg_email").value;
  var userPass = document.getElementById("reg_password").value;

  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).then(function(){
  //Email sent
  
   window.alert(" Data Uploaded Successfully! New user can now fiil-up and request a verification!");
  
   location.reload();
   }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });


}

function hideshow1for91() {
  var x = document.getElementById('gasstation_product_octane91').checked;
 
if (x == true) {
    document.getElementById('gasstation_product_octane91_price_id').style.display = 'block';
    document.getElementById('gasstation_product_octane91_price_id').value = '';



    document.getElementById('gasstation_product_octane91_name_id').style.display = 'block';
    document.getElementById('gasstation_product_octane91_name_id').value = '';
} else {
    document.getElementById('gasstation_product_octane91_price_id').style.display = 'none';
    document.getElementById('gasstation_product_octane91_price_id').value = 'none';

    document.getElementById('gasstation_product_octane91_name_id').style.display = 'none';
    document.getElementById('gasstation_product_octane91_name_id').value = 'none';
}
}

function hideshow2for93() {
  var y = document.getElementById('gasstation_product_octane93').checked;
if (y == true) {
    document.getElementById('gasstation_product_octane93_price_id').style.display = 'block';
    document.getElementById('gasstation_product_octane93_price_id').value = '';

    document.getElementById('gasstation_product_octane93_name_id').style.display = 'block';
    document.getElementById('gasstation_product_octane93_name_id').value = '';
} else {
    document.getElementById('gasstation_product_octane93_price_id').style.display = 'none';
    document.getElementById("gasstation_product_octane93_price_id").value = 'none';

    document.getElementById('gasstation_product_octane93_name_id').style.display = 'none';
    document.getElementById("gasstation_product_octane93_name_id").value = 'none';
}
}



function hideshow3for95() {
  var z = document.getElementById('gasstation_product_octane95').checked;
if (z == true) {
    document.getElementById('gasstation_product_octane95_price_id').style.display = 'block';
    document.getElementById('gasstation_product_octane95_price_id').value = '';

    document.getElementById('gasstation_product_octane95_name_id').style.display = 'block';
    document.getElementById('gasstation_product_octane95_name_id').value = '';
} else {
    document.getElementById('gasstation_product_octane95_price_id').style.display = 'none';
    document.getElementById("gasstation_product_octane95_price_id").value= 'none';

    document.getElementById('gasstation_product_octane95_name_id').style.display = 'none';
    document.getElementById("gasstation_product_octane95_name_id").value= 'none';
    
}
}
function hideshow4for97() {
  var z = document.getElementById('gasstation_product_octane97').checked;
if (z == true) {
    document.getElementById('gasstation_product_octane97_price_id').style.display = 'block';
    document.getElementById('gasstation_product_octane97_price_id').value = '';

    document.getElementById('gasstation_product_octane97_name_id').style.display = 'block';
    document.getElementById('gasstation_product_octane97_name_id').value = '';
} else {
    document.getElementById('gasstation_product_octane97_price_id').style.display = 'none';
    document.getElementById("gasstation_product_octane97_price_id").value
     = 'none';
    
     document.getElementById('gasstation_product_octane97_name_id').style.display = 'none';
    document.getElementById("gasstation_product_octane97_name_id").value
     = 'none';
}
}
function hideshow5for98() {
  var z = document.getElementById('gasstation_product_octane98').checked;
if (z == true) {
    document.getElementById('gasstation_product_octane98_price_id').style.display = 'block';
    document.getElementById('gasstation_product_octane98_price_id').value = '';

    document.getElementById('gasstation_product_octane98_name_id').style.display = 'block';
    document.getElementById('gasstation_product_octane98_name_id').value = '';
} else {
    document.getElementById('gasstation_product_octane98_price_id').style.display = 'none';
    document.getElementById("gasstation_product_octane98_price_id").value
     = 'none';

     document.getElementById('gasstation_product_octane98_name_id').style.display = 'none';
    document.getElementById("gasstation_product_octane98_name_id").value
     = 'none';
    
}
}
function hideshow6for100() {
  var z = document.getElementById('gasstation_product_octane100').checked;
if (z == true) {
    document.getElementById('gasstation_product_octane100_price_id').style.display = 'block';
    document.getElementById('gasstation_product_octane100_price_id').value = '';

    document.getElementById('gasstation_product_octane100_name_id').style.display = 'block';
    document.getElementById('gasstation_product_octane100_name_id').value = '';
} else {
    document.getElementById('gasstation_product_octane100_price_id').style.display = 'none';
    document.getElementById("gasstation_product_octane100_price_id").value
     = 'none';

     document.getElementById('gasstation_product_octane100_name_id').style.display = 'none';
    document.getElementById("gasstation_product_octane100_name_id").value
     = 'none';
    
}
}
function hideshow7fordiesel() {
  var z = document.getElementById('gasstation_product_diesel').checked;
if (z == true) {
    document.getElementById('gasstation_product_diesel_price_id').style.display = 'block';
    document.getElementById('gasstation_product_diesel_price_id').value = '';

    document.getElementById('gasstation_product_diesel_name_id').style.display = 'block';
    document.getElementById('gasstation_product_diesel_name_id').value = '';
} else {
    document.getElementById('gasstation_product_diesel_price_id').style.display = 'none';
    document.getElementById("gasstation_product_diesel_price_id").value
     = 'none';

     document.getElementById('gasstation_product_diesel_name_id').style.display = 'none';
    document.getElementById("gasstation_product_diesel_name_id").value
     = 'none';
    
}
}



// firebase.auth().onAuthStateChanged(function(user) {
//   var user = firebase.auth().currentUser;
//   var userid = user.uid;
// //   var email_id = user.email;
// // var email_verified = user.emailVerified;
//   if (user) {
//     // User is signed in.
//     console.log('signedin')
    
  
//     if(user){

       
//       var email_id = user.email;
//       var email_verified = user.emailVerified;
//       if (email_verified){
//         // console.log("notverifeid");
        
//         // location.href = "error-500.html";

//       }else{
//         // document.getElementById("verified").style.display = "none";
        
//       }
//       document.getElementById("user_fullname_id").innerHTML =  email_id;

//       var fetch = firebase.database().ref("GasOwners/"  + userid );

//     fetch.on("value", function(snapshot) {
//      snapshot.forEach(function(childSnapshot) {
         
//       var childData = childSnapshot.val();
//       var firstnames = childData.firstname;
//       var middlename = childData.middlename;
//       var lastname = childData.lastname;
//       var birthdate = childData.birthdate;

//       document.getElementById("fnameid").innerHTML = firstnames ;
//     //   console.log(childData);
      
//      });
//     }); 
//     firebase.database().ref('GasStations/'+ userid ).once('value').then(function(snapshot)
//     {
//         var latt = snapshot.child('lat').val();
//         var lonn = snapshot.child('lon').val();
     
//      console.log(latt,lonn);
    
//     });
//     // var rootRef = firebase.database().ref().child("GasStations");
//     // rootRef.on("child_added", snap => {
//     //   var owner = snap.child("owner").val();
//     //   var lat = snap.child("lat").val();
      
//     //   var test = owner == userid;
//     //   if(){
//     //     console.log();
//     //   }
//     //   console.log(test);
//     //   console.log(lat);
//     //   console.log(owner);
//     // });

    

    

    
//     firebase.database().ref().orderByChild("GasStations/")
//     .equalTo(userid).once('child_added')
//     .then(function (snapshot) {

//       var latt = snapshot.child('lat').val();
//       console.log(latt);
      

//     });

//     var ref = firebase.database().ref("GasStations/");
// ref.orderByChild("owner").equalTo(userid).on("child_added", function(snapshot) {
//   var lat = snapshot.child('lat').val();
//   var lon = snapshot.child('lon').val();
//   console.log(lat,lon);
// });

//     firebase.database().ref('GasOwners/'+ userid).once('value').then(function(snapshot)
//     {
//         var fname = snapshot.child('firstname').val();
//         var lname = snapshot.child('lastname').val();
//      document.getElementById("user_fullname_id").value = fname + " " + lname;
//      console.log(fname,lname);

     
    
//     });
  
      

     
      
//     }
//   }else {
//     // No user is signed in.
//     window.location.href = '../gasstation/login.html';
//   }
// });




// });








// FOR EMAIL VERIFIED CHECKING-->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {

    if(user.emailVerified == false){
          // document.getElementById('verify').style.display = "block";
          console.log("NOTVERFI++IFIED");
          // document.getElementById('dash').style.display = "none";
      
    }else{
      console.log("VERFI++IFIED");
      // document.getElementById('verify').style.display = "none";
      // document.getElementById('dash').style.display = "block";
      
    }
  } else {
    // No user is signed in.
    window.location.href = '../gasstation/login.html';
  }
});


    // FOR USER CHECKING _>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 
        
    




  //Upload image
  //Get elements
  var uploader = document.getElementById('uploader');
  var fileButton = document.getElementById('gasstation_imagefileupload_id');
  var iname = document.getElementById('gasstation_name_registration_id');
  
  // Listenforfileselection
if(fileButton){
  fileButton.addEventListener('change',function(e){
   
   
    // Getfile
    var file = e.target.files[0];
    // Create a storage ref
    var storageRef =  firebase.storage().ref('gasstationphotos/' + file.name);
    // uloadfile
    var task = storageRef.put(file);
    // update prgress
    task.on('state_changed',
      function progress(snapshot){
        var percentage = (snapshot.bytesTransferred /
        snapshot.totalBytes) * 100;
        
       
        document.getElementById('uploader').style.width = percentage + '%';
        
      },
      function error(err){

      },

      function complete(){
        task.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          console.log('File available at', downloadURL);
          document.getElementById('gasstation_imageupload_downloadurl_id').value = downloadURL;
          document.getElementById('uploader').className = "progress-bar bg-success"
          
        });


      // redirect to other pages..
      }
    )
  });
}





    function save_user(){
      

    
   

    var ip91 = document.getElementById('gasstation_product_octane91_price_id').value;
    var ip93 = document.getElementById('gasstation_product_octane93_price_id').value;
    var ip95 = document.getElementById('gasstation_product_octane95_price_id').value;
    var ip97 = document.getElementById('gasstation_product_octane97_price_id').value;
    var ip98 = document.getElementById('gasstation_product_octane98_price_id').value;
    var ip100 = document.getElementById('gasstation_product_octane100_price_id').value;
    var ipdiesel = document.getElementById('gasstation_product_diesel_price_id').value;

    var in91 = document.getElementById('gasstation_product_octane91_name_id').value;
    var in93 = document.getElementById('gasstation_product_octane93_name_id').value;
    var in95 = document.getElementById('gasstation_product_octane95_name_id').value;
    var in97 = document.getElementById('gasstation_product_octane97_name_id').value;
    var in98 = document.getElementById('gasstation_product_octane98_name_id').value;
    var in100 = document.getElementById('gasstation_product_octane100_name_id').value;
    var indiesel = document.getElementById('gasstation_product_diesel_name_id').value;


     var cw = document.getElementById("gasstation_service_carwash_id").checked;
     var fd = document.getElementById("gasstation_service_food_id").checked;
     var oic = document.getElementById("gasstation_service_oilchange_id").checked;
     var water = document.getElementById("gasstation_service_water_id").checked;
     var air = document.getElementById("gasstation_service_air_id").checked;
     var cr = document.getElementById("gasstation_service_comfortroom_id").checked;
     var utilities = document.getElementById("gasstation_service_utilities_id").checked;
     var url = document.getElementById("gasstation_imageupload_downloadurl_id").value;
     
     var contactnum = document.getElementById("gasstation_contactnumber").value;
     
     
      
    
      
   

   var lon = document.getElementById('gasstation_longitude_registration_id').value;
   var lat = document.getElementById('gasstation_lattitude_registration_id').value;
   var address = document.getElementById('gasstation_address_registration_id').value;
   var gsname = document.getElementById('gasstation_name_registration_id').value;
   var gsnamelow = gsname.toLowerCase();
   var user = firebase.auth().currentUser;
   var oid = user.uid;
  
   var op = document.getElementById('gasstation_registration_opening_time_id').value;
   var oc = document.getElementById('gasstation_registration_closing_time_id').value;
  
    var uid = firebase.database().ref().child('users').push().key;
   
   firebase.database().ref('GasStations/' + uid).set({
    owner: oid,
    lon: lon,
    lat: lat,
    opening: op,
    closing: oc,
    contactnumber: contactnum,
    gsname : gsnamelow,
    address: address,
    imageurl : url,
   
    products:{
      fuelname:{
        n91 : in91,
        n93 : in93,
        n95 : in95,
        n97 : in97,
        n98 : in98,
        n100 : in100,
        ndiesel : indiesel
      },
      fuelprice:{
        p91 : ip91,
        p93 : ip93,
        p95 : ip95,
        p97 : ip97,
        p98 : ip98,
        p100 : ip100,
        pdiesel : ipdiesel,
      }
     
    },
    services:{
      carwash: cw,
      food: fd,
      oilchange: oic,
      water: water,
      air: air,
      cr: cr,
      utilities: utilities
    }

    });
   
   alert('The Gas Station is created successfully!');
   location.reload();
   
}

// getUserData();
// window.onload = function getUserData(){

  
// }

function logout(){
  firebase.auth().signOut();
  location.href = "login.html";
}
  
       
  function data_verification(){

  var firstname_verification = document.getElementById('firstname_verification_textfield').value;
  var lastname_verification = document.getElementById('lastname_verification_textfield').value;
  var middlename_verification = document.getElementById('middlename_verification_textfield').value;
  var birthdate_verification = document.getElementById('birthdate_verification_textfield').value;
  var user = firebase.auth().currentUser;
  var oid = user.uid;
 
    firebase.database().ref('GasOwners/' + oid ).set({
   firstname : firstname_verification,
   lastname : lastname_verification, 
   middlename : middlename_verification,
   birthdate : birthdate_verification
   });


   

 



  

      
  
   
}

// for list page


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var id = firebase.auth().currentUser.uid
    var db = firebase.database();
    var ref = db.ref("GasStations");
ref.orderByChild("owner").equalTo(id).on("child_added", function(snapshot) {
 
  console.log(snapshot.key + " was key id of " + snapshot.val().gsname + " Gas Name and"  + snapshot.val().owner + " was the owner");
  
  var key = snapshot.key;
  var name = snapshot.val().gsname;
  var address = snapshot.val().address;
  var owner = snapshot.val().owner;
  var img = snapshot.val().imageurl;
  var contact = snapshot.val().contactnumber;

  var data = snapshot.val();

$(document).ready(function() {
  $(".modal").on("hidden.bs.modal", function() {
    $(".modal-body").html('');
  });
});
  
  $('#datas').append(html(snapshot.val()));
  // document.getElementById("datas").value = html();
//   var myColours = [];
//   for(let i = 0; i< data.length; i++){
//     myColours.push(data[i].key);
//     myColours.push(data[i].name);
//     myColours.push(data[i].address);
// }
  

  function html(){
  var html = '';

  html += '<div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card" >';
  html += ' <div class="card" >';
      html += '<img class="card-img-top"  src="' +img+'" alt="John" style="width:100%; height:120px;;"><center>'; 
  html += ' <div class="card-body">';
 
  html += '<p class="card-title" id="name"><strong>'+ name +'</strong></p>';
  html += ' <p class="card-subtitle text-primary" id="id"><i class="fa fa-key text-primary"></i> '+key+'</p>';
  html += ' <p id="address" class="card-text"><i class="fa fa-location-arrow text-success"></i>'+address+'</p>';
  html += ' <p id="contactnumber"    class="card-text text-info" ><i class="fa fa-phone text-info"></i>&nbsp;'+contact +' <button data-toggle="modal" alt="Edit Contact Number" data-target="#contactmodal" type="submit" value="'+name+'" id="card_button"  class="btn btn-icons btn-rounded btn-outline-warning btn-sm " onclick="contactmodal(this);"><i class="mdi mdi-pencil"></i></button></p>';
  html += ' <p id="services" class="card-text ><i class="fa fa-wrench text-success"></i>&nbsp;Services <button type="button" data-toggle="modal" alt="Servicer" data-target="#servicemodal" type="submit" value="'+key+'" id="card_button"  class="btn btn-icons btn-rounded btn-outline-primary btn-sm" onclick="servicemodal(this);"><i class="mdi mdi-pencil"></i></button></p>';
  html += '<button type="submit" id="card_button" onclick="getreview(this);"  data-toggle="modal" data-target="#reviews" value="'+key+'"  class="btn btn-sm   btn-outline-info btn-block ">Reviews<i class="mdi mdi-star"></i></button>';
  html += '<button type="submit" id="card_button" onclick="testvalue(this);"  data-toggle="modal" data-target="#myModal"  value="'+key+'"  class="btn  btn-warning btn-block btn-fw">Price Update <i class="mdi mdi-pencil"></i></button>';
  html += '<button type="submit" onclick="deletestation(this)"  value="'+key+'"  class="btn  btn-danger btn-block btn-fw">DELETE</button>';
  html += '</div>';
  html += '</div>';
  html += '</div>';
  
  
  
    
  return html;
  }

   
 

});

  } else {
    // No user is signed in.
  }
});

// Delete GASSTATION
function deletestation(deleteit){
  var del = deleteit.value;
  var db = firebase.database();
  var ref = db.ref("GasStations/");
  ref.child(del).remove();
     window.alert("DELETED");
     location.reload();
}

 // Getting data from firebase to modal and update price
 function testvalue(elem) {   
  console.log(elem.value);
 

  kk = elem.value;
  document.getElementById('modalttitle').innerHTML = kk;
  var id = firebase.auth().currentUser.uid
    var db = firebase.database();
    var ref = db.ref("GasStations/");
    

ref.orderByKey().equalTo(kk).on("child_added", function(snapshot) {
  var gasname = snapshot.val().gsname;
  
  console.log("KEY : " + snapshot.key);
});

 reff = db.ref("GasStations").child(kk);
  reff.child("products/fuelname").on("value", function(productname_snap){
    fn91 = productname_snap.val().n91;
    fn93 = productname_snap.val().n93;
    fn95 = productname_snap.val().n95;
    fn97 = productname_snap.val().n97;
    fn98 = productname_snap.val().n98;
    fn100 = productname_snap.val().n100;
    fndiesel = productname_snap.val().ndiesel;
    reff.child("products/fuelprice").on("value", function(productprice_snap){
      fp91 = productprice_snap.val().p91;
      fp93 = productprice_snap.val().p93;
      fp95 = productprice_snap.val().p95;
      fp97 = productprice_snap.val().p97;
      fp98 = productprice_snap.val().p98;
      fp100 = productprice_snap.val().p100;
      fpdiesel = productprice_snap.val().pdiesel;

    $('#modaldata').append(html(productprice_snap.val()));
  function html(){
  var html = '';
  html += "<div class='col-sm-12'>";

  html += "<div class='col-sm-12 grid-margin card'>";
  html += "<div class='card-body'>";
  html += '<div class="form-group"><label>Fuel name for 91% Octane Rate:</label> <input class=" form-control form-control-default" id="updaten91" placeholder="No Name" value="'+fn91+'"/></div><div class="form-group"><label>Price for 91% Octane Rate:</label> <input class=" form-control form-control-default" id="updatep91" placeholder="No Price" value="'+ fp91 +'"/></div>';
  html += '</div>';
  html += "</div>";  

  html += "<br/>";  

  html += "<div class='col-sm-12 grid-margin card'>";
  html += "<div class='card-body'>";
  html += '<div class="form-group"><label>Fuel name for 93% Octane Rate:</label> <input class=" form-control form-control-default" id="updaten93" placeholder="No Name" value="'+fn93+'"/></div><div class="form-group"><label>Price for 91% Octane Rate:</label> <input class=" form-control form-control-default" id="updatep93" placeholder="No Price" value="'+ fp93 +'"/></div>';
  html += '</div>';
  html += "</div>";  

  html += "<div class='col-sm-12 grid-margin card'>";
  html += "<div class='card-body'>";
  html += '<div class="form-group"><label>Fuel name for 95% Octane Rate:</label> <input class=" form-control form-control-default" id="updaten95" placeholder="No Name" value="'+fn95+'"/></div><div class="form-group"><label>Price for 91% Octane Rate:</label> <input class=" form-control form-control-default" id="updatep95" placeholder="No Price" value="'+ fp95 +'"/></div>';  
  html += '</div>';
  html += "</div>";  

  html += "<div class='col-sm-12 grid-margin card'>";
  html += "<div class='card-body'>";
  html += '<div class="form-group"><label>Fuel name for 97% Octane Rate:</label> <input class=" form-control form-control-default" id="updaten97" placeholder="No Name" value="'+fn97+'"/></div><div class="form-group"><label>Price for 91% Octane Rate:</label> <input class=" form-control form-control-default" id="updatep97" placeholder="No Price" value="'+ fp97 +'"/></div>';  
  html += '</div>';
  html += "</div>";  

  html += "<div class='col-sm-12 grid-margin card'>";
  html += "<div class='card-body'>";
  html += '<div class="form-group"><label>Fuel name for 98% Octane Rate:</label> <input class=" form-control form-control-default" id="updaten98" placeholder="No Name" value="'+fn98+'"/></div><div class="form-group"><label>Price for 91% Octane Rate:</label> <input class=" form-control form-control-default" id="updatep98" placeholder="No Price" value="'+ fp98 +'"/></div>';  
  html += '</div>';
  html += "</div>";  

  html += "<div class='col-sm-12 grid-margin card'>";
  html += "<div class='card-body'>";
  html += '<div class="form-group"><label>Fuel name for 100% Octane Rate:</label> <input class=" form-control form-control-default" id="updaten100" placeholder="No Name" value="'+fn100+'"/></div><div class="form-group"><label>Price for 91% Octane Rate:</label> <input class=" form-control form-control-default" id="updatep100" placeholder="No Price" value="'+ fp100 +'"/></div>';  
  html += '</div>';
  html += "</div>"; 

  html += "<div class='col-sm-12 grid-margin card'>";
  html += "<div class='card-body'>";
  html += '<div class="form-group"><label>Fuel name for Diesel:</label><input class=" form-control form-control-default" id="updatendiesel" placeholder="No Name" value="'+fndiesel+'"/></div><div class="form-group"><label>Price for 91% Octane Rate:</label> <input class=" form-control form-control-default" id="updatepdiesel" placeholder="No Price" value="'+ fpdiesel +'"/></div>';
  html += "</div>";  
  html += "</div>";

  html += "</div>";  
  return html;
  }
});
  });

  

}

// Getting data from firebase to modal and update service
function servicemodal(serv) {   
  console.log(serv.value + "onserve");

  kk = serv.value;

  console.log(kk);
  
  document.getElementById('serviceidname').innerHTML = kk;
  var id = firebase.auth().currentUser.uid
  var db = firebase.database();

  reff = db.ref("GasStations").child(kk);
  reff.child("services/").on("value", function(servsnap){
    var air = servsnap.val().air;
    var carwash = servsnap.val().carwash;
    var cr = servsnap.val().cr;
    var food = servsnap.val().food
    var oilchange = servsnap.val().oilchange;
    var utilities = servsnap.val().utilities;
    var water = servsnap.val().water;
   
    
    
    
    
    $('#servicesbody').append(html(servsnap.val()));
    function html(){
      console.log(servsnap.val().food);
      var mAir='';
      var mCarwash='';
      var mWater='';
      var mFood='';
      var mCr='';
      var mOil='';
      var mUtil='';
if(air==true){
  mAir = "checked";
}else{
  mAir = ""
}

if(carwash==true){
  mCarwash = "checked";
}

if(water==true){
  mWater = "checked";
}

if(food==true){
  mFood = "checked";
}
console.log(cr+ " cr");
if(cr==true){
  console.log(mCr+ " cr");
  mCr = "checked";
  console.log(mCr+ " cr");
}

if(oilchange==true){
  mOil = "checked";
}

if(utilities==true){
  mUtil = "checked";
}

console.log(mCr + mOil);

    var html = '';

   html += '<input type="checkbox" class="form-check-input" value="'+air+'" '+ mAir +'  id="airid"   >Air <br/>';
   html += '<input type="checkbox" class="form-check-input" value="'+carwash+'" '+ mCarwash +'  id="carwashid"   >Car wash <br/>';
   html += ' <input type="checkbox" class="form-check-input" value="'+cr+'" '+ mCr +'  id="crid"  >CR <br/>';
   html += '<input type="checkbox" class="form-check-input" value="'+food+'" '+ mFood +'  id="foodid" > Food<br/>';
   html +=  '<input type="checkbox" class="form-check-input" value="'+oilchange+'" '+ mOil +'  id="oilchangeid"  >Oil Change <br/>';
   html += ' <input type="checkbox" class="form-check-input" value="'+utilities+'" '+ mUtil +'  id="utilitiesid"  >Utilities <br/>';
   html += '<input type="checkbox" class="form-check-input" value="'+water+'" '+ mWater +'  id="waterid"   >Water <br/>';
   
   

    
  
    return html;
    
    }
 
  // load();
  //   function load(){
  //     document.getElementById('airid').checked = air;
  //     document.getElementById('carwashid').checked = carwash;
  //     document.getElementById('crid').checked = cr;
  //     document.getElementById('waterid').checked = water;
  //     document.getElementById('utilitiesid').checked = utilities;
  //     document.getElementById('oilchangeid').checked = oilchange;
  //     document.getElementById('foodid').checked = food;
  // }
  

   


  

  //  document.getElementById('airidt').value = air;
   
    // carwash = product_snap.val().carwash;
    // cr = product_snap.val().cr;
    // food = product_snap.val().food;
    // oilchange = product_snap.val().oilchange;
    // water = product_snap.val().water;
    // console.log("GasolinePlus: " + aaa + "Gasoline: " + aaa + "Diesel: " + cr);

    // checkBox = document.getElementById('gspid');
    // checkBox.checked = air;
  

    
    
    

  });
  

}

 // Getting data from firebase to modal and update price
 function getreview(rev) {   
  console.log(rev.value);
 

  kk = rev.value;
  var id = firebase.auth().currentUser.uid
    var db = firebase.database();
    var ref = db.ref("RateReview/");
    
  
    

ref.orderByChild('gsUid').equalTo(kk).on("child_added", function(snapshot) {
  var review = snapshot.val().review;
  var email = snapshot.val().userEmail;
  var rate1 = snapshot.val().rate;
  var date1 = snapshot.val().rateDate;
  var k = snapshot.key;

  console.log(k+"KEYYYSS");
 
  

  $('#reviewdata').append(html(snapshot.val()));
  function html(){
  var html = '';

  html += ' <blockquote class="blockquote blockquote-info">';
  html += ' <p style="font-size: 14px;"><strong>"'+ review +'"</strong></p>';
  html += ' <p class="text-warning"> <i class="menu-icon mdi mdi-star text-warning" >Rating: '+rate1+'</i></p>';  
  html += ' <p class="text-warning"> <i class="text-dark" >'+date1+'</i></p>';  
  html += ' <p class="text-warning"> <i class="text-dark" >'+k+'</i></p>';  

  html += ' <footer class="blockquote-footer">GasFinder.Ph ';
  html += ' <cite title="Source Title">@'+email+'</cite><br/>';
  html += ' <br/>';
  html += '<center>';
  html += ' <button type="button" value="'+ k +'" onclick="reportcomment(this)" class="btn btn-danger  btn-sm btn-fw">Report this comment</button>';  
  html += '</center>';
  html += '  </footer>';  
  html += '  </blockquote>';  
 
  return html;
  }

});

}


function contactmodal(con){
  key = con.value;
  console.log(key + " for contactnumber");
  document.getElementById('contactidname').innerHTML = key;
  ref = firebase.database().ref("GasStations/");
  ref.orderByChild('gsname').equalTo(key).on("child_added", function(snapshot) {

    var current = snapshot.val().contactnumber;
    
   

  $('#contactbody').append(html(snapshot.val()));

  function html(){
  var html = '';


  html += '<input type="text" id="currentconid" value="'+ current +'" style="font-size: 15px;" readonly class="form-control form-control-lg"   aria-describedby="colored-addon1">';
   html += '<br/>';
   html += '<input type="text" id="newconid" style="font-size: 15px;" placeholder="New Contact Number" class="form-control form-control-lg"   aria-describedby="colored-addon1">';

 
  return html;
  }

    


  })
  
    //  window.alert(key);

}

// UPDATE CONTACT
function updatecontact(){
 
 
  var newcon = document.getElementById('newconid').value;
  var n = document.getElementById('contactidname').innerHTML; 
  console.log(n + " for contactnumber");
  var ref =  firebase.database().ref('GasStations').orderByChild('gsname').equalTo(n);
  ref.once("child_added",function(snapshot){
    snapshot.ref.update({
      contactnumber : newcon
    })
  });
  
     window.alert("Update Success");
   location.reload();
    //  window.alert(key);

}

// UPDATE Services
function updateservices(){
 
 
  
  var n = document.getElementById('serviceidname').innerHTML; 
  console.log(n + " for serivce");

  var airv = document.getElementById('airid').checked;
  

  var waterv = document.getElementById('waterid').checked;
  

  var foodv = document.getElementById('foodid').checked;


  var carwashv = document.getElementById('carwashid').checked;
 

  var crv = document.getElementById('crid').checked;
 

  var oilchangev = document.getElementById('oilchangeid').checked;
 

  var utilitiesv = document.getElementById('utilitiesid').checked;
  


  console.log(utilitiesv+"UTIL");
  console.log(oilchangev+"OL");

  var ref =  firebase.database().ref('GasStations/' + n);
  serviceref = ref.child('services/');
   serviceref.update({
    air: airv,
     water: waterv,
     food: foodv,
     carwash: carwashv,
     cr: crv,
     oilchange: oilchangev,
     utilities: utilitiesv
   })
     window.alert("Update Success");
   location.reload();
  

}

function reportcomment(rep){  
  reportid = rep.value;
  console.log(reportid + " REPORTED");

  
  var db = firebase.database();
  var ref = db.ref("RateReview/" + reportid);
  ref.update({
      status : "negative"
  })
     window.alert("REPORTED");

}


function updateprice(){
key =   document.getElementById('modalttitle').innerHTML;
u91 = document.getElementById('updatep91').value;
u93 = document.getElementById('updatep93').value;
u95 = document.getElementById('updatep95').value;
u97 = document.getElementById('updatep97').value;
u98 = document.getElementById('updatep98').value;
u100 = document.getElementById('updatep100').value;
udiesel = document.getElementById('updatepdiesel').value;

un91 = document.getElementById('updaten91').value;
un93 = document.getElementById('updaten93').value;
un95 = document.getElementById('updaten95').value;
un97 = document.getElementById('updaten97').value;
un98 = document.getElementById('updaten98').value;
un100 = document.getElementById('updaten100').value;
undiesel = document.getElementById('updatendiesel').value;
// var db = firebase.database();
// var ref = db.ref("GasOwners/" + key);
// ref.update({
//     products :{
//       gasolineplus: gasolineplus,
//       gasoline: gasoline,
//       diesel: diesel
//     } 
// })
var updateref =  firebase.database().ref('GasStations/' + key);
productpriceref = updateref.child('products/fuelprice');
   productpriceref.update({
    p91:u91,
    p93:u93,
    p95:u95,
    p97:u97,
    p98:u98,
    p100:u100,
    pdiesel:udiesel,
   })

   productnameref = updateref.child('products/fuelname');
   productnameref.update({
    n91:un91,
    n93:un93,
    n95:un95,
    n97:un97,
    n98:un98,
    n100:un100,
    ndiesel:undiesel,
   })
     window.alert("Update Success");
   location.reload();
   
 
}
     

function myFunction() {
    var input, filter, cards, cardContainer, title, p;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("datas");
    cards = cardContainer.getElementsByClassName("card");
    for (i = 0; i < cards.length; i++) {
        title = cards[i].querySelector(".card-body p.card-title");
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}       
function changeColor(btn) {
  console.log(btn);;
}

function getid(){
  id = document.getElementById("id").innerText;
  name = document.getElementById("name").innerText;
  address = document.getElementById("address").innerText;
  function changeColor(btn) {
  console.log(btn);;
}
 
}



   function send_verification(){

   var user = firebase.auth().currentUser;

   user.sendEmailVerification().then(function(){
  //Email sent
  
   window.alert(" Data Uploaded Successfully! and Email Verification Sent Please Check your Email Account");
  
   location.href = "gf_dash.html";
   }).catch(function(error){
  //An error happened.

   window.alert("Error: " + error.message);
  
  });
  }
