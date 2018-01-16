const axios = require('axios');
const Help = require('../models/help'); 
// const Locations = require('../models/locations')
// const Users = require('../models/users'); 
// const Watch = require('../models/watch'); 
// const Rating = require('../models/userRating')
// const removeDuplicates = require('removeDuplicates').default;
// console.log("this is remove", removeDuplicates.default); 
const publicController = {}; 
function removeDuplicates(arr, key) {
    if (!(arr instanceof Array) || key && typeof key !== 'string') {
        return false;
    }

    if (key && typeof key === 'string') {
        return arr.filter(function (obj, index, arr) {
            return arr.map(function (mapObj) {
                return mapObj[key];
            }).indexOf(obj[key]) === index;
        });
    } else {
        return arr.filter(function (item, index, arr) {
            return arr.indexOf(item) == index;
        });
    }
}
publicController.index = (req, res) => {
  res.render('index')
  console.log("index rendered")
}


// render data from API to results page 
publicController.search = (req, res) => {
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
	  	
	    res.render('results', {
	    	data: data, 

	     }) 
	  })
	  .catch( err => {
	  	console.log(err)
	    	res.status(500).json(err)
	  })
 // next function 
}

publicController.show = (req, res) => { 
// console.log('inside show method')
	  axios({
	    method: 'get',
	    url: `https://data.cityofnewyork.us/resource/9w7m-hzhe.json?$q=${req.body.locationId}`,

	  })
	  .then( data => {
	  	console.log("this is data:", data.data[0].dba);
	  	    res.render('location', {
	    	data: data.data, 
	    	user_Id: 1

	     });  
	  	    // console.log(data)
	  }) 
	  .catch( err => {
	  	console.log(err)
	    	res.status(500).json(err)
	  })
}



// publicController.favorites = (req, res) => { 
// 	console.log("inside favorites");
// 	console.log("this is req.body:", req.body);
// 	Locations.create({
// 		camis: req.body.location_id, 
// 		dba: req.body.dba, 
// 		building: req.body.building, 
// 		street: req.body.street, 
// 		boro: req.body.boro, 
// 		zipcode: req.body.zipcode
// 	})
// 	  Watch.create({
// 	      user_id: 1, 
// 	      // location_id: 44444
// 	      // user_id: req.user.id, 
// 	      location_id: req.body.location_id
	
//     	})	 
     
//     .then(data => {
//     	res.json(data)
//     	console.log(data); 
//       })
//      .catch(err => {
//       res.status(400).json(err);
//     });
//     // console.log(req.user); 

// };

// publicController.rating = (req, res) => { 
// 	console.log("inside rating"); 
// 	  Rating.create({
// 	      rating: req.body.rating, 
// 	      review: req.body.review, 
// 	      camis: req.body.location_id, 
// 	      user_id: 1
// 	      // user_id: req.user.id, 
// 	      // location_id: req.body.location_id
//     })  
//     .then(data => {
//     	res.json(data)
//     	console.log("this is rating data", data); 
//       })
//      .catch(err => {
//       res.status(400).json(err);
//     });
//     // console.log(req.user); 

// };

// publicController.profile = (req, res) => {
// 	console.log("inside profile"); 
// 	res.render("profile")

// 	}

  publicController.help = (req, res) => {
  	Help.findAll()
  	.then (help => {
  		res.render("partials/help", {
  			help: help, 
  		}); 
  		console.log(help);
  	})
  	.catch( err => {
	  	console.log(err)
	    	res.status(500).json(err)
	  })
  } 


module.exports = publicController; 