const express = require('express');

const app = express();

const port = "8000";

// post
app.get("/post", (req, res) => {
    res.json({message:"Hello World!"});
});
// update
app.get("/update", (req, res) => {
    res.json({message:"Hello World!"});
});
// get
app.get("/get", (req, res) => {
    res.json({message:"Hello World!"});
});

app.listen(port, () => console.log("test au port" + port));

//qqchose.watch().on('change', data => console.log('data');

//schema
//new mongoose.Schema({
// });
/*


*/