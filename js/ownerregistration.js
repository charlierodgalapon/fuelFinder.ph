
  
// GasOwner Registration

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        userid = user.uid;
        // document.getElementById('currentuid').value = userid;
        document.getElementById('owuid').value = userid;
        // console.log(userid);
        // var c =  document.getElementById('currentuid').value;
        // console.log(c);
        var a =  document.getElementById('owuid').value;
        console.log(a);
        useremail = user.email;
        console.log(useremail);
        useremailveri = user.emailVerified;
        console.log(useremailveri);        
    }
});
function SaveGasStationOwner(){
      

    
  var firstnamevar =  document.getElementById('user_firstnameid').value;
  var middlenamevar =  document.getElementById('user_middlenameid').value;
  var lastnamevar =  document.getElementById('user_lastnameid').value;
   var profilepicturevar = document.getElementById("user_profilepicture_urlid").value;
   var dateofbirthvar = document.getElementById("user_dobid").value;
   var streetaddressvar = document.getElementById("user_streetaddressid").value;
   var cityvar = document.getElementById("user_cityid").value;
   var regionvar = document.getElementById("user_regionid").value;
   var zipcodevar = document.getElementById("user_zipcodeid").value;
   var governementidvar = document.getElementById('user_governmentid_url').value;
   var contactnumbervar = document.getElementById('user_contactnumberid').value;
   var barangayvar = document.getElementById('user_barangayid').value;

  var uuid =  document.getElementById('owuid').value;
  var user = firebase.auth().currentUser;
  email = user.email;
console.log( "email" + email + "ID:" + uuid);
    //   console.log(user.uid);
   
  
 
 firebase.database().ref('GasOwners/' + uuid).set({
        email : email,
         gasownerid : uuid, 
        firstname: firstnamevar,
        middlename: middlenamevar,
        lastname: lastnamevar,
        dateofbirth: dateofbirthvar,
        streetaddress: streetaddressvar,
        barangay : barangayvar,
        city : cityvar,
        region : regionvar,
        zipcode : zipcodevar,
        governementidURL : governementidvar,
        profilepictureURL: profilepicturevar,
        type : "gasowner",
        status : "pending",
        contactnumber : contactnumbervar
  
  
  }).catch(function(error) {
    console.log("registration failed: " + error.message)
  });

  console.log("success");
  window.alert("success");

    setTimeout(function logout(){
      firebase.auth().signOut();
      location.href = "login.html";
    },3000);

 
}
 

// Profile Pircture Uploaddd damn..
 //Upload image
  //Get elements
  var profilepictureuploader = document.getElementById('profilepicture_uploaderid');
  var profilepicturefileButton = document.getElementById('user_profilepictureid');
 
  
  // Listenforfileselection
if(profilepicturefileButton){
  profilepicturefileButton.addEventListener('change',function(e){
   
   
    // Getfile
    var file = e.target.files[0];
    // Create a storage ref
    var storageRef =  firebase.storage().ref('gasownerprofilephotos/' + file.name);
    // uloadfile
    var task = storageRef.put(file);
    // update prgress
    task.on('state_changed',
      function progress(snapshot){
        var percentage = (snapshot.bytesTransferred /
        snapshot.totalBytes) * 100;
        
       
        document.getElementById('profilepicture_uploaderid').style.width = percentage + '%';
        
      },
      function error(err){

      },

      function complete(){
        task.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          console.log('File available at', downloadURL);
          document.getElementById('user_profilepicture_urlid').value = downloadURL;
          document.getElementById('profilepicture_uploaderid').className = "progress-bar bg-success"
          
        });


      // redirect to other pages..
      }
    )
  });
}

// governmentid photoupload another one.....

var governmentiduploader = document.getElementById('governmentid_uploader');
var governmentidfileButton = document.getElementById('user_governmentid');


// Listenforfileselection
if(governmentidfileButton){
  governmentidfileButton.addEventListener('change',function(e){
 
 
  // Getfile
  var file = e.target.files[0];
  // Create a storage ref
  var storageRef =  firebase.storage().ref('gasownergovernmentidphotos/' + file.name);
  // uloadfile
  var task = storageRef.put(file);
  // update prgress
  task.on('state_changed',
    function progress(snapshot){
      var percentage = (snapshot.bytesTransferred /
      snapshot.totalBytes) * 100;
      
     
      document.getElementById('governmentid_uploader').style.width = percentage + '%';
      
    },
    function error(err){

    },

    function complete(){
      task.snapshot.ref.getDownloadURL().then(function(downloadURL) {
        console.log('File available at', downloadURL);
        document.getElementById('user_governmentid_url').value = downloadURL;
       

        document.getElementById('governmentid_uploader').className = "progress-bar bg-success"
        
      });


    // redirect to other pages..
    }
  )
});
}



$(function() {
  $('#termsid').click(function() {
      if ($(this).is(':checked')) {
        $('#submitbtn').removeAttr('disabled');
      } else {
        
          $('#submitbtn').attr('disabled', 'disabled');
      }
  });
});
