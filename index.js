import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3003;
const API_URL = "https://secrets-api.appbrewery.com/"

const yourBearerTok = "";

const config ={
    headers : {authentication: `Bearer ${yourBearerTok}`}
}
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.render("index.ejs",{content:"Wating for data..."})
})
app.post("/get-secret",async(req,res)=>{
    const searchid = req.body.id;
    try{
        const result = await axios.get(API_URL+"/secretes" , searchid,config)
        res.render("index.ejs",{content: JSON.stringify(result.data)})
    }catch(error){
        res.render("index.ejs",{content: JSON.stringify(error.response.data)})
    }
})
app.post("/post-secret",async(req,res)=>{
    try{
        const result = await axios.post(API_URL + "/secretes",req.body,config);
        res.render("index.ejs", {content:JSON.stringify(result.data)})
    }catch(error){
        res.render("index.ejs",{content:JSON.stringify(error.response.data)})
    }
})
app.post("/put-secret",async(req,res)=>{
    const searchId = req.body.id;
    try{
        const result = await axios.put(API_URL + "/secretes"+searchId,req.body,config)
         res.render("index.ejs",{content: JSON.stringify(result.data)})
    }
    catch(error){
        res.render("index.ejs",{content: JSON.stringify(error.response.data)})
    }
})
app.post("/patch-secret",async(req,res)=>{
    const searchId = req.body.id;
    try{
        const result = await axios.patch(API_URL+"/secretes"+ searchId ,req.body,config);
        res.render("index.ejs",{content: JSON.stringify(result.data)})
    }catch(error){
        res.render("index.ejs",{content: JSON.stringify(error.response.data)})
    }
})
app.post("/delet-secret",async(req,res)=>{
    const searchId = req.body.id;
    try{
        const result =await axios.delete(API_URL+"/secretes"+searchId.config)
        res.render("index.ejs",{content: JSON.stringify(result.data)})
    }
    catch(error){
        res.render("index.ejs",{content: JSON.stringify(error.response.data)})
    }
})
app.listen(port,()=>{
    console.log(`Solving on port${port}`)
})