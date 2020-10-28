var flipkart=require("./market")();
flipkart.addRecord({"id":111,"name":"oppo","price":13500});
const data=flipkart.getAll();
for(const iterator of data){
    console.log(iterator)
}