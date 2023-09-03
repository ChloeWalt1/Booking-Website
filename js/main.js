const trips = [
  {
    "name": "10 DAYS 'ROUND JUPITER",
    "price": 45000,
    "description": "Embarking on a grand voyage to Jupiter, the King of the Planets, promises an unparalleled adventure through the cosmos. Our spacecraft, equipped with cutting-edge technology and guided by the brightest minds in space exploration, charts a course towards the awe-inspiring gas giant.",
    "image": "Jupiter.webp",
    "duration": "10 days", // Add duration
    "destinations": "1 destination", // Add amount of destinations
    "roundTrip": true // Add round trip
  },
  {
    "name": "Merry Christmas at Mercury",
    "price": 20000,
    "description": "Welcome aboard the extraordinary cruise to Mercury, the sizzling jewel of our solar system! Departing from Earth's orbit, our state-of-the-art spacecraft navigates the vast cosmic seas towards the closest planet to the Sun. Prepare to be mesmerized as we approach this scorching world, where temperatures soar to extreme levels.",
    "image": "spaceship.png",
    "duration": "7 days", // Add duration
    "destinations": "2 destinations", // Add amount of destinations
    "roundTrip": false // Add round trip
  },
  {
    "name": "Visit at Venus",
    "price": 40000,
    "description": "Buckle up for the most extraordinary voyage of your lifetime as we embark on a daring expedition to the enigmatic planet of Venus! Departing from Earth's orbit, our cutting-edge spacecraft will traverse through the vastness of space, traversing the celestial void towards the Morning Star.",
    "image": "plant3.png",
    "duration": "8 days", // Add duration
    "destinations": "1 destination", // Add amount of destinations
    "roundTrip": true // Add round trip
  },
  {
    "name": "Mega Mars Trip",
    "price": 50000,
    "description": "Embarking on a grand voyage to Mars, the Red Planet, promises an unforgettable adventure through the cosmos. Our state-of-the-art spacecraft will guide you on a journey to the fourth planet from the Sun, offering a chance to explore its mysteries and captivating landscapes.",
    "image": "plant4.png",
    "duration": "12 days", // Add duration
    "destinations": "3 destinations", // Add amount of destinations
    "roundTrip": true // Add round trip
  },
  {
    "name": "September at Saturn",
    "price": 40000,
    "description": "Experience the awe-inspiring beauty of Saturn, the ringed jewel of our solar system. Departing from Earth's orbit, our cutting-edge spacecraft will carry you on a voyage through space, allowing you to witness the breathtaking rings and captivating moons of this gas giant.",
    "image": "plant5.png",
    "duration": "9 days", // Add duration
    "destinations": "2 destinations", // Add amount of destinations
    "roundTrip": false // Add round trip
  },
  {
    "name": "All around the MOONS",
    "price": 30000,
    "description": "Experience the ultimate adventure on our Cruise to Three Moons! Journey to Triton, Neptune's icy moon, explore Europa's alien landscapes, and set foot on Phobos, a moon of Mars. Witness celestial wonders and thrilling exploration on this extraordinary voyage through the cosmos.",
    "image": "plant4.png",
    "duration": "3 days", // Add duration
    "destinations": "3 destinations", // Add amount of destinations
    "roundTrip": true // Add round trip
  },
  {
    "name": "Big Celestial Experience",
    "price": 15000,
    "description": "Embarking on a grand voyage to Mars, the Red Planet, promises an unforgettable adventure through the cosmos. Our state-of-the-art spacecraft will guide you on a journey to the fourth planet from the Sun, offering a chance to explore its mysteries and captivating landscapes.",
    "image": "plant4.png",
    "duration": "12 days", // Add duration
    "destinations": "3 destinations", // Add amount of destinations
    "roundTrip": false // Add round trip
  }
];

// Other const elements with new properties as needed


function displayTrips(filterType) {
  // Clear the existing trips
  $("#trips-container").empty();

  // Create a filter function based on the selected filterType
  let filterFunction;

  switch (filterType) {
    case "short":
      // Filter trips with duration less than or equal to 7 days
      filterFunction = (trip) => parseInt(trip.duration) <= 7;
      break;
    case "long":
      // Filter trips with duration greater than 7 days
      filterFunction = (trip) => parseInt(trip.duration) > 7;
      break;
    case "single":
      // Filter trips with only 1 destination
      filterFunction = (trip) => parseInt(trip.destinations) === 1;
      break;
    case "multiple":
      // Filter trips with more than 1 destination
      filterFunction = (trip) => parseInt(trip.destinations) > 1;
      break;
    case "roundtrip":
      // Filter trips with round trip value as "true"
      filterFunction = (trip) => trip.roundTrip === true;
      break;
    case "rowboat":
      // Sort trips by price in ascending order and take the top 5
      trips.sort((a, b) => a.price - b.price);
      trips.slice(0, 5).forEach((trip) => appendTripToContainer(trip));
      return;
    default:
      // Display all trips when no specific filter is selected
      trips.forEach((trip) => appendTripToContainer(trip));
      return;
  }

  // Apply the selected filter function
  trips.filter(filterFunction).forEach((trip) => appendTripToContainer(trip));
}





function appendTripToContainer(trip) {
  // Clone the trips template for each trip item
  let currentTrip = $("#trips-template").contents().clone();

  // Set the content for the trip card from the trips list
  currentTrip.find(".jupiterImg").attr('src', 'assets/cruise ship tour/Jupiter.webp' + trip.image);
  currentTrip.find(".nameText").text(trip.name);
  currentTrip.find(".priceText").text('R' + trip.price);
  currentTrip.find(".trips-desc").text(trip.description);
  
  // Update the new fields with trip data
  currentTrip.find(".trip-duration").text("Duration: " + trip.duration); // Replace "trip.duration" with actual duration data
  currentTrip.find(".trip-destinations").text("Destinations: " + trip.destinations); // Replace "trip.destinations" with actual destinations data
  currentTrip.find(".trip-round-trip").text("Round Trip: " + (trip.roundTrip ? "Yes" : "No")); // Replace "trip.roundTrip" with actual round trip data

  // Append the current trip to the trips container
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
  // Remove 'trip-selected' class from all trip cards
  $(".trip-items").removeClass("trip-selected");
  // Hide all buttons
  $(".showButton").hide();
  
  // Reset text color for all elements within trip cards
  $(".trip-items h3, .trip-items h2, .trip-items p, .trip-items .trip-duration, .trip-items .trip-destinations, .trip-items .trip-round-trip").css("color", "");
  
  // Add 'trip-selected' class to the clicked trip card
  element.addClass("trip-selected");
  // Show the button in the clicked trip card
  element.find(".showButton").show();
  // Change the text color to black for elements within the clicked trip card
  element.find("h3, h2, p, .trip-duration, .trip-destinations, .trip-round-trip").css("color", "black");
}

// Event listener for clicking on trip cards
$("#trips-container").on("click", ".trip-items", function() {
  // Toggle selected styles and button visibility for the clicked card
  toggleSelectedStyles($(this));
});

// Event listener for clicking the "Show More" button
$("#trips-container").on("click", ".showButton", function(event) {
  // Prevent the click from propagating to the trip card
  event.stopPropagation();

  // Add your logic to show more details or perform other actions here
  // For example, you can display additional information or navigate to a new page.
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

// Add an event listener to run the function when the page finishes loading
window.addEventListener("DOMContentLoaded", changeHeaderText);

// checkout
$(document).ready(function() {
  // Add a click event listener to all elements with the class "remove-button"
  $(".remove-button").click(function() {
      // Find the closest <tr> element (table row) and remove it
      $(this).closest("tr").remove();
  });
});

// remove all button

$(document).ready(function() {
  // Select the button by its id
  $("#remove-all-button").on("click", function() {
    // Find the table body and remove all its children (rows)
    $("table tbody").empty();
  });
});

$(document).ready(function() {
  // Select the button by its id
  $("#purchaseBtn").on("click", function() {
    // Show the "Successful Purchase" message
    $("#purchaseMessage").show();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const popupContainer = document.getElementById("popupContainer");
  const closePopupBtn = document.getElementById("closePopupBtn");

  // Function to show the popup
  function showPopup() {
      popupContainer.style.display = "flex"; // Show the popup
  }

  // Function to hide the popup
  function hidePopup() {
      popupContainer.style.display = "none"; // Hide the popup
  }

  // Event listener for showing the popup (e.g., when the "Successful Purchase" button is clicked)
  document.getElementById("purchaseBtn").addEventListener("click", showPopup);

  // Event listener for hiding the popup (e.g., when the "Close" button is clicked)
  closePopupBtn.addEventListener("click", hidePopup);
});