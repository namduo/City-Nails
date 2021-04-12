export default function formSubmission(){
  $('#contact-form').submit(function(e) {

  e.preventDefault();
  
  // Form Validate
  if (
    $('#name-field').val() === '' || 
    $('#email-field').val() === '' || 
    $('#message-field').val() === '' || 
    $('#phone-field').val() === '' ){  
        alert('Please Fill All Fields')
    } else {
    
    const data = {
      service_id: 'citynails_gmail_19',
      template_id: 'template__2',
      user_id: 'user_eE3zF4XZczCQxqFROwutS',
      template_params: {
        email: $('#email-field').val(),
        from_name: $('#name-field').val(),
        phone: $('#email-field').val(),
        message_html: $('#message-field').val()
      }
    }
    
    $.ajax({
      type: 'post',
      data: JSON.stringify(data),
      contentType: 'application/json',
      url: 'https://api.emailjs.com/api/v1.0/email/send',
      success: function() {
        // Clear the form
        $('#name-field').val('');
        $('#email-field').val('');
        $('#message-field').val('');
        $('#phone-field').val('');

        // Success Message
        $('#form-message').append('Message sent! We\'ll get back to you as soon as we can.');
      }  
      });
    }
  });
}