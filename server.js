const express = require("express");
const fileupload = require("express-fileupload");
const cors = require("cors");
const fs = require('fs');
const app = express();

app.use(cors());
app.use(fileupload());
app.use(express.static("files"));

app.post("/upload", (req, res) => {
  const newpath = __dirname + "/files/";
  const file = req.files.file;
  const filename = req.body.fileName;
  const uploadpath = newpath + filename;
  file.mv(uploadpath)
  res.send({
    status: true,
    message: 'File is uploaded',

});
    
});

app.listen(4000, () => {
  console.log("Server running successfully on 4000");
});