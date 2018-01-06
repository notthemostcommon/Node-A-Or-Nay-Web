const axios = require('axios');
const restController = {}; 

restController.index = (req, res) => {
  res.render('index')
  console.log("index rendered")
}

restController.search = (req, res) => {
  console.log('inside search method')
  axios({
    method: 'get',
    url: `https://data.cityofnewyork.us/resource/9w7m-hzhe.json?$$app_token=${process.env.API_KEY}`
  })
  .then( data => {
    // console.log('got this back', data)
    // res.json(data.data)
    res.render('index', {
      data: data.data
     })
  })
  .catch( err => {
  	console.log(err)
    res.status(500).json(err)
  })
}



module.exports = restController; 