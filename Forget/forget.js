
$("#loginData").click(function (e) {
e. preventDefault();

var email = $("#t1").val().trim();
var filter = /^([a-zA-Z0-9_\,\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

 if (email == "") {
		$("#t1").focus();
		$("#t1").css("border-color","red");
		$("#eerror").html("please fill Email Id");
		return false;
	}
        
else if(!filter.test(email))
	
	{
		$("#t1").focus();
		$("#t1").css("border-color","red");
		$("#eerror").html("please provide valid email id");
		return false;
	}
	
	
	
	else{
	
	$.ajax({
	
			url:"forgetPage.php",
			method: 'POST',
			
			data:
			{
				postemail:email
			},
			success:function(data)
			{
			$("#success").css("color","green");
			$("#success").css("display","block");
			$("#success").html(data);
			
			}
			
	});
        v = "";
	$("#t1").css("border-color","lightgrey");
        $("#eerror").html(v);
	$("#form3")[0].reset();	
	}
	
});


function removeError()
{
	i = "";
	$("input").keypress(function(){
	$("#eerror").text(i);
	$("input").css("border","1px solid lightgrey");
	
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