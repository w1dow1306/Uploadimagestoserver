let fname="5.png"                      //<<<<<<------- name of the file here
let fileurl = "http://localhost:3000/images"+fname


let fnname = fname;



url = "http://localhost:3000/upload"

function srcToFile(src, fileName, mimeType){
    return (fetch(src)
        .then(function(res){return res.arrayBuffer(); console.log("file fetched")})
        .then(function(buf){return new File([buf], fileName, {type:mimeType});})
    );
}
const y = new Date()
x = srcToFile(fileurl, fnname, 'image/jpeg')
.then(function(file1){
    var fd = new FormData();
    fd.append("filename",fnname)
    fd.append("idoffile",y)
    fd.append('file1', file1);
    console.log(fd)
    fetch(url, {
       method: 'POST',
       body: fd,
     })
       .then(response => response.text())
       .then(data => console.log(data))
       .catch(error => console.error(error));
})
.then(function(res){
})
.catch(console.error)