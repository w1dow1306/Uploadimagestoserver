const user = encodeURI("admin");
const  pass = encodeURI("password3301")
const uri = `mongodb+srv://${user}:${pass}@cluster0.945jjgi.mongodb.net/Images`;
const MongoClient = require('mongodb');
const multer = require('multer');
const {GridFsStorage} = require('multer-gridfs-storage');

const storage = new GridFsStorage({   url:uri,
file:(req,file)=>{
  return{
    bucketName:'test',
    filename: req.body.filename
  }
} });

storage.on('connection',(db)=>{
  console.log("Connection_done")
})
let upload = multer({ storage: storage  })
module.exports=upload

function uploadFile(req, res){  
  upload(req, res, (err) => {    
    if(err){      
      return res.render('index', {title: 'Uploaded Error', message: 'File could not be uploaded', error: err});    
    }    
    res.render('index', {
      title: 'Uploaded', 
      message: `File ${req.file.filename} has been uploaded!`});  
  });
};