const express = require("express");
const fileupload = require("express-fileupload");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(fileupload());
app.use(express.static("files"));

app.get('/',(req,res)=>{
    res.send('Hello');
})

app.post('/upload', (req,res)=>{
    const newPath = __dirname + "/files/";
    const file = req.files.file;
    const filename = file.name;

    file.mv(`${newPath}${filename}`,(err)=>{
        if(err){
            res.status(500).send({message: "File upload failed" });
        }
        res.status(200).send({message: "File Uploaded"});
    });
});

app.listen(4000, ()=>{
    console.log("Server is up on 4000")
})