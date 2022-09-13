const event = require('events');

const eventObject = new event.EventEmitter();

let connected = function(){
    console.log("function call");
    eventObject.emit('data_received');
}
eventObject.on('data_received',function(){
    console.log("data_received call");
});
eventObject.on('connectDb',connected);
eventObject.emit('connectDb');
console.log("first executed");