document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = function() {
        const message = document.querySelector('#message').value;
        if (message.trim().length === 0) {
            alert('Please enter a message.');
            return false;
        }
    };

    const prediction = document.querySelector('#prediction').textContent;
    if (prediction.trim().length !== 0) {
        document.querySelector('.result').style.display = 'block';
    }
});
