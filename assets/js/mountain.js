setTimeout(function () {
	$(".loader").fadeOut(1100);
	$(".container").fadeIn(1100);
}, 2500);

setTimeout(function () {
	const circle = document.querySelector(".mouse-cursor");
	const html = new Scrooth();

	gsap.to("#bg", {
		scrollTrigger: {
			scrub: 1,
		},
		scale: 1.5,
	});

	gsap.to("#person", {
		scrollTrigger: {
			scrub: 1,
		},
		scale: 1.5,
	});

	gsap.to("#mountain_left", {
		scrollTrigger: {
			scrub: 1,
		},
		x: -500,
	});

	gsap.to("#mountain_right", {
		scrollTrigger: {
			scrub: 1,
		},
		x: 500,
	});

	gsap.to("#clouds_1", {
		scrollTrigger: {
			scrub: 1,
		},
		x: 200,
	});

	gsap.to("#clouds_2", {
		scrollTrigger: {
			scrub: 1,
		},
		x: -200,
	});

	gsap.to("#text", {
		scrollTrigger: {
			scrub: 1,
		},
		y: 500,
	});

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
			} else {
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
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	}

	if (window.addEventListener) {
		addEventListener("DOMContentLoaded", checkForVisibility, false);
		addEventListener("load", checkForVisibility, false);
		addEventListener("scroll", checkForVisibility, false);
	}

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
}, 2510);
