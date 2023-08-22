console.clear()
const upload = require("./database.js")
const express = require('express');
const formidable = require('formidable');
const bodyparser = require('body-parser')
const fs = require('fs');
const app = express();
app.use(bodyparser.urlencoded({extended:false}))
const port = 3000;
app.use(express.static(__dirname))
app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/index.html")
  res.json({"Page":"availabe"})
})
app.post('/upload',upload.single('file1'),(req, res) => {
  console.log("FIle is being uploaded")
  filename = req.body.filename;
  res.cookie('id',filename)
  res.send(200)
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

