const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const path=require('path')
const cors=require('cors')
const s1=require('./schemas/calculator');
require("dotenv").config();
const app=express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors({origin: true, credentials: true}))

//connection
mongoose.connect(process.env.mongo_db,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('connection successful')

}).catch((error)=>{
    console.log('some error',error)
})

app.post('/setres',async(req,res)=>{
    try{
        await s1.create({
            result:req.body.result
        })
        console.log('created');
    }catch(e){
        console.log(e);
    }
})

app.get('/last',async(req,res)=>{
    try{
        const resu=await s1.find().limit(1).sort({$natural:-1});
        res.send(resu);
    }
    catch(e){
        console.log(e);
    }
})

app.listen(8001,(req,res)=>{
    console.log("server running on 8001");
})