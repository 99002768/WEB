const readline=require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
})
readline.question("what is ur name",answer=>{
    console.log(answer);
    readline.close();
})
const os=require('os');
console.log(os.hostname());
console.log(os.type());
console.log(os.uptime()/3600);