var fruit="apple";
function addfruit(fname){
    var fruit=fname;
    console.log(fruit);
}
addfruit("mango");
console.log("the old fruit"+fruit);
let array=[123,125,129];
for(const element of array){
    console.log(element);
}
const getName=(v1,v2)=>v1+v2;
console.log(getName(150,120));
const strvalue='this is very large string which contains so many words that can string actually hols and will try this right now using jquery in compiler';
console.log(strvalue);
function emp(name,address){
    this.name=name;
    this.address=address;
}
//let temp=new emp("thrinath","knr"),
//name=temp.name;
//address=temp.address;
//console.log(`${name} comes from ${address}`);
let{name,address}=new emp("thrinath","knr");
console.log(`${name} comes from ${address}`);
