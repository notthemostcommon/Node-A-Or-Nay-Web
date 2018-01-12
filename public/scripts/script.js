$( document ).ready(function() {
    console.log( "ready!" );



 

$(".help-info").hide(); 
$("#login").hide(); 
$("#register").hide(); 
$("#review-textbox").hide();

$("#help").click(function(){
	$(".help-info").show()
}); 
$("#show-login").click(function(){
	$("#login").show()
}); 

// $("#show-register").click(function(){
// 	$("#login").hide(); 
// 	$("#register").show()
// }); 

$(".hide-login").click(function(){
	$("#login").hide();
}); 

$("#help-hide").click(function(){
	$(".help-info").hide(); 
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

$("#rating-submit").on("click", function(event){
	 event.preventDefault();
		let camis = $("#location_Id").val(); 
	    let rating = $('input[name=ratings]:checked').val(); 
	    let review = $("#review-area").val(); 
	    // console.log(camis, rating, review); 
	    $("#rating-form").submit(); 
		$.ajax({
			url: "/rating", 
			method: "POST", 
			data: {
				location_id: camis, 
				rating: rating, 
				review: review
			}, 
			contentType: "application/json; charset=utf-8",
			dataType: "json"
		})
		.done(function(data) {
			console.log("success", data)
		    review.val(""); 
		    review.html("Review Submitted! Thank you!")
		  })
		 .fail(function(data) {
		    console.log( "error", data );
		}); 
	}); 

$('#favorite').on("click", function(event) {
	 event.preventDefault();
	 console.log("clicked")
    $("favorite-form").submit(); 
    let camis = $("#locationId").val(); 
    console.log(camis); 
	$.ajax({
		url: "/favorites" , 
		method: 'POST', 
		data: {
			location_id: camis
		}, 
		contentType: "application/json; charset=utf-8",
		dataType: "json"
	})
	.done(function(data) {
		console.log("success", data)
	    $( ".heart" ).css("color", "red" );
	  })
	 .fail(function(data) {
	    console.log( "error", data );
	}); 
}); 


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