$(document).ready(function() {
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 50});
  $("#myNavbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
  // floating labels in form
  $("body").on("input propertychange", ".floating-label", function(e) {
    $(this).toggleClass("floating-label-with-value", !!$(e.target).val());
  }).on("focus", ".floating-label", function() {
    $(this).addClass("floating-label-with-focus");
  }).on("blur", ".floating-label", function() {
    $(this).removeClass("floating-label-with-focus");
  });
});
