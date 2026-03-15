const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

let notes=[]

app.get("/",(req,res)=>{
res.send("Backend API Running Successfully")
})

app.get("/notes",(req,res)=>{
res.json(notes)
})

app.post("/notes",(req,res)=>{
notes.push(req.body.text)
res.json({message:"note added"})
})

app.listen(5000,()=>{
console.log("Server running")
})
