const axios = require('axios');
const Help = require('../models/help'); 
const removeDuplicates = require('removeDuplicates').default;
console.log("this is remove", removeDuplicates.default); 
const restController = {}; 

// function removeDuplicates(arr, key) {
//     if (!(arr instanceof Array) || key && typeof key !== 'string') {
//         return false;
//     }

//     if (key && typeof key === 'string') {
//         return arr.filter(function (obj, index, arr) {
//             return arr.map(function (mapObj) {
//                 return mapObj[key];
//             }).indexOf(obj[key]) === index;
//         });
//     } else {
//         return arr.filter(function (item, index, arr) {
//             return arr.indexOf(item) == index;
//         });
//     }
// }

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
	  	// if location and data match
	  	let uniqueLocs = removeDuplicates(data.data, 'camis');
	  	return uniqueLocs; 
	  })
	  .then( data => {
	  	// console.log(data); 
	  	
	    res.render('results', {
	    	data: data, 
	    	
	    	// address: `${data.data.building} ${data.data.street}, ${data.data.boro}, ${data.data.zipcode}`
	     }) 
	  })
	  .catch( err => {
	  	console.log(err)
	    	res.status(500).json(err)
	  })
}

restController.show = (req, res) => { 
console.log('inside search method')
	  axios({
	    method: 'get',
	    url: `https://data.cityofnewyork.us/resource/9w7m-hzhe.json?$q=${req.body.locationId}`,

	  })
	  .then( data => {
	  	console.log(`the data ${data.data}`, `https://data.cityofnewyork.us/resource/9w7m-hzhe.json?$q=${req.body.locationId}`,

)
	  	// console.log(data); 
	  	// res.send("This is the location")
	    res.render('location', {
	    	data: data.data, 
	     }) 
	  }) 
	  .catch( err => {
	  	console.log(err)
	    	res.status(500).json(err)
	  })
}


module.exports = restController; 