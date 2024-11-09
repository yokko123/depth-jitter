window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
    // Check for click events on the navbar burger icon
    var options = {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000, // 5 seconds per slide
    };

    // Initialize all divs with the .carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    // Attach Bulma slider
    bulmaSlider.attach();

    // Optionally log or debug initialized carousels
    console.log('Carousels initialized:', carousels);

    // Handle any specific behavior for the slides-carousel
    if ($('#slides-carousel').length) {
        console.log('Slides carousel is active');
    }
});
