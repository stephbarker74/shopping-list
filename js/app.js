
$(document).ready(function() {
	$("#btnSubmit").on('click', function(event) {
		//stop form submit
		event.stopPropagation();
		event.preventDefault();
		console.log("btnSubmit button clicked");

		//get value of product input box
		var productEntered = $("#txtAdd").val();
		console.log("user has entered item " + productEntered);


	//get value of price input box
		var unitPriceEntered = $("#unitPrice").val();
		console.log("user has entered price " + unitPriceEntered);
	//get value of quantity input box
		var unitQuantityEntered = $("#unitQuantity").val();
		console.log("user has entered quantity " + unitQuantityEntered);



		//trim blank space
		var product = $.trim(productEntered);
		//calculating length of product name
		var productNameLength = product.length;
		if (productNameLength === 0) {
			//alert if length is 0 to add item
			console.log("Please enter an item.");
			}
		else {
			console.log("valid item");
			//else if length greater than 0 add item to list
			$("#list").prepend("<li class=''>" +
							"<ul class='productDetails'>" +
			  				"<li class='quantity'>" + unitQuantityEntered + "</li> " +
							"<li class='product'>" + productEntered + "</li> " +
			  				"<li class='price'>$ " + unitPriceEntered + "</li> " +
			  				"<input class='remove-item' type='checkbox'></input> Remove item" +
								"</ul>" +
			   				"</li>");

			}
			$("#txtAdd").val(" ");


		});
		$( "#remove-items" ).click(function(event) {
		  console.log( "Handler for .click() called." );
				event.stopPropagation();
				event.preventDefault();
				$('.productDetails').has('input:checked').remove();
		});
});
