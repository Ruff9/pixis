document.addEventListener("DOMContentLoaded", function(event) {
  contactModal();
  $('.header-video').coverVid(1920, 1080);
});

var contactModal = function() {
  var modal = $('#contact-modal');
  var buttons = $('.js-contact-modal-trigger');

  buttons.each(function(i) {
    $(this).click(function() {
      modal.css('display', 'flex');
    })
  })

  $("#close-button").click(function() {
    modal.css('display', 'none');
  })

  $(window).click(function(event) {
    if (event.target == modal[0]) {
      modal.css('display', 'none');
    }
  })
}