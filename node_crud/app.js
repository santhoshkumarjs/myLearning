const express = require('express');
const parser = require('body-parser');
const product = require('./routes/product.route');
const app = express();

app.use('/product',product);
const port = 8082;

app.listen(port,()=>{
    console.log("Server is running in this port :",port);
})