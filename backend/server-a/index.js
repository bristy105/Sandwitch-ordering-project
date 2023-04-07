const express= require('express');
const bodyParser= require('body-parser')
const cors = require('cors');

const app= express();



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cors());

//const orders =[];
app.get("/order",(req,res)=>{
  
// check req 

// mqtt send 

// mqtt ready

// send res
})

app.post("/order",(req,res)=>{
    
    const order= req.body;
    //orders.push(order);
    //console.log(order);
    //res.status(200).send(order);
    
    //check order is empty or not, if not empty
    //send order to rabbit mq
    if(Object.keys(order).length==0) {//empty
        console.log(`(${order} is empty)`);
        res.status(400).send('order is empty, please send a valid order')
    }
    else{
        res.status(200).send('Your order is now in process')
    }
  



})
app.get("/order/:id",(req,res)=>{

//res.send(`Your ${req.params.id} order is processing`);

// check req 

// mqtt send 

// mqtt ready

// send res

res.json('Your sandwitch is ready')})




const port= 8080;

app.listen(port,()=>{
    console.log('Listenning on port', port);
})