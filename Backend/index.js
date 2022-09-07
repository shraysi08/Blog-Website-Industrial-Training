const express = require('express')
const fs = require('fs');
//const { homedir } = require('os');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname,'../public')))
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello World!');
})
// app.get('/contactus',(req,res)=>{
//   res.sendFile(contactus.html);
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

console.log("git test");





