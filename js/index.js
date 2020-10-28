document.querySelector('.time-stamp').innerText 
    = new Date().toLocaleTimeString();

document.querySelector('.fetch-html').addEventListener('click', fetchHTML);
async function fetchHTML() {
    const response = await fetch('client-data.html');
    const html = await response.text();
    document.querySelector('.html-container').innerHTML = html;
}

document.querySelector('.ajax-html').addEventListener('click', ajaxHTML);

function ajaxHTML() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.querySelector('.html-container').innerHTML = xhr.responseText;
        }
    }
    xhr.open('GET', 'client-data.html', true);
    xhr.send();
}


document.querySelector('.fetch-json').addEventListener('click', fetchJSON);
async function fetchJSON() {
    const response = await fetch('client-data.json');
    const clientData = await response.json();
    document.querySelector('.client-name').innerText = clientData.name;
    document.querySelector('.balance').innerText = clientData.balance;
}

// Promise
// function fetchHTML() {
//     fetch('client-data.html')
//         .then( response => response.text() )
//         .then( html => document.querySelector('.html-container').innerHTML = html);
// }

document.querySelector('.login-form input[type=submit]')
    .addEventListener('click', login);
    
function login(e) {
    e.preventDefault();
    fetch('login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
            name: document.querySelector('.login-form input[name=name]').value,
            password: document.querySelector('.login-form input[name=password]').value
        })
    })
    .then(_ => document.querySelector('.login-form').reset());
}
© 2020 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
