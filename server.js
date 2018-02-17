const express = require('express');
const app = express();


app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');

app.get('*', (req, res) => {
    res.render('index');
});

var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log(`Server Started on port ${port}`);
});