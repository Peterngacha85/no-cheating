$('#loginForm').submit(function(event) {
    event.preventDefault();
    
    // Get username and password values
    var username = $('#username').val();
    var password = $('#password').val();
    
    // Show success modal
$('#successModal').css('display', 'block');

// Close modal when close button (x) is clicked
$('.modal .close').click(function() {
    $('#successModal').css('display', 'none');
});

// Close modal when clicking outside the modal content
$(document).mouseup(function(e) {
    var modalContent = $(".modal-content");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
        $('#successModal').css('display', 'none');
    }
});

    // Simulate login validation (replace with actual validation logic)
    var isValid = validateLogin(username, password);
  
    if (isValid) {
      // Show success modal
      $('#successModal').css('display', 'block');
      // Change button text
      $('#loginButton').text('No cheating');
      // Remove invalid class from the button
      $('#loginButton').removeClass('invalid');
    } else {
      // Add invalid class to the button
      $('#loginButton').addClass('invalid');
      // Shake button if login is invalid
      $('#loginButton').addClass('shake-animation');
      // Remove shake class after animation
      setTimeout(function() {
        $('#loginButton').removeClass('shake-animation');
      }, 1000);
    }
});

function validateLogin(username, password) {
    // Replace this with your actual validation logic
    return username === 'peter' && password === '1234';
}
