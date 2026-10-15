const message = new URLSearchParams(window.location.search);

document.querySelector("#thankyou").innerHTML = `
<p>Thank you ${message.get('fullname')}, for sending us your ${message.get('subject')}.</p>
<h3>Your ${message.get('subject')}...</h3>
<div class="form-message">
<p>${message.get('message')}</p>
</div>
`;