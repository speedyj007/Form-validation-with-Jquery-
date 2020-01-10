
// register validate
$("#submitData").click(function(e) {

e.preventDefault();
	var fname = $("#t1").val().trim();
	var lname = $("#t2").val().trim();
	var email = $("#t4").val().trim();
	var contact_no = $("#t3").val().trim();
	var gender = $("input[name='gender']:checked").val();
	var password = $("#t5").val().trim();
	var confirm_password = $("#t6").val().trim();
	var dob = $("#datepicker-13").val();
	var captcha = $("#t10").val().trim();
	var captext = $("#cap").text();

        var key = /^[A-Za-z']{2,10}$/;
        var contactError = /[^0-9]|^0+(?!$)/g;
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
       
	var radioChecked = $('input[type="radio"]:checked');
	 // console.log(dob);
	var ferror = $("#ferror").val();
	
//        var date = $("#dateList").val();
//   var month  = $("#datepicker-13").val();
//   var year  =$("#year").val();
   
  
	c = "";
        
	if (fname == "") {
		$("#t1").focus();
                $("#t1").css("border-color","red");
                
		$("#t2").css("border-color","lightgrey");
                $("#t3").css("border-color","lightgrey");
                $("#t4").css("border-color","lightgrey");
                $("#datepicker-13").css("border-color","lightgrey");
                $("#t5").css("border-color","lightgrey");
                $("#t6").css("border-color","lightgrey");
                $("#t10").css("border-color","lightgrey");
               
               
               $("#lerror").html(c);
                $("#merror").html(c);
                 $("#eerror").html(c);
                  $("#gerror").html(c);
                   $("#derror").html(c);
                    $("#perror").html(c);
                     $("#caperror").html(c);
                      $("#cperror").html(c);
                       
                       
		$("#ferror").html("please fill First Name");
		return false;
	}
	
        else if (!fname.match(key)) {
                 
                 $("#t1").focus();
                 $("#t1").css("border-color","red");
                 
		$("#t2").css("border-color","lightgrey");
                $("#t3").css("border-color","lightgrey");
                $("#t4").css("border-color","lightgrey");
                $("#datepicker-13").css("border-color","lightgrey");
                $("#t5").css("border-color","lightgrey");
                $("#t6").css("border-color","lightgrey");
                $("#t10").css("border-color","lightgrey");
               
               
               $("#lerror").html(c);
                $("#merror").html(c);
                 $("#eerror").html(c);
                  $("#gerror").html(c);
                   $("#derror").html(c);
                    $("#perror").html(c);
                     $("#caperror").html(c);
                      $("#cperror").html(c);
                       
                       
		$("#ferror").html("Only characters of min 2 & max 10 words is allowed");
                return true;
              }
              
	else if (lname == "") {
		$("#t2").focus();
		$("#t2").css("border-color","red");
                
                $("#t1").css("border-color","lightgrey");
                $("#t3").css("border-color","lightgrey");
                $("#t4").css("border-color","lightgrey");
                $("#datepicker-13").css("border-color","lightgrey");
                $("#t5").css("border-color","lightgrey");
                $("#t6").css("border-color","lightgrey");
                $("#t10").css("border-color","lightgrey");
                
                $("#ferror").html(c);
                $("#merror").html(c);
                 $("#eerror").html(c);
                  $("#gerror").html(c);
                   $("#derror").html(c);
                    $("#perror").html(c);
                     $("#caperror").html(c);
                      $("#cperror").html(c);
                      
		$("#lerror").html("please fill Last Name");
		return false;
	}
        
        else if (!lname.match(key)) {
		$("#t2").focus();
		$("#t2").css("border-color","red");
                
                $("#t1").css("border-color","lightgrey");
                $("#t3").css("border-color","lightgrey");
                $("#t4").css("border-color","lightgrey");
                
                $("#datepicker-13").css("border-color","lightgrey");
                
                $("#t5").css("border-color","lightgrey");
                $("#t6").css("border-color","lightgrey");
                $("#t10").css("border-color","lightgrey");
                
                $("#ferror").html(c);
                $("#merror").html(c);
                 $("#eerror").html(c);
                  $("#gerror").html(c);
                   $("#derror").html(c);
                    $("#perror").html(c);
                     $("#caperror").html(c);
                      $("#cperror").html(c);
                      
		$("#lerror").html("Only characters of min 2 & max 10 words is allowed");
		return false;
	}
	
	else if (contact_no == "") {
		$("#t3").focus();
		$("#t3").css("border-color","red");
		
                $("#t1").css("border-color","lightgrey");
                $("#t2").css("border-color","lightgrey");
                $("#t4").css("border-color","lightgrey");
                
                $("#datepicker-13").css("border-color","lightgrey");
                
                $("#t5").css("border-color","lightgrey");
                $("#t6").css("border-color","lightgrey");
                $("#t10").css("border-color","lightgrey");
                
                $("#ferror").html(c);
                $("#lerror").html(c);
                 $("#eerror").html(c);
                  $("#gerror").html(c);
                   $("#derror").html(c);
                    $("#perror").html(c);
                     $("#caperror").html(c);
                      $("#cperror").html(c);
                
        $("#merror").html("please fill Mobile Number");
		return false;
	}
        
        	else if (contact_no.match(contactError)) {
		$("#t3").focus();
		$("#t3").css("border-color","red");
		
                $("#t1").css("border-color","lightgrey");
                $("#t2").css("border-color","lightgrey");
                $("#t4").css("border-color","lightgrey");
                
                $("#datepicker-13").css("border-color","lightgrey");
                
                $("#t5").css("border-color","lightgrey");
                $("#t6").css("border-color","lightgrey");
                $("#t10").css("border-color","lightgrey");
                
                $("#ferror").html(c);
                $("#lerror").html(c);
                 $("#eerror").html(c);
                  $("#gerror").html(c);
                   $("#derror").html(c);
                    $("#perror").html(c);
                     $("#caperror").html(c);
                      $("#cperror").html(c);
                
        $("#merror").html("please provide valid Mobile Number");
		return false;
	}
	
	else if (contact_no.length < 10) {
		$("#t3").focus();
		$("#t3").css("border-color","red");
                
                $("#t1").css("border-color","lightgrey");
                $("#t2").css("border-color","lightgrey");
                $("#t4").css("border-color","lightgrey");
                
                $("#datepicker-13").css("border-color","lightgrey");
                
                $("#t5").css("border-color","lightgrey");
                $("#t6").css("border-color","lightgrey");
                $("#t10").css("border-color","lightgrey");
                
                $("#ferror").html(c);
                $("#lerror").html(c);
                 $("#eerror").html(c);
                  $("#gerror").html(c);
                   $("#derror").html(c);
                    $("#perror").html(c);
                     $("#caperror").html(c);
                      $("#cperror").html(c);
                
		$("#merror").html("please provide valid Mobile Number");
		return false;
	}

	else if (email == "") {
		$("#t4").focus();
		$("#t4").css("border-color","red");
                
                 $("#t1").css("border-color","lightgrey");
                $("#t2").css("border-color","lightgrey");
                $("#t3").css("border-color","lightgrey");
                
                $("#datepicker-13").css("border-color","lightgrey");
                
                $("#t5").css("border-color","lightgrey");
                $("#t6").css("border-color","lightgrey");
                $("#t10").css("border-color","lightgrey");
                
                $("#ferror").html(c);
                $("#lerror").html(c);
                 $("#merror").html(c);
                  $("#gerror").html(c);
                   $("#derror").html(c);
                    $("#perror").html(c);
                     $("#caperror").html(c);
                      $("#cperror").html(c);
                      
		$("#eerror").html("please fill Email Id");
		return false;
	}	

	else if(!filter.test(email))
	
	{
		$("#t4").focus();
		$("#t4").css("border-color","red");
                
                $("#t1").css("border-color","lightgrey");
                $("#t2").css("border-color","lightgrey");
                $("#t3").css("border-color","lightgrey");
                
                $("#datepicker-13").css("border-color","lightgrey");
                
                $("#t5").css("border-color","lightgrey");
                $("#t6").css("border-color","lightgrey");
                $("#t10").css("border-color","lightgrey");
                
                $("#ferror").html(c);
                $("#lerror").html(c);
                 $("#merror").html(c);
                  $("#gerror").html(c);
                   $("#derror").html(c);
                    $("#perror").html(c);
                     $("#caperror").html(c);
                      $("#cperror").html(c);
                
		$("#eerror").html("please provide valid email id");
		return false;
	}
	
	else if(radioChecked.length==0)
	{
		$("#t7").focus();
		$("#t7").css("border-color","red");
                
                $("#t1").css("border-color","lightgrey");
                $("#t2").css("border-color","lightgrey");
                $("#t3").css("border-color","lightgrey");
                $("#t4").css("border-color","lightgrey");
                
                $("#datepicker-13").css("border-color","lightgrey");
                
                $("#t5").css("border-color","lightgrey");
                $("#t6").css("border-color","lightgrey");
                $("#t10").css("border-color","lightgrey");
                
                $("#ferror").html(c);
                $("#lerror").html(c);
                 $("#merror").html(c);
                  $("#eerror").html(c);
                   $("#derror").html(c);
                    $("#perror").html(c);
                     $("#caperror").html(c);
                      $("#cperror").html(c);
               
		$("#gerror").html("please select any one");
		return false;
	}
	

	
        
        
	else if(dob=="")
	{
		$("#datepicker-13").focus();
		$("#datepicker-13").css("border-color","red");
                
                $("#t1").css("border-color","lightgrey");
                $("#t2").css("border-color","lightgrey");
                $("#t3").css("border-color","lightgrey");
                
                $("#t4").css("border-color","lightgrey");
                
                $("#t5").css("border-color","lightgrey");
                $("#t6").css("border-color","lightgrey");
                $("#t10").css("border-color","lightgrey");
                
                $("#ferror").html(c);
                $("#lerror").html(c);
                 $("#merror").html(c);
                  $("#eerror").html(c);
                   $("#gerror").html(c);
                    $("#perror").html(c);
                     $("#caperror").html(c);
                      $("#cperror").html(c);
               
		$("#derror").html("please select DOB");
		return false;

	}
        
       
	
	
	
	
	else if (password == "") {
		$("#t5").focus();
		$("#t5").css("border-color","red");
                
                $("#t1").css("border-color","lightgrey");
                $("#t2").css("border-color","lightgrey");
                $("#t3").css("border-color","lightgrey");
                $("#datepicker-13").css("border-color","lightgrey");
                
                
                $("#t4").css("border-color","lightgrey");
                $("#t6").css("border-color","lightgrey");
                $("#t10").css("border-color","lightgrey");
                
                $("#ferror").html(c);
                $("#lerror").html(c);
                 $("#merror").html(c);
                  $("#eerror").html(c);
                   $("#gerror").html(c);
                    $("#derror").html(c);
                     $("#caperror").html(c);
                      $("#cperror").html(c);
                      
		$("#perror").html("please fill Password");
		return false;
	}
	
	else if (password.length<6) {
		$("#t5").focus();
		$("#t5").css("border-color","red");
                
                                $("#t1").css("border-color","lightgrey");
                $("#t2").css("border-color","lightgrey");
                $("#t3").css("border-color","lightgrey");
                $("#datepicker-13").css("border-color","lightgrey");
                
                
                $("#t4").css("border-color","lightgrey");
                $("#t6").css("border-color","lightgrey");
                $("#t10").css("border-color","lightgrey");
                
                $("#ferror").html(c);
                $("#lerror").html(c);
                 $("#merror").html(c);
                  $("#eerror").html(c);
                   $("#gerror").html(c);
                    $("#derror").html(c);
                     $("#caperror").html(c);
                      $("#cperror").html(c);
                     
		$("#perror").html("Password must be more than 6 character");
		return false;
	}
	
	else if (confirm_password == "") {
		$("#t6").focus();
		$("#t6").css("border-color","red");
                
                                $("#t1").css("border-color","lightgrey");
                $("#t2").css("border-color","lightgrey");
                $("#t3").css("border-color","lightgrey");
                $("#datepicker-13").css("border-color","lightgrey");
                
                
                $("#t4").css("border-color","lightgrey");
                $("#t6").css("border-color","lightgrey");
                $("#t10").css("border-color","lightgrey");
                
                $("#ferror").html(c);
                $("#lerror").html(c);
                 $("#merror").html(c);
                  $("#eerror").html(c);
                   $("#gerror").html(c);
                    $("#derror").html(c);
                     $("#caperror").html(c);
                      $("#cperror").html(c);
                     
		$("#cperror").html("please fill confirm password");
		return false;
	}
	
	
	
	else if (confirm_password != password) {
		$("#t6").focus();
		$("#t6").css("border-color","red");
                
                                $("#t1").css("border-color","lightgrey");
                $("#t2").css("border-color","lightgrey");
                $("#t3").css("border-color","lightgrey");
                $("#datepicker-13").css("border-color","lightgrey");
                
                
                $("#t4").css("border-color","lightgrey");
                $("#t6").css("border-color","lightgrey");
                $("#t10").css("border-color","lightgrey");
                
                $("#ferror").html(c);
                $("#lerror").html(c);
                 $("#merror").html(c);
                  $("#eerror").html(c);
                   $("#gerror").html(c);
                    $("#derror").html(c);
                     $("#caperror").html(c);
                      $("#cperror").html(c);
                     
		$("#cperror").html("Confirm password doesn't match");
		return false;
	}
	else if(captcha=="")
	{
		$("#t10").focus();
		$("#t10").css("border-color","red");
                
                $("#t1").css("border-color","lightgrey");
                $("#t2").css("border-color","lightgrey");
                $("#t3").css("border-color","lightgrey");
                $("#datepicker-13").css("border-color","lightgrey");
                
                
                $("#t5").css("border-color","lightgrey");
                $("#t6").css("border-color","lightgrey");
                $("#t4").css("border-color","lightgrey");
                
                $("#ferror").html(c);
                $("#lerror").html(c);
                 $("#merror").html(c);
                  $("#eerror").html(c);
                   $("#gerror").html(c);
                    $("#derror").html(c);
                     $("#perror").html(c);
                      $("#cperror").html(c);
                     
		$("#caperror").html("please fill captcha");
		return false;
	}
	
	
	else if(captcha!=captext)
	{
		$("#t10").focus();
		$("#t10").css("border-color","red");
                
                   $("#t1").css("border-color","lightgrey");
                $("#t2").css("border-color","lightgrey");
                $("#t3").css("border-color","lightgrey");
                $("#datepicker-13").css("border-color","lightgrey");
                
                
                $("#t5").css("border-color","lightgrey");
                $("#t6").css("border-color","lightgrey");
                $("#t4").css("border-color","lightgrey");
                
                $("#ferror").html(c);
                $("#lerror").html(c);
                 $("#merror").html(c);
                  $("#eerror").html(c);
                   $("#gerror").html(c);
                    $("#derror").html(c);
                     $("#perror").html(c);
                      $("#cperror").html(c);
             
		$("#caperror").html("incorrect captcha, please try again");
		return false;
	}	
	
	else{
	
	$.ajax({
	
			url:"register.php",
			method: 'POST',
			
			data:
			{
			postfname:fname, postlname:lname, postmobile:contact_no, postgender:gender, postdob:dob, postemail:email, postpassword:password
			},
			success:function(data)
			{
			
			$("#success").html(data);
			$("#form1")[0].reset();	

			}
			
			
	
	});
	
				$("#datepicker-13").css("border-color","lightgrey");
				
				$("#datepicker-13").text(c);
			        $("#derror").text(c);
                                $("#gerror").text(c); 
		
	}
	
		
});


// remove span error
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
	$("#ferror").text(i);
	$("#lerror").text(i);
	$("#merror").text(i);
	$("#eerror").text(i);
	$("#perror").text(i);
	$("#cperror").text(i);
	$("#caperror").text(i);
        $("#derror").text(i);
        
        $("#datepicker-13").css("border","1px solid lightgrey");
       
	$("input").css("border","1px solid lightgrey");
	});
}
removeError();

function removeRadioError()
{
    c = "";
$('input[type=radio]').on('change',function()
    {
      $("#gerror").text(c);  
        
    
    });
}
removeRadioError();

//function removeSelectError()
//{
//	var date = $("#dateList").val();
//   var month  = $("#datepicker-13").val();
//   var year  =$("#year").val()
//	
//	 $('select').on('change',function()
//   {
//	  if(!this.value=="Month")
//	  {
//		var e = "";	
//		  $("#derror").text(e);
//		   $("#date").css("border","1px solid lightgrey");
//		   
//		   
//		   
//		  
//	  }
//	 
//		   $("#datepicker-13").css("border","1px solid lightgrey");
//	  
//   });
//	
//}
//removeSelectError();

// allow only character
//$(function () {
//      
//		  $('#t1').keydown(function (e) {
//          
//              var key = e.keyCode;
//              if (!((key == 8) || (key == 9) || (key == 13) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
//                  e.preventDefault();
//              }
//          });
//      
//});

// allow only character
//	$(function () {
//		  
//			  $('#t2').keydown(function (e) {
//			   var key = e.keyCode;
//				  if (!((key == 8) || (key == 9) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
//					  e.preventDefault();
//				  }
//			  }) ;
//	});





// allow only numbers
//	
//	$("#t3").on("keypress keyup blur",function (event) {    
//           $(this).val($(this).val().replace(/[^\d].+/, ""));
//            if ((event.which < 48 || event.which > 57)) {
//                event.preventDefault();
//            }
//        });
		
// validate email
// function validateEmail()
// {
	// var emailverify = $("#t4").val().trim();
	// var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	// if(!filter.test(emailverify))
	
	// {
		// $("#t4").focus();
		// $("#t4").css("border-color","red");
		// $("#eerror").html("please provide valid email id");
		// return false;
	// }
// }

function randomStr(len, arr)
{
		var ans = '';
		for(var i = len; i >0;i--)
		{
			ans +=
				arr[Math.floor(Math.random() * arr.length)];
		}
		return ans;
		
}

randomStr();


function gen_fun()
{
	var down = document.getElementById("cap");
	down.innerHTML = randomStr(5,'12345abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
		
		
}
gen_fun();

function capctchaChange(){
    gen_fun();
  
}

function removeMessage()
{
	z = "";
	$("input").keypress(function(){
	
	  $("#success").text(z);
	});
}
removeMessage();

 $(function (){
           $("#datepicker-13").datepicker();
           
        });