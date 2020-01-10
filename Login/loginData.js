

//login validate
$("#loginData").click(function (e) {
e. preventDefault();

	var email = $("#t1").val().trim();
	var password = $("#t2").val().trim();
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	
	if (email == "") {
		$("#t1").focus();
		$("#t1").css("border-color","red");
		$("#eerror").html("please fill email");
		return false;
	}
	
	if(!filter.test(email))
	
	{
		$("#t1").focus();
		$("#t1").css("border-color","red");
		$("#eerror").html("please provide valid email id");
		return false;
	}
	
	
	if (password == "") {
		$("#t2").focus();
		$("#t2").css("border-color","red");
		$("#perror").html("please fill password");
		return false;
	}
	
	else{
	
	$.ajax({
	
			url:"login.php",
			method: 'POST',
			
			data:
			{
			postemail:email, postpassword:password
			},
			success:function(data)
			{
			
			$("#success").html(data);
			
			}
	
	
	});
	var j = "";
	$("#t1").css("border-color","lightgrey");
	$("#eerror").text(j);
	$("#form2")[0].reset();
	}
});

//remove spann error's
function removeError()
{
	// var ferror = $("#ferror").val();
	// var lerror = $("#lerror").val();
	// var merror = $("#merror").val();
	// var eerror = $("#eerror").val();
	// var perror = $("#perror").val();
	// var cperror = $("#cperror").val();
	
	i = "";
	$("input").keypress(function(){
	
	
	$("#eerror").text(i);
	$("#perror").text(i);
	$("#t1").css("border-color","lightgrey");
	});
	
}
removeError();

function removeMessage()
{
	z = "";
	$("input").keypress(function(){
	
	  $("#success").text(z);
	});
}
removeMessage();