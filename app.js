const express = require("express");
const app = express();
const port = process.env.port | 3001

app.get("/", function(req, res){
  res.status(200).send("cd-ec2-1 IAM Bug Fix and Running! - testServer01 - BITBUCKET_BUILD_NUMBER");
});

app.listen(port,()=>{
  console.log(`Node server started on port : ${port}`)
});
q
