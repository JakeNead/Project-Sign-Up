let check = function () {
    if (document.getElementById('password').value === 
        document.getElementById('password-confirmation').value) {
        document.getElementById('error-message').style.color = 'green';
        document.getElementById('error-message').innerHTML = 'matching'
    } else {
        document.getElementById('error-message').style.color = 'red';
        document.getElementById('error-message').innerHTML = 'not matching'
    }
}
