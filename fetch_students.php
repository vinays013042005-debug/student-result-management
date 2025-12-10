<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); 

// 1. Database Configuration (Use the same settings as save_student.php)
$servername = "localhost";
$username = "root"; 
$password = ""; 
$dbname = "student_db"; 

// 2. Create database connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    // Return an error message if connection fails
    echo json_encode(['success' => false, 'message' => 'Database connection failed: ' . $conn->connect_error]);
    exit;
}

// 3. SQL Query to retrieve all students
$sql = "SELECT roll_number, name, course, branch, gender FROM students ORDER BY roll_number ASC";
$result = $conn->query($sql);

$students = [];

if ($result->num_rows > 0) {
    // Fetch all rows and store them in the $students array
    while($row = $result->fetch_assoc()) {
        $students[] = $row;
    }
    echo json_encode(['success' => true, 'data' => $students]);
} else {
    // Return an empty array if no students are found
    echo json_encode(['success' => true, 'data' => []]);
}

$conn->close();
?>
