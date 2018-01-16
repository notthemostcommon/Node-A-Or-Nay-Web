const axios = require('axios');
const Help = require('../models/help'); 
const Locations = require('../models/locations')
const Users = require('../models/users'); 
const Watch = require('../models/watch'); 
const Rating = require('../models/userRating')
const removeDuplicates = require('removeDuplicates').default;
const profController = {}; 

profController.index = (req, res) => {
	console.log("inside profile"); 
  	Rating.findAllByUser(req.user.id)
	  	
	  .then( rating => {
	  	Watch.findByUser(req.user.id)
	  })
		  .then ( watch => {
		  	res.render('validated/profile', {
		      	user: req.user,
		    	rating: rating, 
		    	watch: watch, 
		  })
     })  
	  	  console.log(rating, watch)
	   
	  .catch( err => {
	  	console.log(err)
	    	res.status(500).json(err)
	  })

}


// grab favorites by user_id and grab locations by camis 
profController.favShow = (req, res) => {
	console.log("inside favShow"); 
	  	Watch.join(req.user.id)
		  .then ( data => {
		  	console.log("this is join data", data, "this is req.user.id", req.user.id);
		  	
		  		res.render('validated/favorite-list', {
		      	user: req.user, 
		    	data: data, 
		    	
		  });
		  	
     }) 	   
	  .catch(err => {
		  	res.status(400).json(err); 
		  }); 
		}; 

profController.reviewShow = (req, res) => {
	console.log("inside reviewShow"); 
	Rating.join(req.user.id)
	.then (data => { 
		console.log("this is review data", data,"this is req.user.id", req.user.id);
		res.render('validated/review-list', {
		      	user: req.user, 
		    	data: data
		}); 
	})
	.catch(err => {
		  	res.status(400).json(err); 
		  }); 
		}; 

profController.reviewEdit = (req, res) => {
	console.log("inside review edit");
	Rating.findById(req.params.id)
	.then(data => {
	// Rating.findById(req.params.id)
	// .then(rating => {
	// 	console.log("this is reviewEdit rating", rating);
	// 	Locations.findAll()
	// 	.then(locations => {
	// 		console.log("this is reviewEdit locations", locations)
			res.render('validated/review-edit', {
				user: req.user,
				data: data
				// rating: rating, 
				// locations: locations
			});  
			console.log("this is reviewEdit data", data); 
	  })
	
		.catch(err => {
		  	res.status(400).json(err); 
	  	})

    .catch(err => {
      res.status(400).json(err);
  		});
	// });  
}; 

profController.update = (req, res) => {
	console.log("inside update");
	Rating.update({
		rating: req.body.rating, 
		review: req.body.review
	}, req.body.id)
	.then(() => {
		res.redirect('reviews')
	})
	.catch(err => {
		res.status(400).json(err); 
	}); 
	
 }

profController.destroy = (req, res) => {
	console.log("inside destroy!", req.body); 
	Watch.destroy(req.body.id)
	.then(() => {
		res.redirect('/profile/favorites')
	})
	
	.catch(err => {
		res.status(400).json(err); 
	}); 
}
   
module.exports = profController; 