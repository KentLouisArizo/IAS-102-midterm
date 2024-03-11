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
$email = $_POST['email'];

// Check if the email exists in the database
$sql = "SELECT * FROM users WHERE email = '$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Generate a unique token
    $token = bin2hex(random_bytes(16));

    // Store the token in the database or send it to the user's email
    // Replace this with your implementation of sending the password reset email

    echo "A password reset link has been sent to your email address.";
} else {
    echo "Email not found in our records.";
}

$conn->close();
?>
