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
    emailDiv.className='email'

    const senderDiv = document.createElement('div');
    senderDiv.innerHTML = `<strong>From:</strong> ${email.sender}`;
    emailDiv.appendChild(senderDiv);

    const subjectDiv = document.createElement('div');
    subjectDiv.innerHTML = `<strong>Subject:</strong> ${email.subject}`;

    emailDiv.appendChild(subjectDiv);

    const timestampDiv = document.createElement('div');
    timestampDiv.innerHTML = `<strong>Timestamp:</strong> ${email.timestamp}`;
    emailDiv.appendChild(timestampDiv);

    // Add click event to view email details
    emailDiv.addEventListener('click', () => loadEmailsDetails(email.id));
    if (email.read){
        emailDiv.classList.add('read')
    }
    else {
        emailDiv.classList.add('unread')
    }

    // Append the email HTML to the container
    emailsContainer.appendChild(emailDiv);
    emailsContainer.appendChild(document.createElement('hr'))
  });
}

function loadEmailsDetails(email_id)
{
    // load single email and have detailed information
    const emailsContainer = document.querySelector('#emails-view');
    emailsContainer.innerHTML = '';

    // mark the email is readable
    fetch('emails/'+email_id,{
        method:'put',
        body:JSON.stringify({
            read:true
        })
    });


    // add email more style
    fetch('emails/' + email_id)
      .then(response => response.json())
      .then(email => {
        // create the email block
        const preBlock = document.createElement('div');
        preBlock.classList.add('email-block', 'bg-light','border','border-primary','border-sm','rounded'); // 添加自定义类和Bootstrap类
        emailsContainer.appendChild(preBlock);



        // Sender
        const sender = document.createElement('div');
        sender.innerHTML = email.sender;
        preBlock.appendChild(sender);

        // Subject
        const subject = document.createElement('div');
        subject.innerHTML = email.subject;
        preBlock.appendChild(subject);

        // Body
        const body = document.createElement('div');
        body.classList.add('bg-info','border','border-primary','border-sm','rounded','rounded-md')
        body.innerHTML = email.body;


        // Divider
        const divider = document.createElement('hr');
        preBlock.appendChild(divider);

        // Buttons Container
        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('buttons-container', 'bg-light'); // 添加自定义类和Bootstrap类
        preBlock.appendChild(buttonsContainer);

        // Archive Button
        const buttonArchive = document.createElement('button');
        buttonArchive.type = 'button';
        buttonArchive.textContent = 'Archive';
        buttonArchive.classList.add('btn', 'btn-primary'); // 添加Bootstrap按钮类
        buttonArchive.addEventListener('click', () => archive_email(email_id));
        buttonsContainer.appendChild(buttonArchive);

        // Reply Button
        const buttonReply = document.createElement('button');
        buttonReply.type = 'button';
        buttonReply.textContent = 'Reply';
        buttonReply.classList.add('btn', 'btn-secondary'); // 添加Bootstrap按钮类
        buttonReply.addEventListener('click', () => reply_email(email_id));
        buttonsContainer.appendChild(buttonReply);
      });



}

function archive_email(eid){
    // send put request and redirect to inbox page
    fetch('/emails/'+ eid, {
        method: 'PUT',
        body: JSON.stringify(
            {archived: true})
    });
    load_mailbox('inbox');


}

function reply_email(eid){
    console.log(eid);
    // load compose view
    compose_email();
    fetch('/email/'+eid)
        .then(response=>response.json())
        .then(email=> {
            // load
            document.querySelector('#compose-recipients').innerHTML = email.sender;
            document.querySelector('#compose-subject').innerHTML = 're:'+email.subject;
            document.querySelector('#compose-body').innerHTML = 'write in '+email.timestamp+': '
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
