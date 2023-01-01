const getData = require('./notionAPI/notion')
const express = require('express');
const app = express();

//for evry element of the array, create a div

app.use(express.static('public')); //serves public folder

const port = 8080;

//function that runs the server
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

//slash route?
app.get('/getdata', async (req, res) => {
    const nCompanies = await getData();
    console.log(nCompanies);
    res.send(nCompanies);
});