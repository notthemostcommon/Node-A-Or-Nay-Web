const axios = require('axios');
const Help = require('../models/help'); 
const restController = {}; 

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
	   	// url: `https://data.cityofnewyork.us/resource/9w7m-hzhe.json?`,

	  })
	  .then( data => {
	    console.log('got this back', data.data)
	    
	    // res.send("this is where results go")
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