$(function(){

	var options = {
		placeholder: '00000-000',
		onComplete: function(cep) {
   		alert('CEP Completed!:' + cep);
 		},
	};
	
	$('#cep').mask('00000-000', options);	

	
	
});

