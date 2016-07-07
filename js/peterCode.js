$(document).ready(function() {
	$("#btnSubmit").on('submit', function(event) { 
		//stop form submit
		event.stopPropagation(); 
		event.preventDefault(); 

		//get value of input box
		var input = $("#txtAdd").val();
		//trim blank space 
		var trim = $.trim(input); 
		//calculating length of trim
		var trimlength = trim.length;
		if (trimlength === 0) { 
			//alert if length is 0 to add item 
			alert("Please enter an item."); 
			} 
		else { 
			//else if length greater than 0 add item to list
			$(list).prepend("<li class=''>" +
			 "<span class='glyphicon glyphicon-ok'></span>" +
			  " " + input + " " + "<span class='glyphicon glyphicon-remove'></span>" +
			   "</li>"); 
			}; 
			$("#txtAdd")[0].reset(); 
		});
});
