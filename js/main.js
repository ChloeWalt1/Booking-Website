const trips = [
  {
    "name": "10 DAYS 'ROUND JUPITER",
    "price": 45000,
    "description": "Embarking on a grand voyage to Jupiter, the King of the Planets, promises an unparalleled adventure through the cosmos. Our spacecraft, equipped with cutting-edge technology and guided by the brightest minds in space exploration, charts a course towards the awe-inspiring gas giant.",
    "image": "plant1.png"
  },
  {
    "name": "Merry Christmas at Mercury",
    "price": 20000,
    "description": "Welcome aboard the extraordinary cruise to Mercury, the sizzling jewel of our solar system! Departing from Earth's orbit, our state-of-the-art spacecraft navigates the vast cosmic seas towards the closest planet to the Sun. Prepare to be mesmerized as we approach this scorching world, where temperatures soar to extreme levels.",
    "image": "plant2.png"
  },
  {
    "name": "Visit at Venus",
    "price": 40000,
    "description": "Buckle up for the most extraordinary voyage of your lifetime as we embark on a daring expedition to the enigmatic planet of Venus! Departing from Earth's orbit, our cutting-edge spacecraft will traverse through the vastness of space, traversing the celestial void towards the Morning Star.",
    "image": "plant3.png"
  },
  {
    "name": "Mega Mars Trip",
    "price": 50000,
    "description": "Embarking on a grand voyage to Mars, the Red Planet, promises an unforgettable adventure through the cosmos. Our state-of-the-art spacecraft will guide you on a journey to the fourth planet from the Sun, offering a chance to explore its mysteries and captivating landscapes.",
    "image": "plant4.png"
  },
  {
    "name": "September at Saturn",
    "price": 40000,
    "description": "Experience the awe-inspiring beauty of Saturn, the ringed jewel of our solar system. Departing from Earth's orbit, our cutting-edge spacecraft will carry you on a voyage through space, allowing you to witness the breathtaking rings and captivating moons of this gas giant.",
    "image": "plant5.png"
  }
];

function displayTrips(filterType) {
  // Clear the existing trips
  $("#trips-container").empty();

  // Loop through the trips array and apply the filter
  for (let i = 0; i < trips.length; i++) {
    const trip = trips[i];

    if (filterType === "high" && trip.price >= 30000) {
      appendTripToContainer(trip);
    } else if (filterType === "low" && trip.price < 30000) {
      appendTripToContainer(trip);
    } else if (!filterType || filterType === "") {
      appendTripToContainer(trip);
    }
  }
}

function appendTripToContainer(trip) {
  // Clone the trips template for each trip item
  let currentTrip = $("#trips-template").contents().clone();

  // Set the content for the trip card from the trips list
  currentTrip.find(".jupiterImg").attr('src', 'assets/' + trip.image);
  currentTrip.find(".nameText").text(trip.name);
  currentTrip.find(".priceText").text('R' + trip.price);
  currentTrip.find(".trips-desc").text(trip.description);

  // Append the current trip to the trips container
  $("#trips-container").append(currentTrip);
}

// Display all trips by default
displayTrips("");

// Event listener for filter radio buttons
$("input[name='filterRadio']").on("change", function() {
  displayTrips($(this).val());
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
