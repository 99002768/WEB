/*var emp={}
emp.empId=68;
emp.empName="3nath";
emp.empAddress="karimnagar";
emp.empSalary=30000;
console.log(empId);
console.log(empName);
console.log(empAddress);
console.log(empSalary);
var emp2=emp;
emp.empAddress="mysore"//two objects sharings same space reflects the changes./8
console.log(empId);*/
let employee=function(id,name,address){
    this.empId=id;
    this.empName=name;
    this.empAddress=address;
    this.display=function()
    {
        console.log("the Id:"+this.empId);
        console.log("the Name:"+this.empName);
        console.log("the Address:"+this.empAddress);
    }
}
let emp1=new employee(123,"sri","nzb");
let emp2=new employee(124,"sai","kmp");
let emp3=new employee(125,"i","jag");
emp1.display();
emp2.display();
emp3.display();