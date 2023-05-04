var btn = document.getElementById('sendbtn');
btn.addEventListener('click', function(e) {
          e.preventDefault()
          var name = document.getElementById('name').value;
          var phone = document.getElementById('phone').value;
          var email = document.getElementById('email').value;
          var subject = document.getElementById('subject').value;
          var message = document.getElementById('message').value;

          var body = 'Name: ' +name+  '<br/> Phone: ' +phone+ '<br/> Email: ' +email+ '<br/> Subject: ' +subject+ '<br/> Message: ' +message;

          email.send({
                    Host : "smtp.gmail.com",
                    Username : "omotosolilhenxy@gmail.com",
                    Password : "uhtwhaxirvsdbztm",
                    To : 'omotosolilhenxy@gmail.com',
                    From : email,
                    Subject : subject,
                    Body : body
                }).then(
                  message => alert(message)
                );

});



