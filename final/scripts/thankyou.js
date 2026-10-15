// console.log('hello')
// const getString = window.location.search;
// console.log(getString);

const client = new URLSearchParams(window.location.search);

document.querySelector("#thankyou").innerHTML = `
<p>Thank you ${client.get('first')} ${client.get('last')} for join in us. We are grateful for having you a $</p>
`