class Account{
    constructor(no,name,amount){
        this.accNo=no;
        this.name=name;
        this.balance=amount;
    }
credit(amount){
    this.balance+=amount;
}
debit(amount){
    if(this.balance<amount)
        throw "insufficient funds";
    this.balance-=amount;
}
}
class SBAccount extends Account{
    calcInterest(){
        const principle=this. balance;
        const RateofInterest=6.5/100;
        const year=1/4;
        const interest=(principle*RateofInterest*year);
        this.credit(interest);
    }
}
try{
    const acc=new Account(123,"thrinath",50000);
    acc.credit(5000);
    acc.debit(5000);
    console.log("the balance"+acc.balance);

}
catch(err){
    console.log(err);
}