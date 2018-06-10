document.addEventListener("DOMContentLoaded", function(event) {
  var modal = document.getElementById('contact-modal');
  var btn = document.getElementById("contact-modal-trigger");
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
});
