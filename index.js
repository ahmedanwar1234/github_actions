const express= require('express');

const app= express();
const port=3000;

console.log("app runner")

app.get('/',(req,res)=>{


    return res.send("fucker proo")
})


app.listen(port, () => {
    console.log(`Server is running at fucker http://localhost:${port}`);
  });
  