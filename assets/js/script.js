setTimeout(function () {
  $(".loading").fadeOut(1100);
  $(".content").css('display', 'block');
}, 2000);

$(document).ready(function () {"use strict";
  // setTimeout(() => {
    const html = new Scrooth();

    // Parallax #1
    let stars = document.getElementById("stars");
    let moon = document.getElementById("moon");
    let mountains_behind = document.getElementById("mountains_behind");
    let text = document.getElementById("text");
    let btn = document.getElementById("btn");
    let mountains_front = document.getElementById("mountains_front");
    let header = document.querySelector("header");
    let title = document.getElementById("title");
    const circle = document.querySelector(".mouse-cursor");

    // Parallax #2
    let text2 = document.getElementById("text2");
    let test = document.getElementById("test");
    let bird1 = document.getElementById("bird1");
    let bird2 = document.getElementById("bird2");
    let forest = document.getElementById("forest");
    let btn2 = document.getElementById("btn2");
    let rocks = document.getElementById("rocks");
    let water = document.getElementById("water");

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

    $(window).scroll(function() {
      let value = window.scrollY;
      var hT = $('#text').offset().top,
          hH = $('#text').outerHeight(),
          wH = $(window).height(),
          wS = $(this).scrollTop();
      if (wS > (hT+hH-wH)){
        rocks.style.top = value * -0.029 + "px";
        forest.style.top = value * -0.015 + "px";
        bird1.style.top = value * 0.015 + "px";
        bird1.style.left = value * 0.015 + "px";
        bird2.style.top = value * 0.015 + "px";
        bird2.style.right = value * -0.115 + "px";
        btn2.style.marginTop = value * 0.15 + "px";
      }
      else {
        rocks.style.top = - value * -0.029 + "px";
        forest.style.top = - value * -0.015 + "px";
        bird1.style.top = - value * 0.015 + "px";
        bird1.style.left = - value * 0.015 + "px";
        bird2.style.top = value * 0.015 + "px";
        bird2.style.right = value * -0.115 + "px";
        btn2.style.marginTop = -value * 0.15 + "px";
      }
   });

    $(window).scroll(function() {
      let value = window.scrollY;
      var hT = $('.wrapper').offset().top,
          hH = $('.wrapper').outerHeight(),
          wH = $(window).height(),
          wS = $(this).scrollTop();
      if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
          text2.style.top = value * 0.05 + "px";
      }
      else {
        text2.style.top = - value * 0.05 + "px";
      }
   });

    $("#btn").click(function (event) {
      event.preventDefault();
      var dest = 0;
      if (
        $(this.hash).offset().top >
        $(document).height() - $(window).height()
      ) {
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
        else {
          text.classList.remove("Visible");
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
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    if (window.addEventListener) {
      addEventListener("DOMContentLoaded", checkForVisibility, false);
      addEventListener("load", checkForVisibility, false);
      addEventListener("scroll", checkForVisibility, false);
    }

    window.addEventListener("mousemove", mouseMoveHandler);
    window.addEventListener("mousedown", mouseDownHandler);
    window.addEventListener("mouseup", mouseUpHandler);

    $(".link").mouseenter(function () {
      linkEnterHandler();
      $(".mouse-cursor").addClass("after");
    });

    $(".link").mouseleave(function () {
      linkLeaveHandler();
      $(".mouse-cursor").removeClass("after");
    });

    function mouseMoveHandler(e) {
      circle.style.left = e.clientX - circle.offsetWidth / 2 + "px";
      circle.style.top = e.clientY - circle.offsetHeight / 2 + "px";
      circle.style.opacity = 1;
    }

    function mouseUpHandler(e) {
      circle.style.transform = "scale(1)";

      if (e.target.classList.contains("link")) {
        circle.style.transform = "scale(5)";
        circle.style.opacity = 0;
      }
    }

    function mouseDownHandler() {
      circle.style.transform = "scale(1.5)";
    }

    function linkEnterHandler() {
      circle.style.transform = "scale(1.5)";
      circle.style.backgroundColor = "rgba(255, 0, 0, .2)";
    }

    function linkLeaveHandler() {
      circle.style.transform = "scale(1)";
      circle.style.backgroundColor = "rgba(255, 0, 0, 0)";
    }

    document.querySelector(".button").onmousemove = function (e) {
      var x = e.pageX - e.target.offsetLeft;
      var y = e.pageY - e.target.offsetTop;

      e.target.style.setProperty("--x", x + "px");
      e.target.style.setProperty("--y", y + "px");
    };

    var progressPath = document.querySelector(".progress-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 550;
    jQuery(window).on("scroll", function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery(".progress-wrap").addClass("active-progress");
      } else {
        jQuery(".progress-wrap").removeClass("active-progress");
      }
    });
    jQuery(".progress-wrap").on("click", function (event) {
      event.preventDefault();
      jQuery("html, body").animate({ scrollTop: 0 }, duration);
      return false;
    });
});
