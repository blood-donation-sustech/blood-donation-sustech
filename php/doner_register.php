<?php
include 'db.php';

$name = $_POST['name'];
$age = $_POST['age'];
$blood_group = $_POST['blood_group'];
$contact_details = $_POST['contact_details'];

$sql = "INSERT INTO donors (name, age, blood_group, contact_details) VALUES ('$name', '$age', '$blood_group', '$contact_details')";

if ($conn->query($sql) === TRUE) {
    echo "New donor registered successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
