const trips = [
  {
    "name": "10 DAYS 'ROUND JUPITER",
    "price": 45000,
    "description": "Embarking on a grand voyage to Jupiter, the King of the Planets, promises an unparalleled adventure through the cosmos. Our spacecraft, equipped with cutting-edge technology and guided by the brightest minds in space exploration, charts a course towards the awe-inspiring gas giant.",
    "image": "Jupiter.webp",
    "duration": "10 days", 
    "destinations": "1 destination", 
    "roundTrip": true 
  },
  {
    "name": "Merry Christmas at Mercury",
    "price": 20000,
    "description": "Welcome aboard the extraordinary cruise to Mercury, the sizzling jewel of our solar system! Departing from Earth's orbit, our state-of-the-art spacecraft navigates the vast cosmic seas towards the closest planet to the Sun. Prepare to be mesmerized as we approach this scorching world, where temperatures soar to extreme levels.",
    "image": "spaceship.png",
    "duration": "7 days", 
    "destinations": "2 destinations", 
    "roundTrip": false 
  },
  {
    "name": "Visit at Venus",
    "price": 40000,
    "description": "Buckle up for the most extraordinary voyage of your lifetime as we embark on a daring expedition to the enigmatic planet of Venus! Departing from Earth's orbit, our cutting-edge spacecraft will traverse through the vastness of space, traversing the celestial void towards the Morning Star.",
    "image": "plant3.png",
    "duration": "8 days", 
    "destinations": "1 destination", 
    "roundTrip": true 
  },
  {
    "name": "Mega Mars Trip",
    "price": 50000,
    "description": "Embarking on a grand voyage to Mars, the Red Planet, promises an unforgettable adventure through the cosmos. Our state-of-the-art spacecraft will guide you on a journey to the fourth planet from the Sun, offering a chance to explore its mysteries and captivating landscapes.",
    "image": "plant4.png",
    "duration": "12 days", 
    "destinations": "3 destinations", 
    "roundTrip": true 
  },
  {
    "name": "September at Saturn",
    "price": 40000,
    "description": "Experience the awe-inspiring beauty of Saturn, the ringed jewel of our solar system. Departing from Earth's orbit, our cutting-edge spacecraft will carry you on a voyage through space, allowing you to witness the breathtaking rings and captivating moons of this gas giant.",
    "image": "plant5.png",
    "duration": "9 days", 
    "destinations": "2 destinations", 
    "roundTrip": false 
  },
  {
    "name": "All around the MOONS",
    "price": 30000,
    "description": "Experience the ultimate adventure on our Cruise to Three Moons! Journey to Triton, Neptune's icy moon, explore Europa's alien landscapes, and set foot on Phobos, a moon of Mars. Witness celestial wonders and thrilling exploration on this extraordinary voyage through the cosmos.",
    "image": "plant4.png",
    "duration": "3 days", 
    "destinations": "3 destinations", 
    "roundTrip": true 
  },
  {
    "name": "Big Celestial Experience",
    "price": 15000,
    "description": "Embarking on a grand voyage to Mars, the Red Planet, promises an unforgettable adventure through the cosmos. Our state-of-the-art spacecraft will guide you on a journey to the fourth planet from the Sun, offering a chance to explore its mysteries and captivating landscapes.",
    "image": "plant4.png",
    "duration": "12 days", 
    "destinations": "3 destinations", 
    "roundTrip": false 
  }
];




function displayTrips(filterType) {
  // Clear the existing trips
  $("#trips-container").empty();

  // Create a filter function based on the selected filterType
  let filterFunction;

  switch (filterType) {
    case "short":
      
      filterFunction = (trip) => parseInt(trip.duration) <= 7;
      break;
    case "long":
 
      filterFunction = (trip) => parseInt(trip.duration) > 7;
      break;
    case "single":
     
      filterFunction = (trip) => parseInt(trip.destinations) === 1;
      break;
    case "multiple":
    
      filterFunction = (trip) => parseInt(trip.destinations) > 1;
      break;
    case "roundtrip":
     
      filterFunction = (trip) => trip.roundTrip === true;
      break;
    case "rowboat":
   
      trips.sort((a, b) => a.price - b.price);
      trips.slice(0, 5).forEach((trip) => appendTripToContainer(trip));
      return;
    default:
     
      trips.forEach((trip) => appendTripToContainer(trip));
      return;
  }

  // Apply the selected filter function
  trips.filter(filterFunction).forEach((trip) => appendTripToContainer(trip));
}





function appendTripToContainer(trip) {
  // Clone the trips template for each trip item
  let currentTrip = $("#trips-template").contents().clone();

  
  currentTrip.find(".jupiterImg").attr('src', 'assets/cruise ship tour/Jupiter.webp' + trip.image);
  currentTrip.find(".nameText").text(trip.name);
  currentTrip.find(".priceText").text('R' + trip.price);
  currentTrip.find(".trips-desc").text(trip.description);
 
  currentTrip.find(".trip-duration").text("Duration: " + trip.duration); 
  currentTrip.find(".trip-destinations").text("Destinations: " + trip.destinations); 
  currentTrip.find(".trip-round-trip").text("Round Trip: " + (trip.roundTrip ? "Yes" : "No")); 

  $("#trips-container").append(currentTrip);
}


// Display all trips by default
displayTrips("");

// Event listener for filter radio buttons
$("input[name='filterRadio']").on("change", function() {
  displayTrips($(this).val());
});


// Function to toggle selected styles and button visibility for a specific card
function toggleSelectedStyles(element) {

  $(".trip-items").removeClass("trip-selected");

  $(".showButton").hide();
  

  $(".trip-items h3, .trip-items h2, .trip-items p, .trip-items .trip-duration, .trip-items .trip-destinations, .trip-items .trip-round-trip").css("color", "");
  
 
  element.addClass("trip-selected");
  
  element.find(".showButton").show();
  
  element.find("h3, h2, p, .trip-duration, .trip-destinations, .trip-round-trip").css("color", "black");
}


$("#trips-container").on("click", ".trip-items", function() {

  toggleSelectedStyles($(this));
});


$("#trips-container").on("click", ".showButton", function(event) {
  
  event.stopPropagation();


});



$(document).ready(function() {
  $.ajax({
    type: "GET",
    url: "https://api.openweathermap.org/data/2.5/weather?q=Pretoria&appid=bbbbc5ef85827bbd0c35b0d3bfa793db",
    success: function(data) {
      // Update weather information in the widget
      updateWeatherWidget(data);
    }
  });
});

function updateWeatherWidget(data) {
  const weatherIcon = data.weather[0].icon;
  const temperature = Math.round(data.main.temp - 273.15); // Convert Kelvin to Celsius
  const description = data.weather[0].description;
  const humidity = data.main.humidity;

  // Update widget elements with weather data
  $("#temperature span").text(temperature + "°C");
  $("#description span").text(description);
  $("#humidity span").text(humidity + "%");
}

// Homepage h1

function changeHeaderText() {
  const h1Element = document.querySelector(".carousel-inner h1");
  if (h1Element) {
      h1Element.textContent = "Welcome to Astral Odyssey";
  }
}


window.addEventListener("DOMContentLoaded", changeHeaderText);

// checkout
$(document).ready(function() {

  $(".remove-button").click(function() {

      $(this).closest("tr").remove();
  });
});

// remove all button

$(document).ready(function() {
  
  $("#remove-all-button").on("click", function() {
 
    $("table tbody").empty();
  });
});

$(document).ready(function() {
  
  $("#purchaseBtn").on("click", function() {
   
    $("#purchaseMessage").show();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const popupContainer = document.getElementById("popupContainer");
  const closePopupBtn = document.getElementById("closePopupBtn");

  // Function to show the popup
  function showPopup() {
      popupContainer.style.display = "flex"; 
  }

  // Function to hide the popup
  function hidePopup() {
      popupContainer.style.display = "none"; 
  }

  // Event listener for showing the popup 
  document.getElementById("purchaseBtn").addEventListener("click", showPopup);

  // Event listener for hiding the popup 
  closePopupBtn.addEventListener("click", hidePopup);
});