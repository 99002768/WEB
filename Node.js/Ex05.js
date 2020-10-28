const events = require('events').EventEmitter;
let button = new events();
button.on("click",()=>{
    console.log("the obj was clicked");
})
button.on("dblclick",arg=>{
    console.log("event is handed on"+arg);
})
button.emit("click");
button.emit("dblclick","Button1")