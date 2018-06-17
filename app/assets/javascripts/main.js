document.addEventListener("DOMContentLoaded", function(event) {
  contactModal();
  headerVideo();
});

var headerVideo = function() {
  var video = document.querySelector('.header-video');
  coverVid(video, 1920, 1080);
}

var contactModal = function() {
  var modal = document.getElementById('contact-modal');
  var buttons = document.getElementsByClassName('js-contact-modal-trigger');
  var span = document.getElementsByClassName("close")[0];

  for(var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
      modal.style.display = "flex";
    }
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
