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

  fetch('/emails/'+mailbox)
  .then(response => response.json())
  .then(emails => {
      // create the html email to display each email
      displayEmails(emails);
  });



}

function displayEmails(emails) {
  const emailsContainer = document.querySelector('#emails-view');

  // Clear previous content
  emailsContainer.innerHTML = '';

  // Iterate through each email and create HTML for display
  emails.forEach(email => {
    const emailDiv = document.createElement('div');

    const senderDiv = document.createElement('div');
    senderDiv.innerHTML = `<strong>From:</strong> ${email.sender}`;
    emailDiv.appendChild(senderDiv);

    const subjectDiv = document.createElement('div');
    subjectDiv.innerHTML = `<strong>Subject:</strong> ${email.subject}`;

    emailDiv.appendChild(subjectDiv);

    const timestampDiv = document.createElement('div');
    timestampDiv.innerHTML = `<strong>Timestamp:</strong> ${email.timestamp}`;
    emailDiv.appendChild(timestampDiv);

    emailDiv.appendChild(document.createElement('hr'))
    // Add click event to view email details
    emailDiv.addEventListener('click', () => loadEmailsDetails(email.id));

    // Append the email HTML to the container
    emailsContainer.appendChild(emailDiv);
  });
}

function loadEmailsDetails(email_id)
{
    const emailsContainer = document.querySelector('#emails-view');
    emailsContainer.innerHTML = '';
    // add email more style
    fetch('emails/'+email_id)
        .then(response=>response.json())
        .then(email=>{
          // create the email block
          const sender = document.createElement('div')
          sender.innerHTML = email.sender
          emailsContainer.appendChild(sender)

          const subject = document.createElement('div')
          subject.innerHTML = email.subject
          emailsContainer.appendChild(subject)

          const body = document.createElement('div')
          body.innerHTML = email.body
          emailsContainer.appendChild(body)

        })


}

function send_email(){

  // get the content
  let recipients = document.querySelector('#compose-recipients').value;
  let subject = document.querySelector('#compose-subject').value;
  let body = document.querySelector('#compose-body').value;

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
  // redirect to send box
  load_mailbox('sent');
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
