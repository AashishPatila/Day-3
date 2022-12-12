// Question 1

// let Addition = (x, y, calSub, calMul, calDiv) => {
//     console.log("The addition of x and y is ", x + y);
//     calSub(x, y, calMul, calDiv);
// }
// let Substracts = (x, y, calMul, calDiv) => {
//     console.log("The Substraction of x and y is ", x - y);
//     calMul(x, y, calDiv);
// }
// let Multiply = (x, y, calDiv) => {
//     console.log("The multiply of x and y is ", x * y)
//     calDiv(x, y);
// }
// let Divide = (x, y) => {
//     console.log("The division of x and y is ", x / y);
// }
// console.log(Addition(5, 5, Substracts, Multiply, Divide));

//Question 2

// // Q2. Do the previous question using the concept of Promise.

// const add = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(a + b);
//         }, 1000)
//     });
// }

// const Sub = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(a - b);
//         }, 1000)
//     });
// }

// const Multi = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(a * b);
//         }, 1000);
//     });
// }

// const Div = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(a / b);
//         }, 1000);
//     });
// }


// add(10, 10).then((sum) => {
//     console.log("The addition of a + b is ", sum);
//     return Sub(sum, 2);
// })
//     .then((Subs) => {
//         console.log("subtraction of a and b is " , subs)
//         return Multi(Subs, 2);
//     })
//     .then((Multis) => {
//         console.log("Multiply of a and b is ", Multis);
//         return Div(Multis, 2);
//     })
//     .then((Divide) => {
//         console.log("Divide of a and b is", Divide);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

    //Question 3

    // let promise1 = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve("Promises 1 resolve ");
    //     }, 1000);
    // });
    // let promise2 = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve("Promises 2 resolve ");
    //     }, 2000);
    // });
    // let promise3 = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve("Promises 3 resolve ");
    //     }, 3000);
    // });
    
    
    // Promise.all([promise1, promise2, promise3])
    // .then((values) => {
    //     console.log(values);
    // })
    // .catch((error) => {
    //     console.log(`Error : ${error}`);
    // });

    // Quation 4

    // async function element() {
    //     try {
    //       const promise = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //           reject("Promise rejected after 2000 milliseconds");
    //         }, 2000);
    //       });
    //       const result = await promise;
    //       console.log(result);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }    
    //   element();

      //Question 
      
      const program= ()=>{
        try {
        console.log('try block log') 
        } catch (error) {
            console.log(error.message)
        }finally{
        console.log('run everytime')
        }
    }
    program();