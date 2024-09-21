// const input=require ("readline sync")
// Add on the object
// const bike={Name :"Pulsar",
//             Brand :"Bajaj",
//            }
//           bike  ['Power']= '12'
//             console.log(bike);


// Another type to take object
// const MyBike = new Object
// MyBike.name='activa'
// MyBike.brand='honda'
// MyBike.power='100cc'
// console.log(MyBike);

// another method

// const MyBike ={

// }
// MyBike.name='activa'
// MyBike.brand='honda'
// MyBike.power='100cc'
// console.log(MyBike);



// for printing in series the keys
// const MyBike={Name:'activa',
//               Brand:'Honda',
//               Power:{low:'100cc',
//                       High:'125cc'},
//               Colour:{light:'white',
//                       Dark:'maroon'
//               }        
//               }

// for(let Keys in MyBike){
//     console.log(Keys)      //console.log(Object.keys(objectname)); for key only
// }                          //console.log(Object.values(objectname))  for values only


// for printing the values of key in series
// const MyBike={Name:'activa',
//     Brand:'Honda',
//     Power:{low:'100cc',
//             High:'125cc'},
//     Colour:{light:'white',
//             Dark:'maroon'
//     }        
//     }
//     for(let keys in MyBike){
//         console.log(MyBike[keys]);
//     }

// const MyBike={Name:'activa',
//     Brand:'Honda',
//     Power:{low:'100cc',
//             High:'125cc'},
//     Colour:{light:'white',
//             Dark:'maroon'
//     }        
//     }
//     for(let keys in MyBike){
    //     console.log(keys,':',MyBike[keys]);
    // }



// it was for accesing inside a inside a object
    // const MyBike={Name:'activa',
    //     Brand:'Honda',
    //     Power:{low:'100cc',
    //             High:'125cc'},
    //     Colour:{light:'white',
    //             Dark:'maroon'
    //     }        
    //     }
    //      for(let keys in MyBike){

    //   }
    //   console.log( MyBike.Power.High)



      // const MyBike={Name:'activa',
      //   Brand:'Honda',
      //   Power:{low:'100cc',
      //           High:'125cc',
      //           mid:'115cc'},
      //   Colour:{light:'white',
      //           Dark:'maroon'
      //   }  
             
      //   }
      //   MyBike ['price']=[14,2,24]
        
       
      //   console.log(MyBike)
        
      //   for (const price of MyBike.price) {
      //       console.log(price);}





//  Accesing a element in array through 'of' loop.] 
// const arr=[1,2,34,54,3]

// for(const value of arr){
//   if(value==3){
//   console.log(arr[3]);
//   } 
// }
// // console.log(arr);
    

// Example: Removing Elements
// javascript
// Copy code

// let fruits = ['Apple', 'Banana', 'Cherry'];

// // Remove 'Banana' (1 element) at index 1
// let removedFruits = fruits.splice(1, 1);

// console.log(fruits); // Output: ['Apple', 'Cherry']
// console.log(removedFruits); // Output: ['Banana']




// Replacing Elements
// javascript
// Copy code


// let fruits = ['Apple', 'Banana', 'Cherry'];

// // Replace 'Banana' with 'Date' and 'Elderberry' at index 1
// fruits.splice(1, 1, 'Date', 'Elderberry');

// console.log(fruits); // Output: ['Apple', 'Date', 'Elderberry', 'Cherry']

// Add, Remove, and Replace Elements
// You can combine these operations to add, remove, and replace elements simultaneously.

// javascript
// Copy code

// let fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

// // Remove 2 elements starting from index 1, and add 'Fig' and 'Grape'
// let removedFruits = fruits.splice(1, 2, 'Fig', 'Grape');

// console.log(fruits); // Output: ['Apple', 'Fig', 'Grape', 'Date', 'Elderberry']
// console.log(removedFruits); // Output: ['Banana', 'Cherry']