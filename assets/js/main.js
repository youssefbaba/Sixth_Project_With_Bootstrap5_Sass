$('.owl-carousel-one').owlCarousel({
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: false,
  loop: true,
  center: true,
  margin: 28,
  dots: true,
  navText: [
    "<i class='fa-solid fa-arrow-left'></i>",
    "<i class='fa-solid fa-arrow-right'></i>",
  ],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    576: {
      items: 2,
      nav: false,
    },
    992: {
      items: 3,
      nav: true,
      margin: 24,
    },
  }
})
$('.owl-carousel-two').owlCarousel({
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: false,
  loop: true,
  center: true,
  margin: 16,
  dots: true,
  navText: [
    "<i class='fa-solid fa-arrow-left'></i>",
    "<i class='fa-solid fa-arrow-right'></i>",
  ],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    576: {
      items: 2,
      nav: false,
    },
    992: {
      items: 2,
      nav: true,
      center: false,
      margin: 27,
      dots: false,
    },
  }
})


var playButtonOne = document.getElementById("play_button_one");
var playButtonTwo = document.getElementById("play_button_two");
// Event listener for the play/pause button
playButtonOne.addEventListener("click", function () {
  if (video_one.paused == true) {
    // Play the video
    video_one.play();

    // Update the button text to 'Pause'
    playButtonOne.innerHTML = "<i class='fa-solid fa-pause text-embracing'></i>";
  } else {
    // Pause the video
    video_one.pause();

    // Update the button text to 'Play'
    playButtonOne.innerHTML = "<i class='fa-solid fa-play text-embracing'></i>";
  }
});
// Event listener for the play/pause button
playButtonTwo.addEventListener("click", function () {
  if (video_two.paused == true) {
    // Play the video
    video_two.play();

    // Update the button text to 'Pause'
    playButtonTwo.innerHTML = "<i class='fa-solid fa-pause text-embracing'></i>";
  } else {
    // Pause the video
    video_two.pause();

    // Update the button text to 'Play'
    playButtonTwo.innerHTML = "<i class='fa-solid fa-play text-embracing'></i>";
  }
});