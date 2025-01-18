; (function () {

	'use strict';

	function calculateDays() {
		const startDateElement = document.getElementById('daysCount');
		const startDate = new Date(startDateElement.getAttribute('data-start-date'));
		const endDate = new Date(startDateElement.getAttribute('data-end-date'));
		const currentDate = new Date();
		const effectiveDate = currentDate > endDate ? endDate : currentDate;
		const timeDifference = effectiveDate - startDate;
		const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
		startDateElement.innerText = daysDifference;
	}

	var mobileMenuOutsideClick = function () {

		$(document).click(function (e) {
			var container = $("#wd-offcanvas, .js-wd-nav-toggle");
			if (!container.is(e.target) && container.has(e.target).length === 0) {

				if ($('body').hasClass('offcanvas')) {

					$('body').removeClass('offcanvas');
					$('.js-wd-nav-toggle').removeClass('active');
				}
			}
		});

	};


	var offcanvasMenu = function () {

		$('#page').prepend('<div id="wd-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-wd-nav-toggle wd-nav-toggle wd-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#wd-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#wd-offcanvas').append(clone2);

		$('#wd-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#wd-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function () {
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');
		}).mouseleave(function () {

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');
		});


		$(window).resize(function () {

			if ($('body').hasClass('offcanvas')) {

				$('body').removeClass('offcanvas');
				$('.js-wd-nav-toggle').removeClass('active');

			}
		});
	};


	var burgerMenu = function () {

		$('body').on('click', '.js-wd-nav-toggle', function (event) {
			var $this = $(this);


			if ($('body').hasClass('overflow offcanvas')) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};



	var contentWayPoint = function () {
		var i = 0;
		$('.animate-box').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .animate-box.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						}, k * 200, 'easeInOutExpo');
					});

				}, 100);

			}

		}, { offset: '85%' });
	};


	var dropdown = function () {

		$('.has-dropdown').mouseenter(function () {

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function () {
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var testimonialCarousel = function () {
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			responsiveClass: true,
			nav: false,
			dots: true,
			smartSpeed: 800,
			autoHeight: true,
		});
	};


	var goToTop = function () {

		$('.js-gotop').on('click', function (event) {

			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');

			return false;
		});

		$(window).scroll(function () {

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});

	};


	// Loading page
	var loaderPage = function () {
		$(".wd-loader").fadeOut("slow");
	};

	var counter = function () {
		$('.js-counter').countTo({
			formatter: function (value, options) {
				return value.toFixed(options.decimals);
			},
		});
	};

	var counterWayPoint = function () {
		if ($('#wd-counter').length > 0) {
			$('#wd-counter').waypoint(function (direction) {

				if (direction === 'down' && !$(this.element).hasClass('animated')) {
					setTimeout(counter, 400);
					$(this.element).addClass('animated');
				}
			}, { offset: '90%' });
		}
	};

	// Parallax
	var parallax = function () {
		$(window).stellar();
	};

	function createConfetti() {
		const confettiContainer = document.createElement('div');
		confettiContainer.classList.add('confetti-container');
		document.body.appendChild(confettiContainer);

		const colors = ['#f14e95', '#ff6b6b', '#f0ad4e', '#5bc0de', '#5cb85c', 'darkred'];
		const shapes = ['circle', 'square', 'triangle', 'rectangle', 'double-happiness'];
		const rectangleSizes = ['size1', 'size2', 'size3', 'size4'];
		for (let i = 0; i < 15; i++) {
			const confetti = document.createElement('div');
			confetti.classList.add('confetti');
			confetti.style.left = `${Math.random() * 100}vw`;
			confetti.style.animationDelay = `${Math.random() * 20}s`;
			confetti.style.animationDuration = `${5 + Math.random() * 5}s`;
			confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
			confetti.style.color = colors[Math.floor(Math.random() * colors.length)];
			const shape = shapes[Math.floor(Math.random() * shapes.length)];
			confetti.classList.add(shape);
			if (shape === 'rectangle') {
				confetti.classList.add(rectangleSizes[Math.floor(Math.random() * rectangleSizes.length)]);
			}
			confetti.style.setProperty('--random-x', `${Math.random() * 20 - 10}`);
			confettiContainer.appendChild(confetti);
		}
	}

	$(function () {
		mobileMenuOutsideClick();
		parallax();
		// offcanvasMenu();
		// burgerMenu();
		contentWayPoint();
		// dropdown();
		testimonialCarousel();
		goToTop();
		loaderPage();
		counter();
		counterWayPoint();
		// Force scroll to top after reload
		$(window).on('beforeunload', function () {
			$(window).scrollTop(0);
		});
		calculateDays();
	});

	document.addEventListener('DOMContentLoaded', function () {
		const playPauseBtn = document.getElementById('playPauseBtn');
		const backgroundMusic = document.getElementById('backgroundMusic');
		const notification = document.getElementById('notification');
		const overlayCover = document.getElementById('overlay-cover');
		const overlayTop = document.querySelector('.overlay-top');
		const overlayBottom = document.querySelector('.overlay-bottom');
		const overlayContent = document.querySelector('.overlay-content');
		let isPlaying = false;

		const handlePlayPause = () => {
			if (isPlaying) {
				backgroundMusic.pause();
				playPauseBtn.innerHTML = '<i class="icon-play"></i>';
				playPauseBtn.classList.remove('playing');
			} else {
				backgroundMusic.play();
				playPauseBtn.innerHTML = '<i class="icon-pause"></i>';
				playPauseBtn.classList.add('playing');
			}
			isPlaying = !isPlaying;
		};

		const handleOverlayClick = () => {
			overlayTop.classList.add('slide-up');
			overlayBottom.classList.add('slide-down');
			setTimeout(() => {
				overlayCover.style.display = 'none';
				document.body.style.overflow = 'auto';
				// Show notification for the first 5 seconds after overlay is disabled
				notification.classList.add('show');
				setTimeout(() => {
					notification.classList.remove('show');
				}, 5000);
				// Create confetti after overlay is clicked
				createConfetti();
			}, 2000); // Match the duration of the CSS animation
		};

		const initPlayPauseButton = () => {
			playPauseBtn.addEventListener('click', handlePlayPause);

			// Play music after first user scroll
			window.addEventListener('click', function () {
				if (!isPlaying) {
					backgroundMusic.play();
					playPauseBtn.innerHTML = '<i class="icon-pause"></i>';
					playPauseBtn.classList.add('playing');
					isPlaying = true;
				}
			}, { once: true });
		};

		const initOverlay = () => {
			// Block scrolling while overlay is active
			document.body.style.overflow = 'hidden';

			// Remove overlay and unblock scrolling after user clicks anywhere on the overlay
			overlayCover.addEventListener('click', handleOverlayClick);
		};

		initPlayPauseButton();
		initOverlay();
	});

}());