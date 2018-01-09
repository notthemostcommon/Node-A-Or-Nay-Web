$( document ).ready(function() {
    console.log( "ready!" );
$(".help-info").hide(); 

$("#help").click(function(){
	$(".help-info").show()
}); 

$("#help-hide").click(function(){
	$(".help-info").hide()
}); 

$( "#accordion" ).accordion({
      collapsible: true
    });

$("ul#star-group li").on("click", function(){
	$("ul#star-group li").removeClass("active secondary-active"); 
	$(this).addClass("active"); 
	$(this).prevAll().addClass("secondary-active");

})

$("ul#favorite-group li").on("click", function(){
	if ($(this).prop('checked', false)){
		
			
			$(this).addClass("active"); 
		} else {
			$("ul#favorite-group li").removeClass("active"); 
			$(this).addClass("inactive");
		}
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