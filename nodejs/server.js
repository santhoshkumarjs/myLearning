const http = require('http');
const express = require('express');
http.createServer((request,response)=>{
 response.writeHead(200,{'Content-type':'text/plain'});
 response.end("sample");
}).listen(8001);