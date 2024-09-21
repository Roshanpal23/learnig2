const input = require('readline-sync');
// let n=input.questionInt("Enter the length of the array: ");
// let arr1=[];
// let arr2=[];
// for(let i=0;i<n;i++){
//     arr1[i]=input.questionInt(`Enter the ${i+1} element of arr1: `);

// }
// for(let j=0;j<n;j++){
//     arr2[j]=input.questionInt(`Enter the ${j+1} element of arr2: `)
// }
// console.log(arr1,arr2);
// for(i=0;i<n;i++){ 
    
//     if(arr1[i]%2==0 && arr2[i]%2==0){
//         console.log("Dono even hai");
//     }else{
//         console.log("Dono even nhi hai");
//     }
    
// }



// var i=0

// {
//     var i=5
//      i=9
// //     console.log(i)
//  }
// // var i=3
// console.log(i);






// function array(N,callback){
//     arr=[]
//     for (leti=0 ,i<N ;i++) {
//         arr[i]=int()

//     }
//     return cancelIdleCallback(arr);
// }


// function sum(arr){
// sum=0;
// for(element of arr){
//     sum+=element;
// }
// return sum;
// }
// let N=int()
// console.log(array(N,sum));


// let n = input.questionInt("enter the data")
// let arr =[];


// for(let i=0; i<n;i++)
//     {
// let name=input.questionInt("enter the name: ")
// let age=input.questionInt("enter the age: ")
// arr.push("Name =",name,"Age = ",age)
// }



// const object = [
//     { name: 'a' },
//     { bucks: 'b' },
//     { nulled: 'c' }
// ];

// const target = 'c';

// function deleteName(object, target) {
//     for (let key of object) {
//         for (let k in key) {
//             if (key[k] === target) {
//                 object.splice(object.indexOf(key), 1);
//                 break; 
//             }
//         }
//     }
//     return object;


// let userInput = readline.question("Enter target value: ");
// console.log(deleteName(object, userInput));



// let N=input.questionInt('enter the value of N')
// function checkeven(N){
// arr1=[];
// arr2=[];
// for(let i=0;i<N;i++){
//     arr1[i]=input.questionInt("enter the number of arr1");
//     arr2[i]=input.questionInt('enter the number of arr2')
// }
// console.log(arr1,'\n',arr2)
// for(i=0;i<arr1.length;i++){
//     for(let ele of arr2){
//         if(arr1[i]%2==0 && ele%2==0){
//             console.log('yes both are even');
//         }
//         else{
//             console.log('no both are even ');
//         }
//     }
// }
// }
// checkeven(N)


let n=input.questionInt("enter the value of n : ")
 function addobject(n){
    let arr =[];
    for(let i=0;i<n;i++){
        obj={};
        obj.name=input.question("name : ");
        obj.class=input.question("enter class")
        arr.push(obj)
        console.log(obj);
    }
    // console.log(arr);
}
addobject(n)