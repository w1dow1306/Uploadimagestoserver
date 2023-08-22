// const user = encodeURI("admin");
// const  pass = encodeURI("password3301")
// const uri = `mongodb+srv://${user}:${pass}@cluster0.945jjgi.mongodb.net/Images`;
// const MongoClient = require('mongodb');
// const multer = require('multer');
// const GridFsStorage = require('multer-gridfs-storage') 

// let storage = new GridFsStorage({  
//     url: uri,
//     file: (req, file) => {    
//            return {      
//                 bucketName: 'test',       
//                 //Setting collection name, default name is fs      
//                 filename: file.originalname     
//                 //Setting file name to original name of file    
//          }  
//    }
// }); 
// let upload = null; 


// storage.on('connection', (db) => {  
//     console.log("connected")
//     //Setting up upload for a single file  
//     upload = multer({    
//        storage: storage  }).single('file1');  
//   }); 

// function uploadFile(req, res){  
//   upload(req, res, (err) => {    
//     if(err){      
//       return res.render('index', {title: 'Uploaded Error', message: 'File could not be uploaded', error: err});    
//     }    
//     res.render('index', {
//       title: 'Uploaded', 
//       message: `File ${req.file.filename} has been uploaded!`});  
//   });
// };



