const input=require("readline-sync")

let n=input.questionInt("enter the number");
sum=0;
let i=1
while(i<=n){
    sum=sum+i**2;
    i++
}
console.log(sum)
