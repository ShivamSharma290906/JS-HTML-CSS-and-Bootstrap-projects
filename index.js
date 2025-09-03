import express from "express"
import bodyParser from "body-parser";
import { getDefaultAutoSelectFamilyAttemptTimeout } from "net";

const app = express();
const port = 500;

const todoItems = [];

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",(req,res)=>{
    res.render("index.ejs", { items: todoItems });
})

app.post("/submitit",(req,res)=>{
    const newItem = req.body["todo"];
    todoItems.push(newItem);
    res.redirect("/");
})

app.post("/deleteit",(req,res)=>{
    const index = parseInt(req.body["indexItem"])
    if(index>=0 && index<todoItems.length){
        todoItems.splice(index,1);
    }
    res.redirect("/");
})

app.listen(port,()=>{
    console.log(`serving to port ${port}`);
})