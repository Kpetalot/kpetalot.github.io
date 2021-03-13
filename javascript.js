$().ready( () => {
	document.querySelector('#main').classList.add('visible');

	// When clicking on a navbar link it goes to the corresponding part of the website
	// Select all links with hashes
	$('a[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
		// On-page links - Links that navigate to the same page and do not lead to other page
	    if (
		location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
		&&
		location.hostname == this.hostname
		) {
			// Figure out element to scroll to
			var target = $(this.hash); // this.hash reads the href attr of this and gets the 
			// part of the URL beginning with #

			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			// Does a scroll target exist?
			if (target.length) {
				// Only prevent default if animation is actually gonna happen
				event.preventDefault();
				$('html, body').animate({
				scrollTop: target.offset().top
				}, 1000, function() {
				// Callback after animation
				// Must change focus!
				var $target = $(target);
				$target.focus();
				if ($target.is(":focus")) { // Checking if the target was focused
				return false;
				} else {
				$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
				// tabindex indicates that its element can be focused
				$target.focus(); // Set focus again
				};
				});
			}
			}
	  });

	// When the user scrolls down 450px from the top of the document, show the button
	window.addEventListener('scroll', scrollFunction);
	
	function scrollFunction() {
	    if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450)
	        document.getElementById("arrow-to-top").classList.add('active');
	    else 
	        document.getElementById("arrow-to-top").classList.remove('active');
	}


});

// When the user clicks on the arrow button, scroll to the top of the document
function topFunction() {
	event.preventDefault();
	$('html, body').animate({
  		scrollTop: 0
	}, 900);
}

$(window).scroll(function() {
    $(".arrowDown").css("opacity", 1 - $(window).scrollTop() / 250);
});