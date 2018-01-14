const axios = require('axios');
const Help = require('../models/help'); 
const Location = require('../models/locations')
const Users = require('../models/users'); 
const Watch = require('../models/watch'); 
const Rating = require('../models/userRating')
const removeDuplicates = require('removeDuplicates').default;
const profController = {}; 

profController.index = (req, res) => {
	console.log("inside profile"); 
  	Rating.findAllByUser(1)
	  	
	  .then( rating => {
	  	Watch.findByUser(1)
	  })
		  .then ( watch => {
		  	res.render('validated/profile', {
		      	user: "test",
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
	  	Watch.join(1)
		  .then ( data => {
		  	console.log("this is join data", data);
		  	
		  		res.render('validated/favorite-list', {
		      	user: "test", 
		    	data: data, 
		    	
		  });
		  	
     }) 	   
	  .catch(err => {
		  	res.status(400).json(err); 
		  }); 
		}; 

profController.reviewShow = (req, res) => {
	console.log("inside reviewShow"); 
	Rating.findAllByUser(1)
	.then (data => { 
		console.log("this is review data", data);
		res.render('validated/review-list', {
		      	user: "test", 
		    	data: data
		}); 
	})
	.catch(err => {
		  	res.status(400).json(err); 
		  }); 
		}; 
// profController.reviewEdit = (req, res) => 

module.exports = profController; 