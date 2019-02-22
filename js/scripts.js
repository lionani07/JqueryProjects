$(function(){

	var options = {
		placeholder: '00000-000',
		onComplete: function(cep) {
   		alert('CEP Completed!:' + cep);
 		},
	};
	
	$('#cep').mask('00000-000', options);	

	var checkboxSelect = [];

	$('input:checkbox').on('change', function(){
		if($(this).prop('checked')){
			checkboxSelect.push($(this).val());
		}
		else{
			checkboxSelect.pop($(this).val());
		}		
		console.log(checkboxSelect);
	});

	
	
});

