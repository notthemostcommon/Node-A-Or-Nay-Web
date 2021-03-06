$( document ).ready(function() {
    console.log( "ready!" );

$("#login").hide(); 
$("#register").hide(); 
$("#review-textbox").hide();

$("#help").on("click", function(){
	$("#help-form").submit()
}); 

$("#show-login").click(function(){
	$("#login").show()
}); 
$("#hide-login").on("click", function() {
	$("#login").hide(); 
})


// $("#show-register").click(function(){
// 	$("#login").hide(); 
// 	$("#register").show()
// }); 

$(".hide-login").click(function(){
	$("#login").hide();
}); 

$( "#accordion" ).accordion({
      collapsible: true
    });

 

$("ul#star-group li").on("click", function(){
	$("ul#star-group li").removeClass("active secondary-active"); 
	$(this).addClass("active"); 
	$(this).prevAll().addClass("secondary-active");
	$("#review-textbox").show();
	}); 

	 //    
// opens review box and submit and adds to db
$("#rating-submit").on("click", function(event){
	 
		let camis = $("#location_Id").val(); 
	    let rating = $('input[name=ratings]:checked').val(); 
	    let dba = $("#star-dba").val(); 
	    let building = $("#star-building").val(); 
	    let street = $("#star-street").val(); 
	    let boro = $("#star-boro").val(); 
	    let zipcode = $("#star-zipcode").val(); 
	    let review = $("#review-area").val(); 
	    // console.log(camis, rating, review); 
	    $("#rating-form").submit(function(event){
	    	event.preventDefault();
	    }); 
	    
		$.ajax({
			url: "/validated/rating", 
			method: 'POST', 
			data: {
				location_id: camis, 
				rating: rating, 
				review: review,
				dba: dba,
				building: building, 
				street: street,
				boro: boro,
				zipcode: zipcode
			}, 
		})
		.done(function(data) {
			console.log("success", data)
			$("#review-area").val(""); 
		    $("#review-textbox").text("Review Submitted! Thank you!")
		  })
		 .fail(function(data) {
		    console.log( "error", data );
		}); 

	}); 

$('#favorite').on("click", function(event) {
	 event.preventDefault();
	 console.log("clicked")
    $("favorite-form").submit(); 
    let camis = $("#fav-locationId").val(); 
    let dba = $("#fav-dba").val(); 
    let building = $("#fav-building").val(); 
    let street = $("#fav-street").val(); 
    let boro = $("#fav-boro").val(); 
    let zipcode = $("#fav-zipcode").val(); 
	// console.log(camis, dba, building, street, boro, zipcode); 
	$.ajax({
		url: "/validated/favorites" , 
		method: 'POST', 
		data: {
			location_id: camis, 
			dba: dba,
			building: building, 
			street: street,
			boro: boro,
			zipcode: zipcode
		}, 
		
	})
	.done(function(data) {
		console.log("success", data)
	    $( ".heart" ).css("color", "red" );
	  })
	 .fail(function(data) {
	    console.log( "error", data );
	}); 
}); 

 $("#delete").on("click", function() {
 	let id = $("#fave-id").val() 
 	$("#delete-form").submit()
 	// event.preventDefault();
 	console.log("click", id)
 	
 	
 	$.ajax({
		url: `/profile/${id}` , 
		method: 'DELETE', 
		data: {id: id},
	})
	.done(function(data) {
		console.log("success", data)
	    // $( ".heart" ).css("color", "red" );
	  })
	 .fail(function(data) {
	    console.log( "error", data );
	}); 
}); 

$("#edit-review").hide(); 
$("#edit-button").on("click", function(){
	// $("#review-show").hide(); 
	$("#edit-review").slideToggle()
	// $("#edit-review").show(); 
}); 


// $('#review-submit').on("click", function(event) {
// 	 event.preventDefault();
// 	 console.log("clicked")
//     $("review-edit-form").submit(); 
//     let rating = $("#edit-rating").val(); 
//     let review = $("#edit-review").val(); 
//     let id = $("#edit-id").val(); 
    
// 	console.log(rating, review); 
// 	$.ajax({
// 		url: "/profile/reviews/edit" , 
// 		method: 'PUT', 
// 		data: {
// 			rating: rating, 
// 			review: review, 
// 			id: id

// 		}, 
		
// 	})
// 	.done(function(data) {
// 		console.log("success", data)
	    
// 	  })
// 	 .fail(function(data) {
// 	    console.log( "error", data );
// 	}); 
// }); 

// activates tabs from jquery ui 
$( "#tabs" ).tabs();






// $(".toggle").click(function(){
//         $(this).parent().find("div#hide").slideToggle("slow");
//     });
// $('#search-submit').click(function(){
// 	console.log($('#search').val)
// 	return $('#search').val}; 


// $(function() {
// 	$("#autocomplete").autocomplete({
// 		delay: 500,
// 		minLength: 3,
// 		source: function(request, response) {
// 			$.getJSON("https://data.cityofnewyork.us/resource/9w7m-hzhe.json?$q=" + request.term, 	
// 				 function(data) {
// 				 	console.log("this is data", data);
// 				 	let arr = data.map((val) => {
// 				 		//console.log("inside $.map", val);
// 				 		  return {
// 				            dba: val.dba,	         
// 				        };

// 				 	})
// 					// let arr = $.map(data.data, function (val) {
// 					// 	console.log("inside $.map", val);
// 				 //        return {
// 				 //            dba: val.dba,	         
// 				 //        };
// 		   // 			 });
// 					console.log("this is arr", arr);
// 					// response(arr); 
// 					console.log("https://data.cityofnewyork.us/resource/9w7m-hzhe.json?$q=" + request.term, data, arr)
// 	    		}
//     		)
// 		},
// 		focus: function(event, ui) {
// 		// prevent autocomplete from updating the textbox
// 			event.preventDefault();
// 		},
// 		select: function(event, ui) {
// 			// prevent autocomplete from updating the textbox
// 			event.preventDefault();
// 			// navigate to the selected item's url
// 			// window.open(ui.item.url);
// 		}
// 	}).autocomplete("widget").addClass("fixed-height");
// }); 


					// data is an array of objects and must be transformed for autocomplete to use
	// 				let array =  $.map(data.data, function(m) {
	// 					return {
	// 						name: m.dba,


	// 					};
	// 					console.log(`this is data ${data.data}`)
	// 				});
	// 			response(array);
	// 			console.log(array); 


	// 			});
	// 		},
	// 		focus: function(event, ui) {
	// 			// prevent autocomplete from updating the textbox
	// 			event.preventDefault();
	// 		},
	// 		select: function(event, ui) {
	// 			// prevent autocomplete from updating the textbox
	// 			event.preventDefault();
	// 			// navigate to the selected item's url
	// 			window.open(ui.item.url);
	// 		}
	// 	});
	



}); // don't delete 