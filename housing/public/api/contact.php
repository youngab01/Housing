<?php
// Set headers for JSON response and CORS
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode([
        'success' => false,
        'message' => 'Invalid request method. Only POST is allowed.'
    ]);
    exit;
}

// Get and sanitize input data
$name = isset($_POST['name']) ? htmlspecialchars(trim($_POST['name'])) : '';
$email = isset($_POST['gmail']) ? filter_var(trim($_POST['gmail']), FILTER_SANITIZE_EMAIL) : '';
$subject = isset($_POST['subject']) ? htmlspecialchars(trim($_POST['subject'])) : '';
$message = isset($_POST['message']) ? htmlspecialchars(trim($_POST['message'])) : '';

// Validation
$errors = [];

if (empty($name)) {
    $errors[] = "Name is required";
}

if (empty($email)) {
    $errors[] = "Email is required";
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = "Please enter a valid email address";
}

if (empty($subject)) {
    $errors[] = "Subject is required";
}

if (empty($message)) {
    $errors[] = "Message is required";
}

// Return errors if validation fails
if (!empty($errors)) {
    echo json_encode([
        'success' => false,
        'message' => implode(", ", $errors)
    ]);
    exit;
}

// Database configuration - UPDATE THESE WITH YOUR ACTUAL CREDENTIALS
$db_host = 'localhost';
$db_username = 'root';      // Change to your database username
$db_password = '';          // Change to your database password
$db_name = 'phpfeedback';     // Change to your database name

// Connect to database
$con = new mysqli($db_host, $db_username, $db_password, $db_name);

// Check connection
if ($con->connect_error) {
    echo json_encode([
        'success' => false,
        'message' => 'Database connection failed. Please try again later.'
    ]);
    exit;
}

// Use prepared statement to prevent SQL injection
$stmt = $con->prepare("INSERT INTO `feedback` (fname, email, fsubject, fmessage) VALUES (?, ?, ?, ?)");

if (!$stmt) {
    echo json_encode([
        'success' => false,
        'message' => 'Database error: ' . $con->error
    ]);
    exit;
}

$stmt->bind_param("ssss", $name, $email, $subject, $message);

// Execute and return result
if ($stmt->execute()) {
    echo json_encode([
        'success' => true,
        'message' => "Your response was successfully submitted, " . $name . ". Thank you!"
    ]);
} else {
    echo json_encode([
        'success' => false,
        'message' => 'Failed to save your message. Please try again later.'
    ]);
}

// Close connections
$stmt->close();
$con->close();
?>