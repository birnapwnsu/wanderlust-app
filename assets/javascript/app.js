const apiKeys = [
  skyscanner = "",
  yelp = "ETyIXGHKE8nskR_WJUaEvwJeXNjFJ5Cq_a_HdZNZmsTkzTut_-Y68XQPpCej1uyiIcmuW2PhP2j2rlSZMKmeecYZK8lOYImJNV9s00Su6K_Peuojo9vcupVUc5n-XHYx",
  //google = "AIzaSyAMWOCBFoVqJB5KTEuPEBjW_02OBE2C6qk",
  ticketmaster = "",
];

// Yelp Client ID
// 7vmrY-xkHwlI8QAWACW6dg

const pageDisplay = [".openingPage", ".secondPage", ".eventPage", ".foodPage", ".scheduler"];
let pageDisplayBool = [true, false, false, false, false];

//SLIDERS input functions to display a string at each range
$('#safetyLvl').on("input", function() {
  if (this.value === "1") {
    $("#safetyMsg").text("Know safety, no accidents");
  }else if (this.value === "2") {
    $("#safetyMsg").text("I'm down for an adventure");
  }else if (this.value === "3") {
    $("#safetyMsg").text("My middle name is danger");
  }
});

$('#moneyLvl').on("input", function() {
  if (this.value === "1") {
    $("#moneyMsg").text("I can live off scraps");
  }else if (this.value === "2") {
    $("#moneyMsg").text("Balling on a budget");
  }else if (this.value === "3") {
    $("#moneyMsg").text("I must dine like a king");
  }
});

$('#socialLvl').on("input", function() {
  if (this.value === "1") {
    $("#socialMsg").text("All I need is me, myself, and I");
  }else if (this.value === "2") {
    $("#socialMsg").text("Over-planning kills magic");
  }else if (this.value === "3") {
    $("#socialMsg").text("No road is long with good company");
  }
});//end SLIDERS section

//ARRAY OF OBJECTS for preset destinations 
const genDestinations = [
  {
    name: "kyoto",
    place_id: "",
    safety: 0,
    money: 0,
    social: 0,
  }, 
  {
    name: "istanbul",
    place_id: "",
    safety: 0,
    money: 0,
    social: 0, 
  },
  {
    name: "new york city",
    place_id: "",
    safety: 0,
    money: 0,
    social: 0, 
  }, 
  {
    name: "bali",
    place_id: "",
    safety: 0,
    money: 0,
    social: 0,
  }, 
  {
    name: "florence",
    place_id: "",
    safety: 0,
    money: 0,
    social: 0,
  },
  {
    name: "amsterdam",
    place_id: "",
    safety: 0,
    money: 0,
    social: 0,
  },
  {
    name: "venice",
    place_id: "",
    safety: 0,
    money: 0,
    social: 0,
  },
  {
    name: "melbourne",
    place_id: "",
    safety: 0,
    money: 0,
    social: 0,
  },
  {
    name: "porto",
    place_id: "",
    safety: 0,
    money: 0,
    social: 0,
  },
  {
    name: "honolulu",
    place_id: "",
    safety: 0,
    money: 0,
    social: 0,
  },
  {
    name: "salzburg",
    place_id: "",
    safety: 0,
    money: 0,
    social: 0,
  },
  {
    name: "paris",
    place_id: "",
    safety: 0,
    money: 0,
    social: 0,
  },
  {
    name: "seychalles",
    place_id: "",
    safety: 0,
    money: 0,
    social: 0 
  }, 
  {
    name: "puerto vallarta",
    place_id: "",
    safety: 0,
    money: 0,
    social: 0 
  },
  {
    name: "las vegas",
    place_id: "",
    safety: 0,
    money: 0,
    social: 0 
  },
  {
    name: "taipei",
    place_id: "",
    safety: 0,
    money: 0,
    social: 0 
  },
  {
    name: "portland",
    place_id: "",
    safety: 0,
    money: 0,
    social: 0 
  },
  {
    name: "los angeles",
    place_id: "",
    safety: 0,
    money: 0,
    social: 0 
  },
  {
    name: "madrid",
    place_id: "",
    safety: 0,
    money: 0,
    social: 0 
  },
  {
    name: "lisbon",
    place_id: "",
    safety: 0,
    money: 0,
    social: 0 
  },
  {
    name: "sao paulo",
    place_id: "",
    safety: 0,
    money: 0,
    social: 0 
  }, 
  {
    name: "singapore",
    place_id: "",
    safety: 0,
    money: 0,
    social: 0 
  },
  {
    name: "vienna",
    place_id: "",
    safety: 0,
    money: 0,
    social: 0 
  },
  {
    name: "rio de janeiro",
    place_id: "",
    safety: 0,
    money: 0,
    social: 0 
  },
  {
    name: "osaka",
    place_id: "",
    safety: 0,
    money: 0,
    social: 0 
  },
  {
    name: "vancouver",
    place_id: "",
    safety: 0,
    money: 0,
    social: 0 
  }, 
  {
    name: "queenstown",
    place_id: "",
    safety: 0,
    money: 0,
    social: 0 
  }, 
  {
    name: "el chalten",
    place_id: "",
    safety: 0,
    money: 0,
    social: 0 
  },
  {
    name: "coron",
    place_id: "",
    safety: 0,
    money: 0,
    social: 0 
  },
  {
    name: "moab",
    place_id: "",
    safety: 0,
    money: 0,
    social: 0 
  },
  {
    name: "puerto escondido",
    place_id: "",
    safety: 0,
    money: 0,
    social: 0 
  },
  {
    name: "nara",
    place_id: "",
    safety: 0,
    money: 0,
    social: 0 
  },
  {
    name: "victoria falls",
    place_id: "",
    safety: 0,
    money: 0,
    social: 0 
  },
  {
    name: "corsica",
    place_id: "",
    safety: 0,
    money: 0,
    social: 0 
  }
];//end ARRAY OF OBJECTS section

const displayer = () => {
  $(".openingPage").hide();
  $(".secondPage").hide();
  $(".eventPage").hide();
  $(".foodPage").hide();
  $(".scheduler").hide();
  $(".map").hide();
  
  if (pageDisplayBool[0]) {
    $(".openingPage").show();
  } if (pageDisplayBool[1]) {
    $(".secondPage").show();
    $(".map").show();
  } if (pageDisplayBool[2]) {
    $(".eventPage").show();
  } if (pageDisplayBool[3]) {
    $(".foodPage").show();
  } if (pageDisplayBool[4]) {
    $(".scheduler").show();
  };
};
displayer();

var map, infoWindow;
     function initMap() {
       map = new google.maps.Map(document.getElementById('map'), {
         center: {lat: 37.733795, lng: -122.446747},
         zoom: 6
       });
       infoWindow = new google.maps.InfoWindow;
       console.log(map)
       console.log(infoWindow);
       // Try HTML5 geolocation.
       if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(function(position) {
           console.log(navigator)
           var pos = {
             lat: position.coords.latitude,
             lng: position.coords.longitude
           };    
           var currentLocationmarker = new google.maps.Marker({position: pos, map: map});
           for(let i = 0; i < genDestinations.length; i++){
           var currentLocationmarker = new google.maps.Marker({position: genDestinations[i].pos, map: map});
           }
           
           //var destinationMarker = new google.maps.Marker({position: genDestinations[i], map: map});
           
           infoWindow.setPosition(pos);
           infoWindow.setContent('Location found.');
           infoWindow.open(map);
           map.setCenter(pos);
         }, function() {
           handleLocationError(true, infoWindow, map.getCenter());
         });
       } else {
         // Browser doesn't support Geolocation
         handleLocationError(false, infoWindow, map.getCenter());
       }
     }
     function handleLocationError(browserHasGeolocation, infoWindow, pos) {
       infoWindow.setPosition(pos);
       infoWindow.setContent(browserHasGeolocation ?
                             'Error: The Geolocation service failed.' :
                             'Error: Your browser doesn\'t support geolocation.');
       infoWindow.open(map);     
     }

$(document).on("click", ".buttonStart", function(){
  pageDisplayBool[0] = false;
  pageDisplayBool[1] = true;
  console.log(pageDisplayBool);
  displayer();
});

$(document).on("click", ".eventsB", function() {
  pageDisplayBool[1] = false;
  pageDisplayBool[2] = true;
  displayer();
});

$(document).on("click", ".foodPlacesB", function() {
  pageDisplayBool[1] = false;
  pageDisplayBool[3] = true;
  displayer();
});

$(document).on("click", ".backButton", function() {
  pageDisplayBool[2] = false;
  pageDisplayBool[3] = false;
  pageDisplayBool[4] = false;
  pageDisplayBool[1] = true;
  displayer();
});

$(document).on("click", ".restartButton", function() {
  pageDisplayBool[1] = false;
  pageDisplayBool[0] = true;
  displayer();
});

//--------------------------------------- start yelp food API section -------------------------------------------

// Next to implement: button for "see more food" that switches out the 5 restaurants for the next 5 on the list, up to 25
// test destination: 39.7392° N, 104.9903° W
destinationLatitude = "39.7392";
destinationLongitude = "-104.9903";

term = "?term=breakfast";
term2 = "?term=lunch";
term3 = "?term=dinner";

// locationYelp = `&latitude=${destinationLatitude}&longitude=${destinationLongitude}`;
locationYelp = "&location=denver, CO"
limit = "&limit=10";
radius = "&radius=20000";  //in meters (max 40000 is 25 miles)
price = "&price=1,2"; //1 = $, 2 = $$ etc

// breakfast ajax
query = term + locationYelp + limit + radius + price;
queryURLyelp = "https://cors-anywhere.herokuapp.com/" + `https://api.yelp.com/v3/businesses/search${query}`;
$.ajax({
  url: queryURLyelp,
  method: "GET",
  headers: {
    "Authorization": "Bearer ETyIXGHKE8nskR_WJUaEvwJeXNjFJ5Cq_a_HdZNZmsTkzTut_-Y68XQPpCej1uyiIcmuW2PhP2j2rlSZMKmeecYZK8lOYImJNV9s00Su6K_Peuojo9vcupVUc5n-XHYx"
  }
}).then(function(response){
console.log(response);
for(let i=0; i<5; i++) {
  let name = response.businesses[i].name;
  let price = response.businesses[i].price;
  let rating = response.businesses[i].rating;
  let imageURL = response.businesses[i].image_url;
  let yelpURL = response.businesses[i].url;
  // let foodLatitude = reponse.businesses[i].coordinates.latitude;
  // let foodLongitude = reponse.businesses[i].coordinates.longitude;

  $(`.breakfastImage${[i+1]}`).attr("src", imageURL);
  $(`.breakfastLink${[i+1]}`).attr("href", yelpURL);
  let foodInfo = $(`<p class="text-center">`).text(name);
  let foodInfo2 = $(`<p class="text-center">`).text("Price " + price + "  Rating " + rating + " ★");
  $(`.breakfast${i+1}`).append(foodInfo);
  $(`.breakfast${i+1}`).append(foodInfo2);
};
});

// lunch ajax
query2 = term2 + locationYelp + limit + radius + price;
queryURLyelp2 = "https://cors-anywhere.herokuapp.com/" + `https://api.yelp.com/v3/businesses/search${query2}`;

$.ajax({
  url: queryURLyelp2,
  method: "GET",
  headers: {
    "Authorization": "Bearer ETyIXGHKE8nskR_WJUaEvwJeXNjFJ5Cq_a_HdZNZmsTkzTut_-Y68XQPpCej1uyiIcmuW2PhP2j2rlSZMKmeecYZK8lOYImJNV9s00Su6K_Peuojo9vcupVUc5n-XHYx"
  }
}).then(function(response){
console.log(response);
for(let i=0; i<5; i++) {
  let name = response.businesses[i].name;
  let price = response.businesses[i].price;
  let rating = response.businesses[i].rating;
  let imageURL = response.businesses[i].image_url;
  let yelpURL = response.businesses[i].url;
  // let foodLatitude = reponse.businesses[i].coordinates.latitude;
  // let foodLongitude = reponse.businesses[i].coordinates.longitude;

  $(`.lunchImage${[i+1]}`).attr("src", imageURL);
  $(`.lunchLink${[i+1]}`).attr("href", yelpURL);
  let foodInfo = $(`<p class="text-center">`).text(name);
  let foodInfo2 = $(`<p class="text-center">`).text("Price " + price + "  Rating " + rating + " ★");
  $(`.lunch${i+1}`).append(foodInfo);
  $(`.lunch${i+1}`).append(foodInfo2);
};
});

// dinner ajax
query3 = term3 + locationYelp + limit + radius + price;
queryURLyelp3 = "https://cors-anywhere.herokuapp.com/" + `https://api.yelp.com/v3/businesses/search${query3}`;
$.ajax({
  url: queryURLyelp3,
  method: "GET",
  headers: {
    "Authorization": "Bearer ETyIXGHKE8nskR_WJUaEvwJeXNjFJ5Cq_a_HdZNZmsTkzTut_-Y68XQPpCej1uyiIcmuW2PhP2j2rlSZMKmeecYZK8lOYImJNV9s00Su6K_Peuojo9vcupVUc5n-XHYx"
  }
}).then(function(response){
console.log(response);
for(let i=0; i<5; i++) {
  let name = response.businesses[i].name;
  let price = response.businesses[i].price;
  let rating = response.businesses[i].rating;
  let imageURL = response.businesses[i].image_url;
  let yelpURL = response.businesses[i].url;
  // let foodLatitude = reponse.businesses[i].coordinates.latitude;
  // let foodLongitude = reponse.businesses[i].coordinates.longitude;

  $(`.dinnerImage${[i+1]}`).attr("src", imageURL);
  $(`.dinnerLink${[i+1]}`).attr("href", yelpURL);
  let foodInfo = $(`<p class="text-center">`).text(name);
  let foodInfo2 = $(`<p class="text-center">`).text("Price " + price + "  Rating " + rating + " ★");
  $(`.dinner${i+1}`).append(foodInfo);
  $(`.dinner${i+1}`).append(foodInfo2);
};
});
//--------------------------------------- end yelp food API section -------------------------------------------

//--------------------------------------- start event API section ---------------------------------------------


// unirest.post("https://Ticketmasterstefan-skliarovV1.p.rapidapi.com/addDeliveriesToCart")
// .header("X-RapidAPI-Host", "Ticketmasterstefan-skliarovV1.p.rapidapi.com")
// .header("X-RapidAPI-Key", "8330ea6096msha4fd84b5e8f593bp161f8ejsn6c508a8ee435")
// .header("Content-Type", "application/x-www-form-urlencoded")
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });


term5 ="?term=activities";
locationYelp = "&location=denver, CO";
query5 = term5 + locationYelp;

queryURLyelp = "https://cors-anywhere.herokuapp.com/" + `https://api.yelp.com/v3/businesses/search${query5}`;
$.ajax({
  url: queryURLyelp,
  method: "GET",
  headers: {
    "Authorization": "Bearer ETyIXGHKE8nskR_WJUaEvwJeXNjFJ5Cq_a_HdZNZmsTkzTut_-Y68XQPpCej1uyiIcmuW2PhP2j2rlSZMKmeecYZK8lOYImJNV9s00Su6K_Peuojo9vcupVUc5n-XHYx"
  }
}).then(function(response){
console.log(response);
for(let i=0; i<10; i++) {
  let name = response.businesses[i].name;
  let imageURL = response.businesses[i].image_url;
  let yelpURL = response.businesses[i].url;
  // let activityLatitude = reponse.businesses[i].coordinates.latitude;
  // let activityLongitude = reponse.businesses[i].coordinates.longitude;
  $(`.activitiesImage${[i+1]}`).attr("src", imageURL);
  $(`.activitiesLink${[i+1]}`).attr("href", yelpURL);
  let activityInfo = $(`<p class="text-center">`).text(name);
  $(`.activities${i+1}`).append(activityInfo);
};
});
//map display, appends to #map div

     
     


// term6 ="?term=nightlife";
// locationYelp = "&location=denver, CO";
// query6 = term6 + locationYelp;

// queryURLyelp = "https://cors-anywhere.herokuapp.com/" + `https://api.yelp.com/v3/businesses/search${query6}`;
// $.ajax({
//   url: queryURLyelp,
//   method: "GET",
//   headers: {
//     "Authorization": "Bearer ETyIXGHKE8nskR_WJUaEvwJeXNjFJ5Cq_a_HdZNZmsTkzTut_-Y68XQPpCej1uyiIcmuW2PhP2j2rlSZMKmeecYZK8lOYImJNV9s00Su6K_Peuojo9vcupVUc5n-XHYx"
//   }
// }).then(function(response){
// console.log(response);
// // for(let i=0; i<10; i++) {
// //   let name = response.businesses[i].name;
// //   let imageURL = response.businesses[i].image_url;
// //   let yelpURL = response.businesses[i].url;
// //   // let activityLatitude = reponse.businesses[i].coordinates.latitude;
// //   // let activityLongitude = reponse.businesses[i].coordinates.longitude;
// //   $(`.activitiesImage${[i+1]}`).attr("src", imageURL);
// //   $(`.activitiesLink${[i+1]}`).attr("href", yelpURL);
// //   let activityInfo = $(`<p class="text-center">`).text(name);
// //   $(`.activities${i+1}`).append(activityInfo);
// // };
// });


//---------------------------------------- end event API section ---------------------------------------------
