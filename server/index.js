const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    // user:'root',
    // host:'localhost',
    // password: '123456789',
    // database:'smartplacement'
    user:'azure',
    host:'127.0.0.1',
    password: '6#vWHD_$',
    database:'localdb'
});

app.post('/register',(req,res)=>{
    console.log(req.body);
    // const username = req.body.username;
    // const password = req.body.password;
    const username = req.body.password;
    const password = req.body.password;
    const access = 1;
    const fname = "Anmol";
    const lname = "Shrestha";


    db.query('INSERT INTO sp_user(username, password) VALUES (?,?)',[username, password,access,fname,lname],(err, result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("Values Inserted");
        }
    })
})

app.listen(3001,()=>{
    console.log("testing the server");
})
