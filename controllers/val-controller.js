const axios = require('axios');
const Help = require('../models/help'); 
const Locations = require('../models/locations')
const Users = require('../models/users'); 
const Watch = require('../models/watch'); 
const Rating = require('../models/userRating')
const removeDuplicates = require('removeDuplicates').default;
console.log("this is remove", removeDuplicates.default); 
const valController = {}; 


valController.index = (req, res) => {
	  res.render('validated/index', {
	  	user: req.user
	  })
	  console.log("index rendered")
	}


// render data from API to results page 
valController.search = (req, res) => {
	  console.log('inside search method')
	  axios({
	    method: 'get',
	    url: `https://data.cityofnewyork.us/resource/9w7m-hzhe.json?$q=${req.body.search}`,

	  })
	  .then(data => {
	  	let uniqueLocs = removeDuplicates(data.data, 'camis');
	  	// console.log(`https://data.cityofnewyork.us/resource/9w7m-hzhe.json?$q=${req.body.search}`)
	  	return uniqueLocs; 
	  })
	  .then( data => {
	  	// console.log(data); 
	  	
	    res.render('validated/results', {
	    	data: data, 
	    	user: req.user

	     }) 
	  })
	  .catch( err => {
	  	console.log(err)
	    	res.status(500).json(err)
	  })
 // next function 
}

valController.show = (req, res) => { 
// console.log('inside show method')
	  axios({
	    method: 'get',
	    url: `https://data.cityofnewyork.us/resource/9w7m-hzhe.json?$q=${req.body.locationId}`,

	  })
	  .then( data => {
	  	console.log("this is data:", data.data[0].dba);
	  	    res.render('validated/location', {
	    	data: data.data, 
	    	user: req.user

	     });  
	  	    // console.log(data)
	  }) 
	  .catch( err => {
	  	console.log(err)
	    	res.status(500).json(err)
	  })
}



valController.favorites = (req, res) => { 
	console.log("inside favorites");
	console.log("this is req.body:", req.body);
	Locations.create({
		camis: req.body.location_id, 
		dba: req.body.dba, 
		building: req.body.building, 
		street: req.body.street, 
		boro: req.body.boro, 
		zipcode: req.body.zipcode
	})
	  Watch.create({
	      // user_id: 1, 
	      // location_id: 44444
	      user_id: req.user.id, 
	      location_id: req.body.location_id
	
    	})	 
     
    .then(data => {
    	res.json(data)
    	console.log(data); 
      })
     .catch(err => {
      res.status(400).json(err);
    });
    // console.log(req.user); 

};

valController.rating = (req, res) => { 
	console.log("inside rating"); 
	  Rating.create({
	      rating: req.body.rating, 
	      review: req.body.review, 
	      camis: req.body.location_id, 
	      // user_id: 1
	      user_id: req.user.id, 
	      // location_id: req.body.location_id
    })  
    .then(data => {
    	res.json(data)
    	console.log("this is rating data", data); 
      })
     .catch(err => {
      res.status(400).json(err);
    });
    // console.log(req.user); 

};

valController.profile = (req, res) => {
	console.log("inside profile"); 
	res.render("profile")

	}

  valController.help = (req, res) => {
  	// console.log("inside help")
  	Help.findAll()
  	.then (help => {
  		console.log("this is help:", help)
  		res.render("validated/help", {
  			help: help,
  			user: req.user
  		}) 
  		console.log(help);
  	});  
  }; 


module.exports = valController; 