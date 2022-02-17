const html = new Scrooth();

let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains_behind = document.getElementById("mountains_behind");
let text = document.getElementById("text");
let btn = document.getElementById("btn");
let mountains_front = document.getElementById("mountains_front");
let header = document.querySelector("header");
let title = document.getElementById("title");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  stars.style.left = value * 0.25 + "px";
  moon.style.top = value * 1.05 + "px";
  mountains_behind.style.top = value * 0.5 + "px";
  mountains_front.style.top = value * 0 + "px";
  text.style.marginRight = value * 4 + "px";
  text.style.marginTop = value * 1.5 + "px";
  btn.style.marginTop = value * 1.5 + "px";
  header.style.top = value * 0.5 + "px";
});

$("#btn").click(function (event) {
  event.preventDefault();
  var dest = 0;
  if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
    dest = $(document).height() - $(window).height();
  } else {
    dest = $(this.hash).offset().top;
  }
  $("html,body").animate({ scrollTop: dest }, 2000, "swing");
});

function checkForVisibility() {
  var titles = document.querySelectorAll(".title");
  var paragraph = document.querySelectorAll(".paragraph");
  titles.forEach(function (header) {
    if (isElementInViewport(header)) {
      header.classList.add("Visible");
    } else {
      header.classList.remove("Visible");
    }
  });

  paragraph.forEach(function (text) {
    if (isElementInViewport(text)) {
      text.classList.add("Visible");
    }
  });
}

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

if (window.addEventListener) {
  addEventListener("DOMContentLoaded", checkForVisibility, false);
  addEventListener("load", checkForVisibility, false);
  addEventListener("scroll", checkForVisibility, false);
}
