
    
    //  var map, infoWindow;
        function initMap() {
            var myLatlng = new google.maps.LatLng(15.48501,120.97594);
            var myOptions = {
                zoom:20,
                center: myLatlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }

            

           
    
            map = new google.maps.Map(document.getElementById("gmap"), myOptions);
            var geocoder = new google.maps.Geocoder;
            // var newPosition = snapshot.val();
            // var point = new google.maps.LatLng(newPosition.lat, newPosition.lng);
            // var elapsed = new Date().getTime() - newPosition.timestamp;
            // marker refers to a global variable
            
            var iconred = {url: '../images/icons/i5.png',
                      scaledSize: new google.maps.Size(50, 50),
                      origin: new google.maps.Point(0,0),
                      anchor: new google.maps.Point(25, 58) };

            // marker = new google.maps.Marker({
            //     position: myLatlng,
            //     map: map,
            //     icon: iconred
            // });
            var input = document.getElementById('mapsearch');
            var searchBox = new google.maps.places.SearchBox(input);
            map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

            map.addListener('bounds_changed', function() {
                searchBox.setBounds(map.getBounds());
              });

              searchBox.addListener('places_changed', function() {
                var places = searchBox.getPlaces();
      
                if (places.length == 0) {
                  return;
                }
                 // For each place, get the icon, name and location.
          var bounds = new google.maps.LatLngBounds();
          places.forEach(function(place) {
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }
            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
              } else {
                bounds.extend(place.geometry.location);
              }
            });
            map.fitBounds(bounds);
        });
    

            firebase.auth().onAuthStateChanged(function(user) {

                var user = firebase.auth().currentUser;
                 var userid = user.uid;

                     var ref = firebase.database().ref("GasStations/");
                    ref.orderByChild("owner").equalTo(userid).on("child_added", function(snapshot) {
                      var lat = snapshot.child('lat').val();
                      var lon = snapshot.child('lon').val();
                      console.log(lat,lon);

                      var iconBase = {url: '../images/icons/i6.png',
                      scaledSize: new google.maps.Size(50, 50),
                      origin: new google.maps.Point(0,0),
                      anchor: new google.maps.Point(0, 0) };

                      var marker = new google.maps.Marker({
                        position: new google.maps.LatLng(lat,lon),
                        map: map,
                        icon: iconBase
                     });   
                    });

        });
            
        

            google.maps.event.addListenerOnce(map, "click", function(event) {
                
                var geocoder = new google.maps.Geocoder();
                var infowindow = new google.maps.InfoWindow;
                geocoder.geocode({
                    'location': event.latLng
                   
                }, function(results, status) {
                    
                   
                  
                    if (status == google.maps.GeocoderStatus.OK) {
                       
                        
                        
                    if (results[1]) {
                        
                       
                            count = +1; 
                            var add = results[1].formatted_address;
                        document.getElementById("gasstation_address_registration_id").value = add;
                        
                        
                      console.log(add);
 
                        
                        
                    } infowindow.setContent(results[0].formatted_address);
                    infowindow.open(map, marker);
                    }
             
                });
                

                // get lat/lon of click
                var clickLat = event.latLng.lat();
                var clickLon = event.latLng.lng();
               
                
                // show in input box
                document.getElementById("gasstation_lattitude_registration_id").value = clickLat.toFixed(5);
                document.getElementById("gasstation_longitude_registration_id").value = clickLon.toFixed(5);

                
                  
                                    //                 var i=0
                                    // function addListing(location) {
                                    // var addMarker;
                                    // var iMax=1;

                                    // if(i<=iMax) {
                                    //     addMarker = new google.maps.Marker({
                                    //         position: new google.maps.LatLng(clickLat,clickLon),
                                    //                 map: map,
                                    //                 icon: iconred
                                    // });

                                    // google.maps.event.addListener(addMarker, 'dblclick', function() {
                                    //     addMarker.setMap(null);
                                    //     i=1;
                                    // });

                                    // i++;

                                    // } else {
                                    //     console.log('you can only post' , i-1, 'markers');
                                    //     }
                                    // }

                                    // if (marker && marker.setMap) {
                                    //     marker.setMap(null);
                                    //   }
        

        

                  var marker = new google.maps.Marker({
                        position: new google.maps.LatLng(clickLat,clickLon),
                        map: map,
                        icon: iconred

                     });   

                    

                    

            });
                

                       


            
    }   

    window.onload = function initMap() { };

   