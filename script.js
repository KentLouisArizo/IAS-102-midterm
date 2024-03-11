function registerUser(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;

    // Perform client-side validation
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Send AJAX request to server for registration
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'register.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            alert(xhr.responseText);
            // Redirect or perform additional actions upon successful registration
        }
    };
    xhr.send(`username=${encodeURIComponent(username)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`);
}

function loginUser(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Send AJAX request to server for login
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'login.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            alert(xhr.responseText);
            // Redirect or perform additional actions upon successful login
        }
    };
    xhr.send(`username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`);
}

function resetPassword(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;

    // Send AJAX request to server for password reset
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'resetPassword.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            alert(xhr.responseText);
            // Redirect or perform additional actions upon successful password reset request
        }
    };
    xhr.send(`email=${encodeURIComponent(email)}`);
}
