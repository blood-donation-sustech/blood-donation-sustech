<?php
include 'db.php';

$name = $_POST['name'];
$age = $_POST['age'];
$contact_details = $_POST['contact_details'];
$blood_group = $_POST['blood_group'];

$sql = "INSERT INTO recipients (name, age, contact_details, blood_group) VALUES ('$name', '$age', '$contact_details', '$blood_group')";

if ($conn->query($sql) === TRUE) {
    echo "Blood request submitted successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
