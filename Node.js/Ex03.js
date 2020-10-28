const fs=require('fs');
const data=fs.readFileSync("market.js","utf-8");
/*console.log(data);
fs.readFile("Ex03.js",'utf-8',(err,data)=>{
    if(err!=null)console.log(err.message);
    else{
        console.log(data);
    }
});
 console.log("File reading is going on");*/
 const filename="temp.txt";
 const emp='123,thrinath,knr,6200';
 fs.writeFileSync(filename,emp,'utf-8');
 const emp2='124,ram,kerala,7500'
 fs.appendFileSync(filename,emp,'utf-8');