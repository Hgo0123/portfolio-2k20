var keywords = ["internship", "apprenticeship"];

var count = 0;
var span = document.querySelector(".pres__text--rotate");

setInterval(function() {
  span.innerHTML = keywords[count];
  count++;
  if (count === keywords.length) {
    count = 0;
  }
}, 2000);
