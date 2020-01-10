<?php
	
	$conn = new mysqli("localhost","root","","register");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$emailErr = "";
$email = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	
	if (empty($_POST["postemail"])) {
    $emailErr = "First Name is required";
	} else {
    $email = test_input($_POST["postemail"]);
  }

}

function test_input($data)

{
	$data = trim($data);
	$data = stripslashes($data);
	$data = htmlspecialchars($data);
	return $data;
	
}

$sql = "select * from register where email = '$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
	
	while($row = $result->fetch_assoc()) {
			echo "Match found. Username & Password will be email shortly";
	}
}

else{
	
	echo "No user's found. please register";
}
	
	
	
	?>