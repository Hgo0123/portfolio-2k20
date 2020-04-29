var keywords = ["internship.", "apprenticeship."];

var count = 0;
var span = document.querySelector(".pres__text--rotate");

setInterval(function () {
  span.innerHTML = keywords[count];
  count++;
  if (count === keywords.length) {
    count = 0;
  }
}, 2000);

var pres = document.querySelector(".pres__text");
var coef = 0.3;
coefop = 250;

window.addEventListener("scroll", function () {
  pres.style.transform = `rotate(${window.pageYOffset * coef}deg)`;
  pres.style.opacity = coefop - window.pageYOffset + "%";
});

$(document).ready(function () {
  $(".content").css("display", "none");
  $("#load").fadeOut(2000, function () {
    $(".content").fadeIn(1000);
  });
});
