<!DOCTYPE html>
<html lang="en">
<head>
	<title>Forget Password</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
  
  <link rel="stylesheet" type="text/css" href="../style.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>

<style>
	
.success{
	display:none;
}

</style>
</head>

<body>
	<div class = "container">
	<br>
		<label class = "h1"  ><u>Forget</u> <u>Password</u></label>
	<br><br>
	
	<div class = "register_border">
	
	<form name = "form3" id ="form3" method = "post">
		<label class = "l1">Enter Email</label><span class = "star">*</span> <span class = "error" id = "eerror" ></span><br>
		
	<input type = "text" placeholder = " Email" class = "t1" id = "t1" ><br><br>
	
	<div class = "buttonSection2">
	<button type = "submit" value = "Submit" class = "b1" id = "loginData">Get Details</button>&nbsp;
	<button type = "reset" value = "Reset" class = "b1" id = "resetData">Clear</button><br><br>
	<span class = "success" id = "success" style="display:none;" ></span>
	</div><br>
	
	
	</form>
	
	</div>

	
	<script src = "forget.js"  ></script>
	</body>
	</html>