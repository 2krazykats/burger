$(document).ready(function() {


	$(".devoured-btn").on("click", function(event){
		var id = $(this).data("id");
		var devourIt = $(this).data("burger-devoured");

		var theyDevour=0;

		if(devourIt === 0)
		{
			theyDevour = {devoured: devourIt + 1}
		}	else {
			theyDevour = {devoured: devourIt - 1}
		};


		$.ajax("/api/burgers/" + id, {
			type: "PUT",
			data: theyDevour
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

	$(".deleteBurger").on("click", function(req, res) {
		var id = $(this).data("id");

		$.ajax("/api/burgers/" + id, {
			type: "DELETE"
		}).then(function() {
			location.reload();
		});
	});


});   //document.ready end