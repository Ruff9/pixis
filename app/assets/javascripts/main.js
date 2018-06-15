document.addEventListener("DOMContentLoaded", function(event) {
  contactModal();
  headerVideo();
});

var headerVideo = function() {
  var video = document.querySelector('.header-video');
  coverVid(video, 1920, 1080);

  // if(isMobile()) {
  //   video.play();
  // }
}

var contactModal = function() {
  var modal = document.getElementById('contact-modal');
  var btn = document.getElementById('contact-modal-trigger');
  var span = document.getElementsByClassName("close")[0];

  btn.onclick = function() {
    modal.style.display = "flex";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

// function isMobile() {
//   return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
// };