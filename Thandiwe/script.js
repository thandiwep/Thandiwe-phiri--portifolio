// Smooth scrolling effect
$(document).ready(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top)
          }, 1000);
          return false;
        }
      }
    });
  });
  
  // Form validation
  $(document).ready(function() {
    $('#contact form').submit(function(event) {
      event.preventDefault();
      var name = $('#contact input[name="name"]').val();
      var email = $('#contact input[name="email"]').val();
      var message = $('#contact textarea[name="message"]').val();
      if (name == '' || email == '' || message == '') {
        alert('Please fill in all fields.');
      } else {
        // Send the form data to the server
        $.ajax({
          type: 'POST',
          url: '/contact',
          data: {
            name: name,
            email: email,
            message: message
          },
          success: function(data) {
            alert('Thank you for contacting me!');
          },
          error: function(xhr, status, error) {
            alert('Error sending form data.');
          }
        });
      }
    });
  });
  