const express = require('express');
let cors = require('cors');
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//app.use(express_static(__dirname+));

app.listen(PORT,(err)=>{
    if(err) return console.log("error en listen server ",err);
    console.log(`Server running on http://localhost:${PORT}`);
});
