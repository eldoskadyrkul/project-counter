$(document).ready(function() {
      $('.modal-toggle').on('click', function (e) {
        e.preventDefault();
        $('.modal').toggleClass('open');
      });
    });