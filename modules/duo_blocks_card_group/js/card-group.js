/**
 * @file
 * Initialize Slick sliders.
 *
 */
(function ($, Drupal) {

  Drupal.behaviors.initSlickSlides = {
    attach: function (context, settings) {

      if ($().slick) {
        $('.slick', context).slick({

          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 3,
          slidesToScroll: 3,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
              }
            }
          ]

        });
      }

    }
  };

})(jQuery, Drupal);
