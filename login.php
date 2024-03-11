<?php
// Database connection details
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$database = "your_database";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get user input from the form
$username = $_POST['username'];
$password = $_POST['password'];

// Fetch user data from the database
$sql = "SELECT * FROM users WHERE username = '$username' OR email = '$username'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $storedPassword = $row['password'];

    // Verify the password
    if (password_verify($password, $storedPassword)) {
        echo "Login successful!";
        // Start a session or perform additional actions upon successful login
    } else {
        echo "Invalid username or password.";
    }
} else {
    echo "Invalid username or password.";
}

$conn->close();
?>
