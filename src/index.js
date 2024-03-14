const express = require('express')
const path = require('path')
const bcrypt = require('bcrypt')
const collection = require('./config')


const app = express();


//convert data into json
app.use(express.json())

app.use(express.urlencoded({extended:false}))


//use ejs as a view engine
app.set('view engine', 'ejs')
//statis
app.use(express.static('public'));

app.get("/", (req,res)=>{
    res.render("login")
})
app.get("/signup", (req,res)=>{
    res.render("signup")
})

//register user
app.post('/signup', async(req,res)=>{
   const data = {
    name: req.body.username,
    password: req.body.password
   }

   //check if user allready exist
   const existingUser = await collection.findOne({name: data.name})
   if(existingUser){
    res.send("the user is all ready exist. please choose a diffirent username!!")
   }else{
       //hash the password using bcrypt
       const sultRounds = 0;
       
       const hashedPassword = await bcrypt.hash(data.password, sultRounds)
       data.password = hashedPassword;


    const userdata = await collection.insertMany(data)
    console.log(userdata)
   }

   
})

//login user
app.post('/login', async (req,res)=>{
    try{
  const check = await collection.findOne({name: req.body.username})
  if(!check){
    res.send('username cannot found')
  }

  //compare the hash password from the database with the blane text
     const ispasswordMatch = await bcrypt.compare(req.body.password, check.password)
     if(ispasswordMatch){
        res.render("home")
     }else{
        req.send('wrong password')
     }

    }catch{
     res.send('wrong details')
    }
})



const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`server is running on port: ${PORT}`)
})