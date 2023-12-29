$(document).ready(function(){
  var currentProject = ".home-content"; // set the default content to home
  
  // Function to update the active button
  function updateActiveButton(newActiveButton) {
      $(".containerNav a").removeClass("active");
      $(newActiveButton).addClass("active");
  }
  
  // Button 1
  $("#home-button").click(function(){
      if (currentProject !== ".home-content") {
          $(currentProject).hide("fast");
          currentProject = ".home-content";
          $(currentProject).show("fast");
          updateActiveButton("#home-button");
      }
  });
  
  // Button 2
  $("#about-button").click(function(){
      if (currentProject !== ".about-content") {
          $(currentProject).hide("fast");
          currentProject = ".about-content";
          $(currentProject).show("fast");
          updateActiveButton("#about-button");
      }
  });
  
  // Button 3
  $("#portfolio-button").click(function(){
      if (currentProject !== ".portfolio-content") {
          $(currentProject).hide("fast");
          currentProject = ".portfolio-content";
          $(currentProject).show("fast");
          updateActiveButton("#portfolio-button");
      }
  });
  
  // Button 4
  $("#contact-button").click(function(){
      if (currentProject !== ".contact-content") {
          $(currentProject).hide("fast");
          currentProject = ".contact-content";
          $(currentProject).show("fast");
          updateActiveButton("#contact-button");
      }
  });
  
  // Show the default content section and set the active button
  $(currentProject).show();
  updateActiveButton("#home-button");
});