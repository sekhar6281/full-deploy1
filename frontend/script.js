const API="https://notes-backend-gekb.onrender.com"

async function loadNotes(){

const res=await fetch(API+"/notes")
const data=await res.json()

const list=document.getElementById("notes")
list.innerHTML=""

data.forEach(note=>{
const li=document.createElement("li")
li.innerText=note
list.appendChild(li)
})

}

async function addNote(){

const text=document.getElementById("noteInput").value

await fetch(API+"/notes",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({text})
})

loadNotes()

}

loadNotes()
