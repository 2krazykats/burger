$(document).ready(function() {


	$(".devoured-btn").on("click", function(event){
		var id = $(this).data("id");
		var devourIt = $(this).data("devoured");

		var burgerDevoured = {
			devoured: devourIt
		};


		$.ajax("/api/burgers/" + id, {
			type: "PUT",
			data: burgerDevoured
		}).then(function() {
			location.reload();
		});
	
	});

	$(".btn-secondary").on("click", function(event) {
		event.preventDefault();
		var newBurger = {
			name: $(".burger-input").val().trim(),
			devoured: 0
		};

		$.ajax("/api/burgers", {
			type: "POST",
			data: newBurger
		}).then(function() {
			location.reload();
		});
	});

});   //document.ready end