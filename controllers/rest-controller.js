const axios = require('axios');
const Help = require('../models/help'); 
const Location = require('../models/locations')
const Users = require('../models/users'); 
const Watch = require('../models/watch'); 
const removeDuplicates = require('removeDuplicates').default;
console.log("this is remove", removeDuplicates.default); 
const restController = {}; 


restController.index = (req, res) => {
  res.render('index')
  console.log("index rendered")
}


// render data from API to results page 
restController.search = (req, res) => {
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

restController.show = (req, res) => { 
// console.log('inside show method')
	  axios({
	    method: 'get',
	    url: `https://data.cityofnewyork.us/resource/9w7m-hzhe.json?$q=${req.body.locationId}`,

	  })
	  .then( data => {
	  	    res.render('location', {
	    	data: data.data, 

	     });  
	  	    // console.log(data)
	  }) 
	  .catch( err => {
	  	console.log(err)
	    	res.status(500).json(err)
	  })
}

restController.favorites = (req, res) => { 
	  Watch.create({
	      user_id: 1, 
	      location_id: 44444
	      // user_id: req.user.id, 
	      // location_id: req.body.location_id
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


// console.log("this is req.body", req.body)
	//   axios({
	//     method: 'get',
	//     url: `https://data.cityofnewyork.us/resource/9w7m-hzhe.json?$q=${req.body.location_id}`,

	//   })
	//   .then( data => {
	//   	    res.render('location', {
	//     	data: data.data, 
	//      }); 
	//   	    // console.log("this is data", data); 
	//   })
	//   .catch( err => {
	//   	console.log(err)
	//     	res.status(500).json(err)
	//   })

  


module.exports = restController; 