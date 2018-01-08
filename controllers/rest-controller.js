const axios = require('axios');
const Help = require('../models/help'); 
// const removeDuplicates = require('removeDuplicates');
const restController = {}; 

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

restController.index = (req, res) => {
  res.render('index')
  console.log("index rendered")
}
// render data from DB 
// restController.helpIndex = (req,res) => {
//   Help.findAll()
//     .then(help => {
//       res.render('partials/nav', { 
//         message:'ok',
//         help:help
//       })
//     })
// }


// render data from API to results page 
restController.search = (req, res) => {
	  console.log('inside search method')
	  axios({
	    method: 'get',
	    url: `https://data.cityofnewyork.us/resource/9w7m-hzhe.json?$q=${req.body.search}`,

	  })
	  .then(data => {
	  	
	  	// create empty array 
	  	 
	  	// look through array and push most recent in
	  	// let recent = data.data[0].camis; 

	  	let uniqueLocs = removeDuplicates(data.data, 'camis');



	  	 
	  	console.log("this is data", uniqueLocs); 
	  	
	  })
	  .then( data => {
	    res.render('results', {
	    	data: data.data
	     })
	  })
	  .catch( err => {
	  	console.log(err)
	    	res.status(500).json(err)
	  })
}



module.exports = restController; 