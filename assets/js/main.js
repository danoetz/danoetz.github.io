jQuery(document).ready(function($) {
  /*======= Skillset *=======*/

  $(".level-bar-inner").css("width", "0");

  $(window).on("load", function () {
    $(".level-bar-inner").each(function () {
      var itemWidth = $(this).data("level");

      $(this).animate(
        {
          width: itemWidth,
        },
        800
      );
    });
  });

  /*======= Project cards *=======*/
  var projectCardHolder = document.getElementById("project-card-holder");
  if (projectCardHolder != null && projectCardHolder.children.length != 0) {
    projectCards = $(".filtr-projects").filterizr({ layout: "sameWidth" });
  }
});