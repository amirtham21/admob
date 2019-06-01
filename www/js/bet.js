
function myFunction(){
$("#aa1").hide();
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};
 var user_ids =getUrlParameter('board');
 var mobile_login=document.getElementById( "A1" ).value;
 var username = sessionStorage.getItem("username");
 
  
   $.ajax({
  type: 'post',
 //url:'http://localhost/gaame/php/getbet.php',
   url:'http://thefugen.com/lingam/jackpot/getbet.php',
  data: {
  user_id:user_ids,mobile_login:mobile_login,username:username,pos:"A1",
  },
  success: function (response) {
   if(response==1)	
   {
	  
	   
	    $.ajax({
            type:'POST',
         url:'http://thefugen.com/lingam/jackpot/session.php',
		 //url:'http://localhost/gaame/php/session.php',
            dataType: "json",
            data:{user_id:username},
            success:function(data){
                if(data.status == 'ok'){
                   var usernam=(data.result.username);
				   amt=(data.result.amount);
              document.getElementById("bal").innerHTML=amt;   
			   document.getElementById("A1").stepUp(100);
	   			$("#ama1").show();
                    $("#aa1").show();
                }else{
                    $('.user-content').slideUp();
                    location.replace("index.html");
                } 
            }
        });
	   	
   }
   else{
	   
	    alert("Limit Closed");
		  $("#aa1").show();
		return false;
   }
  }
});
             
 
}

function myFunction1(){
	$("#aa2").hide();
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};
 var user_ids =getUrlParameter('board');
 var mobile_login=document.getElementById( "A2" ).value;
 var username = sessionStorage.getItem("username");
 
  
   $.ajax({
  type: 'post',
// url:'http://localhost/gaame/php/getbet.php',
   url:'http://thefugen.com/lingam/jackpot/getbet.php',
  data: {
  user_id:user_ids,mobile_login:mobile_login,username:username,pos:"A2",
  },
  success: function (response) {
   if(response==1)	
   {
	   document.getElementById("A2").stepUp(100);
	    $("#ama2").show();	
		 $.ajax({
            type:'POST',
        url:'http://thefugen.com/lingam/jackpot/session.php',
		//url:'http://localhost/gaame/php/session.php',
            dataType: "json",
            data:{user_id:username},
            success:function(data){
                if(data.status == 'ok'){
                   var usernam=(data.result.username);
				   amt=(data.result.amount);
              document.getElementById("bal").innerHTML=amt;   
                       $("#aa2").show();
                }else{
                    $('.user-content').slideUp();
                    location.replace("index.html");
                } 
            }
        });
   }
   else{
	    alert("Limit Closed");
		  $("#aa2").show();
		return false;
   }
  }
});
             
 
}

function myFunction2(){
	$("#aa3").hide();
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};
 var user_ids =getUrlParameter('board');
 var mobile_login=document.getElementById( "B1" ).value;
 var username = sessionStorage.getItem("username");
 
  
   $.ajax({
  type: 'post',
  //url:'http://localhost/gaame/php/getbet.php',
   url:'http://thefugen.com/lingam/jackpot/getbet.php',
  data: {
  user_id:user_ids,mobile_login:mobile_login,username:username,pos:"B1",
  },
  success: function (response) {
   if(response==1)	
   {
	   document.getElementById("B1").stepUp(100);
	   $("#ama3").show();
	    $.ajax({
            type:'POST',
        url:'http://thefugen.com/lingam/jackpot/session.php',
		//	url:'http://localhost/gaame/php/session.php',
            dataType: "json",
            data:{user_id:username},
            success:function(data){
                if(data.status == 'ok'){
                   var usernam=(data.result.username);
				   amt=(data.result.amount);
              document.getElementById("bal").innerHTML=amt;   
                       $("#aa3").show();
                }else{
                    $('.user-content').slideUp();
                    location.replace("index.html");
                } 
            }
        });
   }
   else{
	    alert("Limit Closed");
		  $("#aa3").show();
		return false;
   }
  }
});
             
 
}

function myFunction3(){
	$("#aa4").hide();
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};
 var user_ids =getUrlParameter('board');
 var mobile_login=document.getElementById( "B2" ).value;
 var username = sessionStorage.getItem("username");
 
  
   $.ajax({
  type: 'post',
  //url:'http://localhost/gaame/php/getbet.php',
  url:'http://thefugen.com/lingam/jackpot/getbet.php',
  data: {
  user_id:user_ids,mobile_login:mobile_login,username:username,pos:"B2",
  },
  success: function (response) {
   if(response==1)	
   {
	   document.getElementById("B2").stepUp(100);
	   $("#ama4").show();
	   
	    $.ajax({
            type:'POST',
        url:'http://thefugen.com/lingam/jackpot/session.php',
		//url:'http://localhost/gaame/php/session.php',
            dataType: "json",
            data:{user_id:username},
            success:function(data){
                if(data.status == 'ok'){
                   var usernam=(data.result.username);
				   amt=(data.result.amount);
              document.getElementById("bal").innerHTML=amt;   
                      $("#aa4").show(); 
                }else{
                    $('.user-content').slideUp();
                    location.replace("index.html");
                } 
            }
        });
   }
   else{
	    alert("Limit Closed");
		 $("#aa4").show(); 
		return false;
		
   }
  }
});
             
 
}

function myFunction4(){
	$("#aa5").hide();
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};
 var user_ids =getUrlParameter('board');
 var mobile_login=document.getElementById( "C1" ).value;
 var username = sessionStorage.getItem("username");
 
  
   $.ajax({
  type: 'post',
  //url:'http://localhost/gaame/php/getbet.php',
  url:'http://thefugen.com/lingam/jackpot/getbet.php',
  data: {
  user_id:user_ids,mobile_login:mobile_login,username:username,pos:"C1",
  },
  success: function (response) {
   if(response==1)	
   {
	   document.getElementById("C1").stepUp(100);
	   $("#ama5").show();
	    $.ajax({
            type:'POST',
        url:'http://thefugen.com/lingam/jackpot/session.php',
		//url:'http://localhost/gaame/php/session.php',
            dataType: "json",
            data:{user_id:username},
            success:function(data){
                if(data.status == 'ok'){
                   var usernam=(data.result.username);
				   amt=(data.result.amount);
              document.getElementById("bal").innerHTML=amt;   
                     $("#aa5").show();  
                }else{
                    $('.user-content').slideUp();
                    location.replace("index.html");
                } 
            }
        });
   }
   else{
	    alert("Limit Closed");
		$("#aa5").show();  
		return false;
   }
  }
});
             
 
}

function myFunction5(){
	$("#aa6").hide();
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};
 var user_ids =getUrlParameter('board');
 var mobile_login=document.getElementById( "C2" ).value;
 var username = sessionStorage.getItem("username");
 
  
   $.ajax({
  type: 'post',
  //url:'http://localhost/gaame/php/getbet.php',
  url:'http://thefugen.com/lingam/jackpot/getbet.php',
  data: {
  user_id:user_ids,mobile_login:mobile_login,username:username,pos:"C2",
  },
  success: function (response) {
   if(response==1)	
   {
	   document.getElementById("C2").stepUp(100);
	   $("#ama6").show();
	    $.ajax({
            type:'POST',
        url:'http://thefugen.com/lingam/jackpot/session.php',
		//url:'http://localhost/gaame/php/session.php',
            dataType: "json",
            data:{user_id:username},
            success:function(data){
                if(data.status == 'ok'){
                   var usernam=(data.result.username);
				   amt=(data.result.amount);
              document.getElementById("bal").innerHTML=amt;   
                       $("#aa6").show();
                }else{
                    $('.user-content').slideUp();
                    location.replace("index.html");
                } 
            }
        });
   }
   else{
	    alert("Limit Closed");
		  $("#aa6").show();
		return false;
   }
  }
});
             
 
}

function myFunction6(){
	$("#aa7").hide();
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};
 var user_ids =getUrlParameter('board');
 var mobile_login=document.getElementById( "X" ).value;
 var username = sessionStorage.getItem("username");
 
  
   $.ajax({
  type: 'post',
 //url:'http://localhost/gaame/php/getbet.php',
 url:'http://thefugen.com/lingam/jackpot/getbet.php',
  data: {
  user_id:user_ids,mobile_login:mobile_login,username:username,pos:"X",
  },
  success: function (response) {
   if(response==1)	
   {
	   document.getElementById("X").stepUp(100);
	   $("#ama7").show();
	    $.ajax({
            type:'POST',
         url:'http://thefugen.com/lingam/jackpot/session.php',
		 //url:'http://localhost/gaame/php/session.php',
            dataType: "json",
            data:{user_id:username},
            success:function(data){
                if(data.status == 'ok'){
                   var usernam=(data.result.username);
				   amt=(data.result.amount);
              document.getElementById("bal").innerHTML=amt;   
                      $("#aa7").show(); 
                }else{
                    $('.user-content').slideUp();
                    location.replace("index.html");
                } 
            }
        });
   }
   else{
	    alert("Limit Closed");
		 $("#aa7").show(); 
		return false;
   }
  }
});
             
}

// Clear Functions

function clear_a1(){
	 $("#ama1").hide();	
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};
 var user_ids =getUrlParameter('board');
 var mobile_login=document.getElementById( "A1" ).value;
 var username = sessionStorage.getItem("username");
 
  
   $.ajax({
  type: 'post',
  
   	url:'http://thefugen.com/lingam/jackpot/clearbet.php',
 	//url:'http://localhost/gaame/php/clearbet.php',	
  
  data: {
  user_id:user_ids,mobile_login:mobile_login,username:username,pos:"A1",
  },
  success: function (response) {
   if(response==1)	
   {
	   var res=0;
	   document.getElementById("A1").value=res;
	  
	    $.ajax({
            type:'POST',
        url:'http://thefugen.com/lingam/jackpot/session.php',
		//url:'http://localhost/gaame/php/session.php',
            dataType: "json",
            data:{user_id:username},
            success:function(data){
                if(data.status == 'ok'){
                   var usernam=(data.result.username);
				   amt=(data.result.amount);
              document.getElementById("bal").innerHTML=amt;   
                     $("#aa1").show();
                }else{
                    $('.user-content').slideUp();
                    location.replace("index.html");
                } 
            }
        });
	 
   }
   else{
	    alert("Limit Closed");
		return false;
   }
  }
});
             
}

function clear_a2(){
	$("#ama2").hide();	
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};
 var user_ids =getUrlParameter('board');
 var mobile_login=document.getElementById( "A2" ).value;
 var username = sessionStorage.getItem("username");
 
  
   $.ajax({
  type: 'post',
url:'http://thefugen.com/lingam/jackpot/clearbet.php',
// url:'http://localhost/gaame/php/clearbet.php',	
  data: {
  user_id:user_ids,mobile_login:mobile_login,username:username,pos:"A2",
  },
  success: function (response) {
   if(response==1)	
   {
	   var res=0;
	   document.getElementById("A2").value=res;
	   
	    $.ajax({
            type:'POST',
         url:'http://thefugen.com/lingam/jackpot/session.php',
		 //url:'http://localhost/gaame/php/session.php',
            dataType: "json",
            data:{user_id:username},
            success:function(data){
                if(data.status == 'ok'){
                   var usernam=(data.result.username);
				   amt=(data.result.amount);
              document.getElementById("bal").innerHTML=amt;   
			     $("#aa2").show();
                    
                }else{
                    $('.user-content').slideUp();
                    location.replace("index.html");
                } 
            }
        });
	 
   }
   else{
	    alert("Limit Closed");
		return false;
   }
  }
});
             
 
}

function clear_b1(){
	 $("#ama3").hide();
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};
 var user_ids =getUrlParameter('board');
 var mobile_login=document.getElementById( "B1" ).value;
 var username = sessionStorage.getItem("username");
 
  
   $.ajax({
  type: 'post',
 url:'http://thefugen.com/lingam/jackpot/clearbet.php',
 //	url:'http://localhost/gaame/php/clearbet.php',	
  data: {
  user_id:user_ids,mobile_login:mobile_login,username:username,pos:"B1",
  },
  success: function (response) {
   if(response==1)	
   {
	   var res=0;
	   document.getElementById("B1").value=res;
	  	
	    $.ajax({
            type:'POST',
        url:'http://thefugen.com/lingam/jackpot/session.php',
		//url:'http://localhost/gaame/php/session.php',
            dataType: "json",
            data:{user_id:username},
            success:function(data){
                if(data.status == 'ok'){
                   var usernam=(data.result.username);
				   amt=(data.result.amount);
              document.getElementById("bal").innerHTML=amt; 
			     $("#aa3").show();  
                    
                }else{
                    $('.user-content').slideUp();
                    location.replace("index.html");
                } 
            }
        });
	 
   }
   else{
	    alert("Limit Closed");
		return false;
   }
  }
});
             
 
}

function clear_b2(){
	 $("#ama4").hide();
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};
 var user_ids =getUrlParameter('board');
 var mobile_login=document.getElementById( "B2" ).value;
 var username = sessionStorage.getItem("username");
 
  
   $.ajax({
  type: 'post',
url:'http://thefugen.com/lingam/jackpot/clearbet.php',
// url:'http://localhost/gaame/php/clearbet.php',	
  data: {
  user_id:user_ids,mobile_login:mobile_login,username:username,pos:"B2",
  },
  success: function (response) {
   if(response==1)	
   {
	   var res=0;
	   document.getElementById("B2").value=res;
	  	
	   
	   $.ajax({
            type:'POST',
        url:'http://thefugen.com/lingam/jackpot/session.php',
		//url:'http://localhost/gaame/php/session.php',
            dataType: "json",
            data:{user_id:username},
            success:function(data){
                if(data.status == 'ok'){
                   var usernam=(data.result.username);
				   amt=(data.result.amount);
              document.getElementById("bal").innerHTML=amt;   
                       $("#aa4").show();
                }else{
                    $('.user-content').slideUp();
                    location.replace("index.html");
                } 
            }
        });
	   
	 
   }
   else{
	    alert("Limit Closed");
		return false;
   }
  }
});
             
 
}

function clear_c1(){
	 $("#ama5").hide();
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};
 var user_ids =getUrlParameter('board');
 var mobile_login=document.getElementById( "C1" ).value;
 var username = sessionStorage.getItem("username");
 
  
   $.ajax({
  type: 'post',
 url:'http://thefugen.com/lingam/jackpot/clearbet.php',
 //	url:'http://localhost/gaame/php/clearbet.php',	
  data: {
  user_id:user_ids,mobile_login:mobile_login,username:username,pos:"C1",
  },
  success: function (response) {
   if(response==1)	
   {
	   var res=0;
	   document.getElementById("C1").value=res;
	  
	    $.ajax({
            type:'POST',
        url:'http://thefugen.com/lingam/jackpot/session.php',
		//url:'http://localhost/gaame/php/session.php',
            dataType: "json",
            data:{user_id:username},
            success:function(data){
                if(data.status == 'ok'){
                   var usernam=(data.result.username);
				   amt=(data.result.amount);
              document.getElementById("bal").innerHTML=amt;
			     $("#aa5").show();   
                    
                }else{
                    $('.user-content').slideUp();
                    location.replace("index.html");
                } 
            }
        });	
	 
   }
   else{
	    alert("Limit Closed");
		return false;
   }
  }
});
             
 
}

function clear_c2(){
	$("#ama6").hide();	
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};
 var user_ids =getUrlParameter('board');
 var mobile_login=document.getElementById( "C2" ).value;
 var username = sessionStorage.getItem("username");
 
  
   $.ajax({
  type: 'post',
  url:'http://thefugen.com/lingam/jackpot/clearbet.php',
  //url:'http://localhost/gaame/php/clearbet.php',	
  data: {
  user_id:user_ids,mobile_login:mobile_login,username:username,pos:"C2",
  },
  success: function (response) {
   if(response==1)	
   {
	   var res=0;
	   document.getElementById("C2").value=res;
	   
	    $.ajax({
            type:'POST',
        url:'http://thefugen.com/lingam/jackpot/session.php',
		//url:'http://localhost/gaame/php/session.php',
            dataType: "json",
            data:{user_id:username},
            success:function(data){
                if(data.status == 'ok'){
                   var usernam=(data.result.username);
				   amt=(data.result.amount);
              document.getElementById("bal").innerHTML=amt;   
                       $("#aa6").show();
                }else{
                    $('.user-content').slideUp();
                    location.replace("index.html");
                } 
            }
        });
	 
   }
   else{
	    alert("Limit Closed");
		return false;
   }
  }
});
             
 
}

function clear_x(){
	 $("#ama7").hide();	
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};
 var user_ids =getUrlParameter('board');
 var mobile_login=document.getElementById( "X" ).value;
 var username = sessionStorage.getItem("username");
 
  
   $.ajax({
  type: 'post',
 url:'http://thefugen.com/lingam/jackpot/clearbet.php',
 //url:'http://localhost/gaame/php/clearbet.php',	
  data: {
  user_id:user_ids,mobile_login:mobile_login,username:username,pos:"X",
  },
  success: function (response) {
   if(response==1)	
   {
	   var res=0;
	   document.getElementById("X").value=res;
	  
	  $.ajax({
            type:'POST',
        url:'http://thefugen.com/lingam/jackpot/session.php',
		//url:'http://localhost/gaame/php/session.php',
            dataType: "json",
            data:{user_id:username},
            success:function(data){
                if(data.status == 'ok'){
                   var usernam=(data.result.username);
				   amt=(data.result.amount);
              document.getElementById("bal").innerHTML=amt;   
                       $("#aa7").show();
                }else{
                    $('.user-content').slideUp();
                    location.replace("index.html");
                } 
            }
        });
   }
   else{
	    alert("Limit Closed");
		return false;
   }
  }
});
             
 
}