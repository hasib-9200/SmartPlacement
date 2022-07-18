const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql');
const cors = require('cors');
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)+"/client/build"));
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const db = mysql.createConnection({
    user:'anmstha',
    host:'spdatabaseserver.mysql.database.azure.com',
    password: 'SmartPlacement1',
    database:'sp_database',
    ssl: true
});

app.post('/register',(req,res)=>{
    const username = req.body.username;
    const user_password = req.body.password;  
    const access_lvl = req.body.accessLevel;
    const f_name = req.body.firstName;
    const l_name = req.body.lastName;

    db.query('CALL create_user(?, ?, ?, ?, ?)',[username, user_password,access_lvl,f_name,l_name],(err, result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("Values Inserted");
        }
    })
})

app.post('/login',(req,res)=>{
    const username = req.body.username;
    const user_password = req.body.password;  

    db.query("SELECT * FROM sp_user WHERE username = ? AND user_password= ?",[username, user_password],(err, result)=>{
        if(err){
            res.send({err:err});
        }
        if(result.length > 0){
            res.send(result);
        } else{
            res.send({message: "Wrong username/ password"});
        }
    })
});

app.post('/finduser',(req,res)=>{
    const username = req.body.username;
    console.log(username);

    db.query("SELECT * FROM sp_user WHERE username = ? ",[username],(err, result)=>{
        if(err){
            res.send({err:err});
        }
        if(result.length>0){
            res.send(result);
            console.log("anmol");
        } else{
            res.send({message: "Wrong username"});
        }
    })
});


app.post('/changePassword',(req,res)=>{
    const username = req.body.username;
    const user_password = req.body.password;  
    console.log(user_password);
    db.query("UPDATE sp_user SET user_passowrd=? WHERE username = ? ",[user_password,username],(err, result)=>{
        if(err){
            res.send({err:err});
        }
        if(result){
            res.send(result);
            console.log("anmol");
        } else{
            res.send({message: "Wrong username"});
        }
    })
});

app.listen(PORT,()=>{
    console.log("testing the server");
})
