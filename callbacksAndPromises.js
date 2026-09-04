// callbacks

// const fs = require('fs');

// function callFun(fun){
//   fs.readFile('a.txt','UTF-8', function(err,data) {
//     fun(data)    
//   })
// }

// function print(data) {
//   console.log(data)
// }

// callFun(print)

// Promise

// const fs = require('fs');

// function readFun(){
//   return new Promise(function(resolve) {
//     fs.readFile('a.txt','UTF-8',function(err,data) {
//       resolve(data)
//     })
//   })
// }

// function print(data){
//   console.log(data)
// }
// readFun().then(print)

// callbacks

// const fs = require('fs');

// function callFun(fun){
//   fs.readFile('a.txt','UTF-8', function(err,data) {
//     fun(data)    
//   })
// }

// function print(data) {
//   console.log(data)
// }

// callFun(print)

// Promise

const fs = require('fs');

// function readFun(){
//   return new Promise(function(resolve) {
//     fs.readFile('a.txt','UTF-8',function(err,data) {
//       resolve(data)
//     })
//   })
// }

// function print(data){
//   console.log(data)o  
// }
// readFun().then(print)

function readtxt(){
  return new Promise(function(resolve){
    fs.readFile('a.txt','UTF-8',function(err,data) {
      setTimeout(()=>{
        resolve(data)
      },1000)
    })
  })
}

function logging(data){
  console.log(data)
}
readtxt().then(logging)