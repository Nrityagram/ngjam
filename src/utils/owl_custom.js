$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    center: true,
    dots: false,
    navText: [
      '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
      '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
    ],
    responsive: {
      0: {
        items: 1,
        stagePadding: 0,
      },
      800: {
        items: 1,
        stagePadding: 150,
      },
      1200: {
        items: 1,
        stagePadding: 200,
      },
      1400: {
        items: 1,
        stagePadding: 250,
      },
      1700: {
        items: 1,
        stagePadding: 300,
      },
    },
  });
});
