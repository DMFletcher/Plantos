// var moment = require("moment");

$(document).ready(function() {
 
  //addPlantBtn
  $("#addPlantBtn").on("click", function(){
    window.location.href="/addPlant"
    //if logged in, take to page
    //else take to sign-up page
  });
  //cancelAddPlantBtn
  $("#cancelAddPlantBtn").on("click", function(e){
    e.preventDefault();
    window.location.href="/myPlants"
  });

  $("#loginPage").on("click", function(e){
    e.preventDefault();
    window.location.href="/login"
  });

  $("#signUpBtn").on("click", function(e){
    e.preventDefault();
    window.location.href="/signup"
  });

  $("#submitPlant").on("click", function(e){
    //get form data from add a plant
    //create card with pic, name, link to modal
    e.preventDefault();
    var waterInt = $("#wateringNeedsInt").val().trim();
    if (waterInt === ""){
      waterInt = null;
    }

    var newPlant = {
      plant_common_name: $("#commonName").val().trim(),
      plant_water_text: $("#wateringNeedsText").val().trim(),
      sun_placement: $("#sunNeeds").val(),
      pet_friendly: $("#petFriendly").val(),
      plant_water_int: waterInt,
      plant_scientific_name: $("#scientificName").val().trim() || null
    };

    //add to newPlant object if these optional values are included on the form
    if ($("#wateringNeedsInt").val().trim() !== ""){
      newPlant={
        plant_water_int: $("#wateringNeedsInt").val().trim(),
      }
    }
    if ($("#scientificName").val().trim() !== ""){
      newPlant={
        plant_scentific_name: $("#scientificName").val().trim(),
      }
    }

    $.ajax("/api/plants", {
      type:"POST",
      data:newPlant
    }).then(
      function(){
        window.location.href = "/myPlants";
      }
    )
  });

$("#signupBtn").on("click", function(e){
    //get form data from add a plant
    //create card with pic, name, link to modal
    e.preventDefault();

    console.log($("#email-input").val().trim());

    var newUser = {
      email: $("#email-input").val().trim(),
      password: $("#password-input").val().trim()
    };

    //add to newPlant object if these optional values are included on the form
    if ($("#email-input").val().trim() !== ""){
      newPlant={
        plant_water_int: $("#wateringNeedsInt").val().trim(),
      }
    }
    if ($("#scientificName").val().trim() !== ""){
      newPlant={
        plant_scentific_name: $("#scientificName").val().trim(),
      }
    }

    $.ajax("/api/plants", {
      type:"POST",
      data:newPlant
    }).then(
      function(){
        window.location.href = "/myPlants";
      }
    )
  });

});