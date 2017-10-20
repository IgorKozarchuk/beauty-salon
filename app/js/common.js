$(function() {

	$('#my-menu').mmenu({
		extensions: ['theme-black', 'effect-menu-slide', 'pagedim-black'],
		navbar: {
			title: '<img src="img/logo.svg" alt="Beauty Salon LOreal">'
		},
		offCanvas: {
			position: 'right'
		}
	});

	// http://mmenu.frebsite.nl/documentation/core/api.html
	var api = $('#my-menu').data('mmenu');
	api.bind('open:finish', function() {
		$('.hamburger').addClass('is-active');
	});
	api.bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');
	});

	// initialize carousel before runnig carouselService() to avoid unequal heights of -services-content and -services-image
	$('.carousel-services').on('initialized.owl.carousel', function() {
		setTimeout(function() {
			carouselService();
		}, 100);
	})

	// carousel function
	$('.carousel-services').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		smartSpeed: 700,
		navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1100: {
				items: 3
			}
		}
	});

	// equal heights of .carousel-services-content items
	$('.carousel-services-content').equalHeights();

	// fix for old versions of equalHeights()
	// window.onresize = function() {
	// 	$('.carousel-services-content').equalHeights();
	// };

	// makes carousel-services-content and carousel-services-image the same size
	function carouselService() {
		$('.carousel-services-item').each(function() {
			var item = $(this);
			var	itemHeight = item.find('.carousel-services-content').outerHeight();
			item.find('.carousel-services-image').css('min-height', itemHeight);
		});
	}
	carouselService();

	// change last word in .h3
	$('.carousel-servies-composition .h3').each(function() {
		$(this).html($(this).html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	});
	// change 1st word in .h2
	$('section .h2').each(function() {
		$(this).html($(this).html().replace(/^(\S+)/, '<span>$1</span>'));
	});
});
