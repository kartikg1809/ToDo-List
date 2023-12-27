import express from "express";
import bodyParser from "body-parser";

const app = express();
var items=[];
let works=[];
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) =>{
    let date=new Date();
    const options = { weekday: 'long', day: 'numeric', month: 'long'};
    date=date.toLocaleDateString('en-us', options);
    res.render("index.ejs",{Type:date,tasks:items});
});
app.get('/work', (req, res) =>{
    let date=new Date();
    res.render("index.ejs",{Type:"Work List",tasks:works});
});

app.post('/', (req, res) =>{
    var task=req.body.newTask;
    if(req.body.list==="Work List"){
        works.push(task);
        res.redirect("/work")
    }
    items.push(task);
    res.redirect('/');
});

app.listen(3000,()=>{
    console.log('Server listening on port 3000');
})