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
  }
];

// Loop through the trips array
for (let i = 0; i < trips.length; i++) {
  const trip = trips[i];

  // Append the template with trip data to the trips container
  $("#trips-container").append($("#trips-template").html());

  // Create a variable that contains the most recently added trip card
  let currentChild = $("#trips-container").children().eq(i);

  // Set the content for the trip card from the trips list
  $(currentChild).find(".jupiterImg").attr('src', 'assets/' + trip.image);
  $(currentChild).find(".trips-text h3").text(trip.name);
  $(currentChild).find(".trips-text h2").text('R' + trip.price);
  $(currentChild).find(".trips-text .trips-desc").text(trip.description);
}
