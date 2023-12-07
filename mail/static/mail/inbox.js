document.addEventListener('DOMContentLoaded', function() {

  // Use buttons to toggle between views
  document.querySelector('#inbox').addEventListener('click', () => load_mailbox('inbox'));
  document.querySelector('#sent').addEventListener('click', () => load_mailbox('sent'));
  document.querySelector('#archived').addEventListener('click', () => load_mailbox('archive'));
  document.querySelector('#compose').addEventListener('click', compose_email);
  document.querySelector('input[type="submit"]').addEventListener('click',send_email)
  // By default, load the inbox
  load_mailbox('inbox');
});

function compose_email() {

  // Show compose view and hide other views
  document.querySelector('#emails-view').style.display = 'none';
  document.querySelector('#compose-view').style.display = 'block';

  // Clear out composition fields
  document.querySelector('#compose-recipients').value = '';
  document.querySelector('#compose-subject').value = '';
  document.querySelector('#compose-body').value = '';

}

function load_mailbox(mailbox) {
  
  // Show the mailbox and hide other views
  document.querySelector('#emails-view').style.display = 'block';
  document.querySelector('#compose-view').style.display = 'none';

  // Show the mailbox name
  document.querySelector('#emails-view').innerHTML = `<h3>${mailbox.charAt(0).toUpperCase() + mailbox.slice(1)}</h3>`;

  // send / inbox /  archive

}

function send_email(){

  // get the content
  recipients = document.querySelector('#compose-recipients').value
  subject = document.querySelector('#compose-subject').value
  body = document.querySelector('#compose-body').value

  // send the post requests
  fetch('/emails', {
    method: 'POST',
    body: JSON.stringify({
        recipients: recipients,
        subject: subject,
        body: body
    })
  })
  // return message
  .then(response => response.json())
  .then(result => {
      console.log(result);
  });
}




/*
function load_inbox(){
  // load all email send requests
  fetch('/emails/inbox')
  .then(response => response.json())
  .then(emails => {
      box = document.querySelector('#email-form');
      emails.forEach(email)

      box.appendChild()


  });

  // render the HTML page append li

}
*/
