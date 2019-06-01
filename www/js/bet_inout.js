// JavaScript Document

function myFunctionp(){
$("#P").hide();
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
 var mobile_login=document.getElementById( "P1" ).value;
 var username = sessionStorage.getItem("username");
 
  
   $.ajax({
  type: 'post',
 //url:'http://localhost/gaame/php/getbet_inout.php',
   url:'http://thefugen.com/lingam/jackpot/getbet_inout.php',
  data: {
  user_id:user_ids,mobile_login:mobile_login,username:username,pos:"A",
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
			   document.getElementById("P1").stepUp(100);
	   			$("#P").show();
                    $("#pp1").show();
                }else{
                    $('.user-content').slideUp();
                    location.replace("index.html");
                } 
            }
        });
	   	
   }
   else{
	   
	    alert("Limit Closed");
		  $("#pp1").show();
		return false;
   }
  }
});
             
 
}

function myFunctionb(){
$("#B").hide();
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
 var mobile_login=document.getElementById( "P2" ).value;
 var username = sessionStorage.getItem("username");
 
  
   $.ajax({
  type: 'post',
 //url:'http://localhost/gaame/php/getbet_inout.php',
 url:'http://thefugen.com/lingam/jackpot/getbet_inout.php',
  data: {
  user_id:user_ids,mobile_login:mobile_login,username:username,pos:"B",
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
			   document.getElementById("P2").stepUp(100);
	   			$("#B").show();
                    $("#pp2").show();
                }else{
                    $('.user-content').slideUp();
                    location.replace("index.html");
                } 
            }
        });
	   	
   }
   else{
	   
	    alert("Limit Closed");
		  $("#pp2").show();
		return false;
   }
  }
});
             
 
}



function clear_p(){
	 $("#pp1").hide();	
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
 var mobile_login=document.getElementById( "P1" ).value;
 var username = sessionStorage.getItem("username");
 
  
   $.ajax({
  type: 'post',
url:'http://thefugen.com/lingam/jackpot/clearbet_inout.php',
// url:'http://localhost/gaame/php/clearbet_inout.php',	
  data: {
  user_id:user_ids,mobile_login:mobile_login,username:username,pos:"A",
  },
  success: function (response) {
   if(response==1)	
   {
	   var res=0;
	   document.getElementById("P1").value=res;
	  
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
                       $("#P").show();
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


function clear_b(){
	  $("#pp2").hide();	
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
 var mobile_login=document.getElementById( "P2" ).value;
 var username = sessionStorage.getItem("username");
 
  
   $.ajax({
  type: 'post',
url:'http://thefugen.com/lingam/jackpot/clearbet_inout.php',
// url:'http://localhost/gaame/php/clearbet_inout.php',	
  data: {
  user_id:user_ids,mobile_login:mobile_login,username:username,pos:"B",
  },
  success: function (response) {
   if(response==1)	
   {
	   var res=0;
	   document.getElementById("P2").value=res;
	 
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
                       $("#B").show();
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
