const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const message_one = document.querySelector('#message-1');
const message_two = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value;

    message_one.textContent = 'Fetching weather forecast...';
    message_two.textContent = '';
    
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if(data.error) {
                message_one.textContent = data.error;
            } else {
                message_one.textContent = data.forecast;
                message_two.textContent = data.location;
            }
        });
    });
})
