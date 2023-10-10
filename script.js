$(document).ready(function () {
	// Select all <h1> elements with a data-translate attribute
	$("h1[data-translate]").each(function () {
		var $element = $(this);
		var translation = $element.data("translate");
		var originalText = $element.text();

		function toggleText() {
			if ($element.text() === translation) {
				$element.text(originalText);
			} else {
				$element.text(translation);
			}
		}

		$element.text(translation);

		setInterval(toggleText, 3000);
	});

	const typewriter = document.querySelector(".typewriter");
	typewriter.addEventListener("animationiteration", () => {
		typewriter.style.animation = "none";
		setTimeout(() => {
			typewriter.style.animation =
				"typing 2s steps(30) forwards, blink-caret 0.5s step-end 3s infinite";
		}, 500);
	});

	function reveal() {
		var reveals = document.querySelectorAll(".reveal");

		for (var i = 0; i < reveals.length; i++) {
			var windowHeight = window.innerHeight;
			var elementTop = reveals[i].getBoundingClientRect().top;
			var elementVisible = 150;

			if (elementTop < windowHeight - elementVisible) {
				reveals[i].classList.add("active");
			} else {
				reveals[i].classList.remove("active");
			}
		}
	}

	window.addEventListener("scroll", reveal);

	const stackGif = document.getElementById("stack-gif");

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					stackGif.src = "assets/images/stacks.gif"; // Start the GIF animation
				}
			});
		},
		{ threshold: 0.05 }
	); // Adjust the threshold as needed

	observer.observe(stackGif);
});
