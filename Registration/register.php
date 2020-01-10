
<?php
	$conn = new mysqli("localhost","root","","register");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$fnameErr = $lnameErr = $mobileErr = $emailErr = $genderErr = $dobErr = $passwordErr = "";
$fname = $lname = $mobile = $email = $gender = $dob = $password = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
 if (empty($_POST["postfname"])) {
    $fnameErr = "First Name is required";
  } else {
    $fname = test_input($_POST["postfname"]);
  }
  
  if (empty($_POST["postlname"])) {
    $lnameErr = "Last Name is required";
  } else {
    $lname = test_input($_POST["postlname"]);
  }
  
  if (empty($_POST["postemail"])) {
    $emailErr = "email is required";
  } else {
    $email = test_input($_POST["postemail"]);
  }
  
  if (empty($_POST["postgender"])) {
    $genderErr = "Gender is required";
  } else {
    $gender = test_input($_POST["postgender"]);
  }
  
  if (empty($_POST["postpassword"])) {
    $passwordErr = "Password is required";
  } else {
    $password = test_input($_POST["postpassword"]);
  }
  
   if (empty($_POST["postmobile"])) {
    $mobileErr = "Password is required";
  } else {
    $mobile = test_input($_POST["postmobile"]);
  }
  
  if (empty($_POST["postdob"])) {
    $dobErr = "Password is required";
  } else {
    $dob = test_input($_POST["postdob"]);
  }
  
  
}

function test_input($data)

{
	$data = trim($data);
	$data = stripslashes($data);
	$data = htmlspecialchars($data);
	return $data;
	
}

$passHash = md5($password);

$sql = "select * from register where mobile = '$mobile'";
$result = $conn->query($sql);

if ($result->num_rows >=1) {
	
	echo "<label style = 'color:red' >mobile number already, please login</label>";
}

else
{
$sql = "select * from register where email = '$email'";
$result = $conn->query($sql);

if ($result->num_rows >=1) {
	
	echo "<label style = 'color:red' >email is already, please login</label>";
}
else{

$stmt = $conn->prepare("insert into  register(firstname, lastname, email, mobile, gender, dob, password) values(?,?,?,?,?,?,?)");
$stmt->bind_param("sssssss", $fname, $lname, $email,$mobile, $gender, $dob, $passHash);

$stmt->execute();

if($stmt==true)
{
	
	echo "Registered successfully";
}
else{
	echo "Error : ".mysqli_connect_error($conn);
}

}
}
	?>