//JavaScript Document

$(document).ready(function(e){
	document.addEventListener("deviceready",function(){
		
		$('#beep').tap(function(){
			navigator.notification.beep(1);
		});//tap beep
		
		$('#beep').tap(function(){
			navigator.notification.vibrate(5000);
		});//tap vibrar
		
	},false); //deviceready
}); //ready