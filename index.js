// Write your JavaScript here and click Run
// const user_name = "sam";
// console.log(user_name);

// let gender = "male";

// if ((gender = "male")) {
//   console.log("hello");
// } else if ((gender = "female")) {
//   console.log("hii");
// } else {
//   console.log("default");
// }

// let count = 0;

// for (let i = 0; i <= 1000; i++) {
//   console.log(count);
//   count++;
// }

// const a = 10;
// console.log("the value of the variable is " + a);

// let var_arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let new_arr = [];
// for (let i = 0; i < var_arr.length; i++) {
//   if ((var_arr[i])%2==0) {
//     // console.log(var_arr[i]);
//   }
// }

// let largest = 0;
// for( let i = 0; i< var_arr.length; i++){
//   if (var_arr[i]> largest){
//     largest = var_arr[i];
//   }
// }
// console.log(largest);

// objects

// let users = {
//   user1:{
//     fname:'Nutan',
//     age:23,
//     gender: "male"
//   },
//   user2:{
//     fname:'Sam',
//     age:23,
//     gender:'female'
//   }
// }

// console.log(users.user1.fname)
// console.log(users['user1']['fname'])

// let users = [{
//   fname:"Sam",
//   age:23,
//   gender: 'female'
// },{
//   fname:'Nutan',
//   age:23,
//   gender:'male'
// }]

// for(let i =0; i<users.length;i++){
//   if(users[i]['gender']=='female'){
//     console.log(users[i]['fname'])
//   }
// }

// reversing the elements in an array:

// let arr= [1,2,3,4,5,6,7,8];
// let temp;
// for(let i = 0; i<arr.length/2; i++){
//   temp = arr[i]
//   arr[i] = arr[arr.length-i-1]
//   arr[arr.length-i-1]=temp
// }
// console.log(arr)
// let j;
// for(let i = 0; i< arr.length/2; i++){
//   j = arr.length-i-1;
//   [arr[i], arr[j]]= [arr[j],arr[i]];
// }
// console.log(arr)

// Functions:
// function sum(a,b){
//   return a+b;
// }

// const value = sum(6,7);
// console.log(value)

// function sum(a,b){
//   let result = a+b;
//   return result;
// }
// function display_result(data){
//   console.log("The sum of the nums is: " + data);
// }

// sum(6,7)

// Callbacks:

// function print(data){
//   console.log(data);
// }

// function sum(a,b,callback){
//   let result = a+b;
//   callback(result);
// }

// sum(6,7,print);

// function sum( a,b,callback){
//   result = a+b;
//   callback(result);
// }
// sum(6,7, (result)=>{
//   console.log(result);
// });

// calculate sum or sub based on the requirements:

// function cal(a,b,callback){
//   console.log(callback(a,b));
// }

// function sum(a,b){
//   return a+b;
// }

// function sub(a,b,c){
//   return a-b;
// }

// cal(6,7,sub);


// function sum(num1, num2) {
// let result = num1 + num2;
// return result;
// }

// function displayResult(data) {
// console.log("Result of the sum is : " + data);
// return data;
// }

// function displayResultPassive(data) {
// console.log("Sum's result is : " + data);
// }

// console.log(displayResult(sum(3, 5)));


// COUNTER FROM 30 TO 0

// let count = 10;

// function counter_(){
//   console.clear();
//   console.log(count--);
 
//   if (count == 0){
//     clearInterval(interval)
//   }
// }

// let interval = setInterval(counter_, 500);

// let curr_time = new Date().toLocaleTimeString('en-IN',{timeZone:'Asia/Kolkata'});

// function time_(){
//   console.clear();
//   console.log(curr_time);
//   curr_time = new Date().toLocaleTimeString('en-IN',{timeZone:'Asia/Kolkata'});
// }

// let Interval = setInterval(time_,1*1000);

// console.log('Sangamesh'.indexOf('gamesh'));
// console.log('Sangamesh San'.lastIndexOf('San'));
// console.log('Sangamesh'.replace('amesh',' and Sunny'));
// console.log('Sangamesh'.slice(2,6));
// console.log('Sangamesh'.repeat(3))

// parsing the string into int

// let value = '21';
// console.log(typeof(value))
// value = parseInt(value)
// console.log(value)
// console.log(typeof(value))
// console.log(parseInt('42ppxdvasf'))


// Arrays:

// arr = [1,2,3]
// arr.push(4)
// console.log(arr)

// arr.pop()
// console.log(arr)

// arr.shift()
// console.log(arr)

// arr.unshift(20)
// console.log(arr)

// arr = [1,2,3,4,5,6,7];

// function logfun(str){
//   console.log(str);
// }

// arr.forEach(logfun);

// class Animal {
  
//   constructor(fname, age, sound){
//     this.fname = fname;
//     this.age = age;
//     this.sound = sound;
//   }
//   speak(){
//     console.log(this.sound);
//   }
//   static type(){
//     console.log('This is an Animal')
//   }
// }

// let cat = new Animal('tom', 3, 'meow')
// let doggy = new Animal('tommy', 10, 'bark');
// doggy.speak()
// cat.speak()
// Animal.type()

// let curr_date = new Date();
// console.log(curr_date.getMonth()+1)
// console.log(curr_date.getFullYear())

// function exec(){
//   let a = 0;
//   for( let i = 0; i<1000000000000000000000; i++){
//     a = a+i
//   }
//   return a;
// }

// let btime = new Date();
// let btime_ = btime.getTime();
// console.log(btime_);
// console.log(exec());
// let atime = new Date();
// let atime_ = atime.getTime();
// console.log(atime_)

// function callingSum(){
//   sum = 0
//   for(let i = 0; i< 10; i++){
//     sum +=i
//   }
//   return sum
// }

// function callingSum1000(){
//    console.log(callingSum())
// }

// function print(){
//   console.log('2th Hello')
// }

// console.log('calling function')

// setTimeout(callingSum1000, 1000)

// console.log('Hello')

// setTimeout(print,600)
// console.log('after 600 ms')

// setTimeout(print, 2000)
// console.log('after 2000 ms')

// const fs = require("fs");
// fs.readFile('a.txt', 'UTF-8',function(err,data){
//   console.log(data)
})
// Write your JavaScript here and click Run
// const user_name = "sam";
// console.log(user_name);

// let gender = "male";

// if ((gender = "male")) {
//   console.log("hello");
// } else if ((gender = "female")) {
//   console.log("hii");
// } else {
//   console.log("default");
// }

// let count = 0;

// for (let i = 0; i <= 1000; i++) {
//   console.log(count);
//   count++;
// }

// const a = 10;
// console.log("the value of the variable is " + a);

// let var_arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let new_arr = [];
// for (let i = 0; i < var_arr.length; i++) {
//   if ((var_arr[i])%2==0) {
//     // console.log(var_arr[i]);
//   }
// }

// let largest = 0;
// for( let i = 0; i< var_arr.length; i++){
//   if (var_arr[i]> largest){
//     largest = var_arr[i];
//   }
// }
// console.log(largest);

// objects

// let users = {
//   user1:{
//     fname:'Nutan',
//     age:23,
//     gender: "male"
//   },
//   user2:{
//     fname:'Sam',
//     age:23,
//     gender:'female'
//   }
// }

// console.log(users.user1.fname)
// console.log(users['user1']['fname'])

// let users = [{
//   fname:"Sam",
//   age:23,
//   gender: 'female'
// },{
//   fname:'Nutan',
//   age:23,
//   gender:'male'
// }]

// for(let i =0; i<users.length;i++){
//   if(users[i]['gender']=='female'){
//     console.log(users[i]['fname'])
//   }
// }

// reversing the elements in an array:

// let arr= [1,2,3,4,5,6,7,8];
// let temp;
// for(let i = 0; i<arr.length/2; i++){
//   temp = arr[i]
//   arr[i] = arr[arr.length-i-1]
//   arr[arr.length-i-1]=temp
// }
// console.log(arr)
// let j;
// for(let i = 0; i< arr.length/2; i++){
//   j = arr.length-i-1;
//   [arr[i], arr[j]]= [arr[j],arr[i]];
// }
// console.log(arr)

// Functions:
// function sum(a,b){
//   return a+b;
// }

// const value = sum(6,7);
// console.log(value)

// function sum(a,b){
//   let result = a+b;
//   return result;
// }
// function display_result(data){
//   console.log("The sum of the nums is: " + data);
// }

// sum(6,7)

// Callbacks:

// function print(data){
//   console.log(data);
// }

// function sum(a,b,callback){
//   let result = a+b;
//   callback(result);
// }

// sum(6,7,print);

// function sum( a,b,callback){
//   result = a+b;
//   callback(result);
// }
// sum(6,7, (result)=>{
//   console.log(result);
// });

// calculate sum or sub based on the requirements:

// function cal(a,b,callback){
//   console.log(callback(a,b));
// }

// function sum(a,b){
//   return a+b;
// }

// function sub(a,b,c){
//   return a-b;
// }

// cal(6,7,sub);


// function sum(num1, num2) {
// let result = num1 + num2;
// return result;
// }

// function displayResult(data) {
// console.log("Result of the sum is : " + data);
// return data;
// }

// function displayResultPassive(data) {
// console.log("Sum's result is : " + data);
// }

// console.log(displayResult(sum(3, 5)));


// COUNTER FROM 30 TO 0

// let count = 10;

// function counter_(){
//   console.clear();
//   console.log(count--);
 
//   if (count == 0){
//     clearInterval(interval)
//   }
// }

// let interval = setInterval(counter_, 500);

// let curr_time = new Date().toLocaleTimeString('en-IN',{timeZone:'Asia/Kolkata'});

// function time_(){
//   console.clear();
//   console.log(curr_time);
//   curr_time = new Date().toLocaleTimeString('en-IN',{timeZone:'Asia/Kolkata'});
// }

// let Interval = setInterval(time_,1*1000);

// console.log('Sangamesh'.indexOf('gamesh'));
// console.log('Sangamesh San'.lastIndexOf('San'));
// console.log('Sangamesh'.replace('amesh',' and Sunny'));
// console.log('Sangamesh'.slice(2,6));
// console.log('Sangamesh'.repeat(3))

// parsing the string into int

// let value = '21';
// console.log(typeof(value))
// value = parseInt(value)
// console.log(value)
// console.log(typeof(value))
// console.log(parseInt('42ppxdvasf'))


// Arrays:

// arr = [1,2,3]
// arr.push(4)
// console.log(arr)

// arr.pop()
// console.log(arr)

// arr.shift()
// console.log(arr)

// arr.unshift(20)
// console.log(arr)

// arr = [1,2,3,4,5,6,7];

// function logfun(str){
//   console.log(str);
// }

// arr.forEach(logfun);

// class Animal {
  
//   constructor(fname, age, sound){
//     this.fname = fname;
//     this.age = age;
//     this.sound = sound;
//   }
//   speak(){
//     console.log(this.sound);
//   }
//   static type(){
//     console.log('This is an Animal')
//   }
// }

// let cat = new Animal('tom', 3, 'meow')
// let doggy = new Animal('tommy', 10, 'bark');
// doggy.speak()
// cat.speak()
// Animal.type()

// let curr_date = new Date();
// console.log(curr_date.getMonth()+1)
// console.log(curr_date.getFullYear())

// function exec(){
//   let a = 0;
//   for( let i = 0; i<1000000000000000000000; i++){
//     a = a+i
//   }
//   return a;
// }

// let btime = new Date();
// let btime_ = btime.getTime();
// console.log(btime_);
// console.log(exec());
// let atime = new Date();
// let atime_ = atime.getTime();
// console.log(atime_)

// function callingSum(){
//   sum = 0
//   for(let i = 0; i< 10; i++){
//     sum +=i
//   }
//   return sum
// }

// function callingSum1000(){
//    console.log(callingSum())
// }

// function print(){
//   console.log('2th Hello')
// }

// console.log('calling function')

// setTimeout(callingSum1000, 1000)

// console.log('Hello')

// setTimeout(print,600)
// console.log('after 600 ms')

// setTimeout(print, 2000)
// console.log('after 2000 ms')

// const fs = require("fs");
// fs.readFile('a.txt', 'UTF-8',function(err,data){
//   console.log(data)
})
// Write your JavaScript here and click Run
// const user_name = "sam";
// console.log(user_name);

// let gender = "male";

// if ((gender = "male")) {
//   console.log("hello");
// } else if ((gender = "female")) {
//   console.log("hii");
// } else {
//   console.log("default");
// }

// let count = 0;

// for (let i = 0; i <= 1000; i++) {
//   console.log(count);
//   count++;
// }

// const a = 10;
// console.log("the value of the variable is " + a);

// let var_arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let new_arr = [];
// for (let i = 0; i < var_arr.length; i++) {
//   if ((var_arr[i])%2==0) {
//     // console.log(var_arr[i]);
//   }
// }

// let largest = 0;
// for( let i = 0; i< var_arr.length; i++){
//   if (var_arr[i]> largest){
//     largest = var_arr[i];
//   }
// }
// console.log(largest);

// objects

// let users = {
//   user1:{
//     fname:'Nutan',
//     age:23,
//     gender: "male"
//   },
//   user2:{
//     fname:'Sam',
//     age:23,
//     gender:'female'
//   }
// }

// console.log(users.user1.fname)
// console.log(users['user1']['fname'])

// let users = [{
//   fname:"Sam",
//   age:23,
//   gender: 'female'
// },{
//   fname:'Nutan',
//   age:23,
//   gender:'male'
// }]

// for(let i =0; i<users.length;i++){
//   if(users[i]['gender']=='female'){
//     console.log(users[i]['fname'])
//   }
// }

// reversing the elements in an array:

// let arr= [1,2,3,4,5,6,7,8];
// let temp;
// for(let i = 0; i<arr.length/2; i++){
//   temp = arr[i]
//   arr[i] = arr[arr.length-i-1]
//   arr[arr.length-i-1]=temp
// }
// console.log(arr)
// let j;
// for(let i = 0; i< arr.length/2; i++){
//   j = arr.length-i-1;
//   [arr[i], arr[j]]= [arr[j],arr[i]];
// }
// console.log(arr)

// Functions:
// function sum(a,b){
//   return a+b;
// }

// const value = sum(6,7);
// console.log(value)

// function sum(a,b){
//   let result = a+b;
//   return result;
// }
// function display_result(data){
//   console.log("The sum of the nums is: " + data);
// }

// sum(6,7)

// Callbacks:

// function print(data){
//   console.log(data);
// }

// function sum(a,b,callback){
//   let result = a+b;
//   callback(result);
// }

// sum(6,7,print);

// function sum( a,b,callback){
//   result = a+b;
//   callback(result);
// }
// sum(6,7, (result)=>{
//   console.log(result);
// });

// calculate sum or sub based on the requirements:

// function cal(a,b,callback){
//   console.log(callback(a,b));
// }

// function sum(a,b){
//   return a+b;
// }

// function sub(a,b,c){
//   return a-b;
// }

// cal(6,7,sub);


// function sum(num1, num2) {
// let result = num1 + num2;
// return result;
// }

// function displayResult(data) {
// console.log("Result of the sum is : " + data);
// return data;
// }

// function displayResultPassive(data) {
// console.log("Sum's result is : " + data);
// }

// console.log(displayResult(sum(3, 5)));


// COUNTER FROM 30 TO 0

// let count = 10;

// function counter_(){
//   console.clear();
//   console.log(count--);
 
//   if (count == 0){
//     clearInterval(interval)
//   }
// }

// let interval = setInterval(counter_, 500);

// let curr_time = new Date().toLocaleTimeString('en-IN',{timeZone:'Asia/Kolkata'});

// function time_(){
//   console.clear();
//   console.log(curr_time);
//   curr_time = new Date().toLocaleTimeString('en-IN',{timeZone:'Asia/Kolkata'});
// }

// let Interval = setInterval(time_,1*1000);

// console.log('Sangamesh'.indexOf('gamesh'));
// console.log('Sangamesh San'.lastIndexOf('San'));
// console.log('Sangamesh'.replace('amesh',' and Sunny'));
// console.log('Sangamesh'.slice(2,6));
// console.log('Sangamesh'.repeat(3))

// parsing the string into int

// let value = '21';
// console.log(typeof(value))
// value = parseInt(value)
// console.log(value)
// console.log(typeof(value))
// console.log(parseInt('42ppxdvasf'))


// Arrays:

// arr = [1,2,3]
// arr.push(4)
// console.log(arr)

// arr.pop()
// console.log(arr)

// arr.shift()
// console.log(arr)

// arr.unshift(20)
// console.log(arr)

// arr = [1,2,3,4,5,6,7];

// function logfun(str){
//   console.log(str);
// }

// arr.forEach(logfun);

// class Animal {
  
//   constructor(fname, age, sound){
//     this.fname = fname;
//     this.age = age;
//     this.sound = sound;
//   }
//   speak(){
//     console.log(this.sound);
//   }
//   static type(){
//     console.log('This is an Animal')
//   }
// }

// let cat = new Animal('tom', 3, 'meow')
// let doggy = new Animal('tommy', 10, 'bark');
// doggy.speak()
// cat.speak()
// Animal.type()

// let curr_date = new Date();
// console.log(curr_date.getMonth()+1)
// console.log(curr_date.getFullYear())

// function exec(){
//   let a = 0;
//   for( let i = 0; i<1000000000000000000000; i++){
//     a = a+i
//   }
//   return a;
// }

// let btime = new Date();
// let btime_ = btime.getTime();
// console.log(btime_);
// console.log(exec());
// let atime = new Date();
// let atime_ = atime.getTime();
// console.log(atime_)

// function callingSum(){
//   sum = 0
//   for(let i = 0; i< 10; i++){
//     sum +=i
//   }
//   return sum
// }

// function callingSum1000(){
//    console.log(callingSum())
// }

// function print(){
//   console.log('2th Hello')
// }

// console.log('calling function')

// setTimeout(callingSum1000, 1000)

// console.log('Hello')

// setTimeout(print,600)
// console.log('after 600 ms')

// setTimeout(print, 2000)
// console.log('after 2000 ms')

const fs = require("fs");
fs.readFile('a.txt', 'UTF-8',function(err,data){
  console.log(data)
})
// Write your JavaScript here and click Run
// const user_name = "sam";
// console.log(user_name);

// let gender = "male";

// if ((gender = "male")) {
//   console.log("hello");
// } else if ((gender = "female")) {
//   console.log("hii");
// } else {
//   console.log("default");
// }

// let count = 0;

// for (let i = 0; i <= 1000; i++) {
//   console.log(count);
//   count++;
// }

// const a = 10;
// console.log("the value of the variable is " + a);

// let var_arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let new_arr = [];
// for (let i = 0; i < var_arr.length; i++) {
//   if ((var_arr[i])%2==0) {
//     // console.log(var_arr[i]);
//   }
// }

// let largest = 0;
// for( let i = 0; i< var_arr.length; i++){
//   if (var_arr[i]> largest){
//     largest = var_arr[i];
//   }
// }
// console.log(largest);

// objects

// let users = {
//   user1:{
//     fname:'Nutan',
//     age:23,
//     gender: "male"
//   },
//   user2:{
//     fname:'Sam',
//     age:23,
//     gender:'female'
//   }
// }

// console.log(users.user1.fname)
// console.log(users['user1']['fname'])

// let users = [{
//   fname:"Sam",
//   age:23,
//   gender: 'female'
// },{
//   fname:'Nutan',
//   age:23,
//   gender:'male'
// }]

// for(let i =0; i<users.length;i++){
//   if(users[i]['gender']=='female'){
//     console.log(users[i]['fname'])
//   }
// }

// reversing the elements in an array:

// let arr= [1,2,3,4,5,6,7,8];
// let temp;
// for(let i = 0; i<arr.length/2; i++){
//   temp = arr[i]
//   arr[i] = arr[arr.length-i-1]
//   arr[arr.length-i-1]=temp
// }
// console.log(arr)
// let j;
// for(let i = 0; i< arr.length/2; i++){
//   j = arr.length-i-1;
//   [arr[i], arr[j]]= [arr[j],arr[i]];
// }
// console.log(arr)

// Functions:
// function sum(a,b){
//   return a+b;
// }

// const value = sum(6,7);
// console.log(value)

// function sum(a,b){
//   let result = a+b;
//   return result;
// }
// function display_result(data){
//   console.log("The sum of the nums is: " + data);
// }

// sum(6,7)

// Callbacks:

// function print(data){
//   console.log(data);
// }

// function sum(a,b,callback){
//   let result = a+b;
//   callback(result);
// }

// sum(6,7,print);

// function sum( a,b,callback){
//   result = a+b;
//   callback(result);
// }
// sum(6,7, (result)=>{
//   console.log(result);
// });

// calculate sum or sub based on the requirements:

// function cal(a,b,callback){
//   console.log(callback(a,b));
// }

// function sum(a,b){
//   return a+b;
// }

// function sub(a,b,c){
//   return a-b;
// }

// cal(6,7,sub);


// function sum(num1, num2) {
// let result = num1 + num2;
// return result;
// }

// function displayResult(data) {
// console.log("Result of the sum is : " + data);
// return data;
// }

// function displayResultPassive(data) {
// console.log("Sum's result is : " + data);
// }

// console.log(displayResult(sum(3, 5)));


// COUNTER FROM 30 TO 0

// let count = 10;

// function counter_(){
//   console.clear();
//   console.log(count--);
 
//   if (count == 0){
//     clearInterval(interval)
//   }
// }

// let interval = setInterval(counter_, 500);

// let curr_time = new Date().toLocaleTimeString('en-IN',{timeZone:'Asia/Kolkata'});

// function time_(){
//   console.clear();
//   console.log(curr_time);
//   curr_time = new Date().toLocaleTimeString('en-IN',{timeZone:'Asia/Kolkata'});
// }

// let Interval = setInterval(time_,1*1000);

// console.log('Sangamesh'.indexOf('gamesh'));
// console.log('Sangamesh San'.lastIndexOf('San'));
// console.log('Sangamesh'.replace('amesh',' and Sunny'));
// console.log('Sangamesh'.slice(2,6));
// console.log('Sangamesh'.repeat(3))

// parsing the string into int

// let value = '21';
// console.log(typeof(value))
// value = parseInt(value)
// console.log(value)
// console.log(typeof(value))
// console.log(parseInt('42ppxdvasf'))


// Arrays:

// arr = [1,2,3]
// arr.push(4)
// console.log(arr)

// arr.pop()
// console.log(arr)

// arr.shift()
// console.log(arr)

// arr.unshift(20)
// console.log(arr)

// arr = [1,2,3,4,5,6,7];

// function logfun(str){
//   console.log(str);
// }

// arr.forEach(logfun);

// class Animal {
  
//   constructor(fname, age, sound){
//     this.fname = fname;
//     this.age = age;
//     this.sound = sound;
//   }
//   speak(){
//     console.log(this.sound);
//   }
//   static type(){
//     console.log('This is an Animal')
//   }
// }

// let cat = new Animal('tom', 3, 'meow')
// let doggy = new Animal('tommy', 10, 'bark');
// doggy.speak()
// cat.speak()
// Animal.type()

// let curr_date = new Date();
// console.log(curr_date.getMonth()+1)
// console.log(curr_date.getFullYear())

// function exec(){
//   let a = 0;
//   for( let i = 0; i<1000000000000000000000; i++){
//     a = a+i
//   }
//   return a;
// }

// let btime = new Date();
// let btime_ = btime.getTime();
// console.log(btime_);
// console.log(exec());
// let atime = new Date();
// let atime_ = atime.getTime();
// console.log(atime_)

// function callingSum(){
//   sum = 0
//   for(let i = 0; i< 10; i++){
//     sum +=i
//   }
//   return sum
// }

// function callingSum1000(){
//    console.log(callingSum())
// }

// function print(){
//   console.log('2th Hello')
// }

// console.log('calling function')

// setTimeout(callingSum1000, 1000)

// console.log('Hello')

// setTimeout(print,600)
// console.log('after 600 ms')

// setTimeout(print, 2000)
// console.log('after 2000 ms')

const fs = require("fs");
fs.readFile('a.txt', 'UTF-8',function(err,data){
  console.log(data)
})
// Write your JavaScript here and click Run
// const user_name = "sam";
// console.log(user_name);

// let gender = "male";

// if ((gender = "male")) {
//   console.log("hello");
// } else if ((gender = "female")) {
//   console.log("hii");
// } else {
//   console.log("default");
// }

// let count = 0;

// for (let i = 0; i <= 1000; i++) {
//   console.log(count);
//   count++;
// }

// const a = 10;
// console.log("the value of the variable is " + a);

// let var_arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let new_arr = [];
// for (let i = 0; i < var_arr.length; i++) {
//   if ((var_arr[i])%2==0) {
//     // console.log(var_arr[i]);
//   }
// }

// let largest = 0;
// for( let i = 0; i< var_arr.length; i++){
//   if (var_arr[i]> largest){
//     largest = var_arr[i];
//   }
// }
// console.log(largest);

// objects

// let users = {
//   user1:{
//     fname:'Nutan',
//     age:23,
//     gender: "male"
//   },
//   user2:{
//     fname:'Sam',
//     age:23,
//     gender:'female'
//   }
// }

// console.log(users.user1.fname)
// console.log(users['user1']['fname'])

// let users = [{
//   fname:"Sam",
//   age:23,
//   gender: 'female'
// },{
//   fname:'Nutan',
//   age:23,
//   gender:'male'
// }]

// for(let i =0; i<users.length;i++){
//   if(users[i]['gender']=='female'){
//     console.log(users[i]['fname'])
//   }
// }

// reversing the elements in an array:

// let arr= [1,2,3,4,5,6,7,8];
// let temp;
// for(let i = 0; i<arr.length/2; i++){
//   temp = arr[i]
//   arr[i] = arr[arr.length-i-1]
//   arr[arr.length-i-1]=temp
// }
// console.log(arr)
// let j;
// for(let i = 0; i< arr.length/2; i++){
//   j = arr.length-i-1;
//   [arr[i], arr[j]]= [arr[j],arr[i]];
// }
// console.log(arr)

// Functions:
// function sum(a,b){
//   return a+b;
// }

// const value = sum(6,7);
// console.log(value)

// function sum(a,b){
//   let result = a+b;
//   return result;
// }
// function display_result(data){
//   console.log("The sum of the nums is: " + data);
// }

// sum(6,7)

// Callbacks:

// function print(data){
//   console.log(data);
// }

// function sum(a,b,callback){
//   let result = a+b;
//   callback(result);
// }

// sum(6,7,print);

// function sum( a,b,callback){
//   result = a+b;
//   callback(result);
// }
// sum(6,7, (result)=>{
//   console.log(result);
// });

// calculate sum or sub based on the requirements:

// function cal(a,b,callback){
//   console.log(callback(a,b));
// }

// function sum(a,b){
//   return a+b;
// }

// function sub(a,b,c){
//   return a-b;
// }

// cal(6,7,sub);


// function sum(num1, num2) {
// let result = num1 + num2;
// return result;
// }

// function displayResult(data) {
// console.log("Result of the sum is : " + data);
// return data;
// }

// function displayResultPassive(data) {
// console.log("Sum's result is : " + data);
// }

// console.log(displayResult(sum(3, 5)));


// COUNTER FROM 30 TO 0

// let count = 10;

// function counter_(){
//   console.clear();
//   console.log(count--);
 
//   if (count == 0){
//     clearInterval(interval)
//   }
// }

// let interval = setInterval(counter_, 500);

// let curr_time = new Date().toLocaleTimeString('en-IN',{timeZone:'Asia/Kolkata'});

// function time_(){
//   console.clear();
//   console.log(curr_time);
//   curr_time = new Date().toLocaleTimeString('en-IN',{timeZone:'Asia/Kolkata'});
// }

// let Interval = setInterval(time_,1*1000);

// console.log('Sangamesh'.indexOf('gamesh'));
// console.log('Sangamesh San'.lastIndexOf('San'));
// console.log('Sangamesh'.replace('amesh',' and Sunny'));
// console.log('Sangamesh'.slice(2,6));
// console.log('Sangamesh'.repeat(3))

// parsing the string into int

// let value = '21';
// console.log(typeof(value))
// value = parseInt(value)
// console.log(value)
// console.log(typeof(value))
// console.log(parseInt('42ppxdvasf'))


// Arrays:

// arr = [1,2,3]
// arr.push(4)
// console.log(arr)

// arr.pop()
// console.log(arr)

// arr.shift()
// console.log(arr)

// arr.unshift(20)
// console.log(arr)

// arr = [1,2,3,4,5,6,7];

// function logfun(str){
//   console.log(str);
// }

// arr.forEach(logfun);

// class Animal {
  
//   constructor(fname, age, sound){
//     this.fname = fname;
//     this.age = age;
//     this.sound = sound;
//   }
//   speak(){
//     console.log(this.sound);
//   }
//   static type(){
//     console.log('This is an Animal')
//   }
// }

// let cat = new Animal('tom', 3, 'meow')
// let doggy = new Animal('tommy', 10, 'bark');
// doggy.speak()
// cat.speak()
// Animal.type()

// let curr_date = new Date();
// console.log(curr_date.getMonth()+1)
// console.log(curr_date.getFullYear())

// function exec(){
//   let a = 0;
//   for( let i = 0; i<1000000000000000000000; i++){
//     a = a+i
//   }
//   return a;
// }

// let btime = new Date();
// let btime_ = btime.getTime();
// console.log(btime_);
// console.log(exec());
// let atime = new Date();
// let atime_ = atime.getTime();
// console.log(atime_)

// function callingSum(){
//   sum = 0
//   for(let i = 0; i< 10; i++){
//     sum +=i
//   }
//   return sum
// }

// function callingSum1000(){
//    console.log(callingSum())
// }

// function print(){
//   console.log('2th Hello')
// }

// console.log('calling function')

// setTimeout(callingSum1000, 1000)

// console.log('Hello')

// setTimeout(print,600)
// console.log('after 600 ms')

// setTimeout(print, 2000)
// console.log('after 2000 ms')

const fs = require("fs");
fs.readFile('a.txt', 'UTF-8',function(err,data){
  console.log(data)
})
// Write your JavaScript here and click Run
// const user_name = "sam";
// console.log(user_name);

// let gender = "male";

// if ((gender = "male")) {
//   console.log("hello");
// } else if ((gender = "female")) {
//   console.log("hii");
// } else {
//   console.log("default");
// }

// let count = 0;

// for (let i = 0; i <= 1000; i++) {
//   console.log(count);
//   count++;
// }

// const a = 10;
// console.log("the value of the variable is " + a);

// let var_arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let new_arr = [];
// for (let i = 0; i < var_arr.length; i++) {
//   if ((var_arr[i])%2==0) {
//     // console.log(var_arr[i]);
//   }
// }

// let largest = 0;
// for( let i = 0; i< var_arr.length; i++){
//   if (var_arr[i]> largest){
//     largest = var_arr[i];
//   }
// }
// console.log(largest);

// objects

// let users = {
//   user1:{
//     fname:'Nutan',
//     age:23,
//     gender: "male"
//   },
//   user2:{
//     fname:'Sam',
//     age:23,
//     gender:'female'
//   }
// }

// console.log(users.user1.fname)
// console.log(users['user1']['fname'])

// let users = [{
//   fname:"Sam",
//   age:23,
//   gender: 'female'
// },{
//   fname:'Nutan',
//   age:23,
//   gender:'male'
// }]

// for(let i =0; i<users.length;i++){
//   if(users[i]['gender']=='female'){
//     console.log(users[i]['fname'])
//   }
// }

// reversing the elements in an array:

// let arr= [1,2,3,4,5,6,7,8];
// let temp;
// for(let i = 0; i<arr.length/2; i++){
//   temp = arr[i]
//   arr[i] = arr[arr.length-i-1]
//   arr[arr.length-i-1]=temp
// }
// console.log(arr)
// let j;
// for(let i = 0; i< arr.length/2; i++){
//   j = arr.length-i-1;
//   [arr[i], arr[j]]= [arr[j],arr[i]];
// }
// console.log(arr)

// Functions:
// function sum(a,b){
//   return a+b;
// }

// const value = sum(6,7);
// console.log(value)

// function sum(a,b){
//   let result = a+b;
//   return result;
// }
// function display_result(data){
//   console.log("The sum of the nums is: " + data);
// }

// sum(6,7)

// Callbacks:

// function print(data){
//   console.log(data);
// }

// function sum(a,b,callback){
//   let result = a+b;
//   callback(result);
// }

// sum(6,7,print);

// function sum( a,b,callback){
//   result = a+b;
//   callback(result);
// }
// sum(6,7, (result)=>{
//   console.log(result);
// });

// calculate sum or sub based on the requirements:

// function cal(a,b,callback){
//   console.log(callback(a,b));
// }

// function sum(a,b){
//   return a+b;
// }

// function sub(a,b,c){
//   return a-b;
// }

// cal(6,7,sub);


// function sum(num1, num2) {
// let result = num1 + num2;
// return result;
// }

// function displayResult(data) {
// console.log("Result of the sum is : " + data);
// return data;
// }

// function displayResultPassive(data) {
// console.log("Sum's result is : " + data);
// }

// console.log(displayResult(sum(3, 5)));


// COUNTER FROM 30 TO 0

// let count = 10;

// function counter_(){
//   console.clear();
//   console.log(count--);
 
//   if (count == 0){
//     clearInterval(interval)
//   }
// }

// let interval = setInterval(counter_, 500);

// let curr_time = new Date().toLocaleTimeString('en-IN',{timeZone:'Asia/Kolkata'});

// function time_(){
//   console.clear();
//   console.log(curr_time);
//   curr_time = new Date().toLocaleTimeString('en-IN',{timeZone:'Asia/Kolkata'});
// }

// let Interval = setInterval(time_,1*1000);

// console.log('Sangamesh'.indexOf('gamesh'));
// console.log('Sangamesh San'.lastIndexOf('San'));
// console.log('Sangamesh'.replace('amesh',' and Sunny'));
// console.log('Sangamesh'.slice(2,6));
// console.log('Sangamesh'.repeat(3))

// parsing the string into int

// let value = '21';
// console.log(typeof(value))
// value = parseInt(value)
// console.log(value)
// console.log(typeof(value))
// console.log(parseInt('42ppxdvasf'))


// Arrays:

// arr = [1,2,3]
// arr.push(4)
// console.log(arr)

// arr.pop()
// console.log(arr)

// arr.shift()
// console.log(arr)

// arr.unshift(20)
// console.log(arr)

// arr = [1,2,3,4,5,6,7];

// function logfun(str){
//   console.log(str);
// }

// arr.forEach(logfun);

// class Animal {
  
//   constructor(fname, age, sound){
//     this.fname = fname;
//     this.age = age;
//     this.sound = sound;
//   }
//   speak(){
//     console.log(this.sound);
//   }
//   static type(){
//     console.log('This is an Animal')
//   }
// }

// let cat = new Animal('tom', 3, 'meow')
// let doggy = new Animal('tommy', 10, 'bark');
// doggy.speak()
// cat.speak()
// Animal.type()

// let curr_date = new Date();
// console.log(curr_date.getMonth()+1)
// console.log(curr_date.getFullYear())

// function exec(){
//   let a = 0;
//   for( let i = 0; i<1000000000000000000000; i++){
//     a = a+i
//   }
//   return a;
// }

// let btime = new Date();
// let btime_ = btime.getTime();
// console.log(btime_);
// console.log(exec());
// let atime = new Date();
// let atime_ = atime.getTime();
// console.log(atime_)

// function callingSum(){
//   sum = 0
//   for(let i = 0; i< 10; i++){
//     sum +=i
//   }
//   return sum
// }

// function callingSum1000(){
//    console.log(callingSum())
// }

// function print(){
//   console.log('2th Hello')
// }

// console.log('calling function')

// setTimeout(callingSum1000, 1000)

// console.log('Hello')

// setTimeout(print,600)
// console.log('after 600 ms')

// setTimeout(print, 2000)
// console.log('after 2000 ms')

const fs = require("fs");
fs.readFile('a.txt', 'UTF-8',function(err,data){
  console.log(data)
})
// Write your JavaScript here and click Run
// const user_name = "sam";
// console.log(user_name);

// let gender = "male";

// if ((gender = "male")) {
//   console.log("hello");
// } else if ((gender = "female")) {
//   console.log("hii");
// } else {
//   console.log("default");
// }

// let count = 0;

// for (let i = 0; i <= 1000; i++) {
//   console.log(count);
//   count++;
// }

// const a = 10;
// console.log("the value of the variable is " + a);

// let var_arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let new_arr = [];
// for (let i = 0; i < var_arr.length; i++) {
//   if ((var_arr[i])%2==0) {
//     // console.log(var_arr[i]);
//   }
// }

// let largest = 0;
// for( let i = 0; i< var_arr.length; i++){
//   if (var_arr[i]> largest){
//     largest = var_arr[i];
//   }
// }
// console.log(largest);

// objects

// let users = {
//   user1:{
//     fname:'Nutan',
//     age:23,
//     gender: "male"
//   },
//   user2:{
//     fname:'Sam',
//     age:23,
//     gender:'female'
//   }
// }

// console.log(users.user1.fname)
// console.log(users['user1']['fname'])

// let users = [{
//   fname:"Sam",
//   age:23,
//   gender: 'female'
// },{
//   fname:'Nutan',
//   age:23,
//   gender:'male'
// }]

// for(let i =0; i<users.length;i++){
//   if(users[i]['gender']=='female'){
//     console.log(users[i]['fname'])
//   }
// }

// reversing the elements in an array:

// let arr= [1,2,3,4,5,6,7,8];
// let temp;
// for(let i = 0; i<arr.length/2; i++){
//   temp = arr[i]
//   arr[i] = arr[arr.length-i-1]
//   arr[arr.length-i-1]=temp
// }
// console.log(arr)
// let j;
// for(let i = 0; i< arr.length/2; i++){
//   j = arr.length-i-1;
//   [arr[i], arr[j]]= [arr[j],arr[i]];
// }
// console.log(arr)

// Functions:
// function sum(a,b){
//   return a+b;
// }

// const value = sum(6,7);
// console.log(value)

// function sum(a,b){
//   let result = a+b;
//   return result;
// }
// function display_result(data){
//   console.log("The sum of the nums is: " + data);
// }

// sum(6,7)

// Callbacks:

// function print(data){
//   console.log(data);
// }

// function sum(a,b,callback){
//   let result = a+b;
//   callback(result);
// }

// sum(6,7,print);

// function sum( a,b,callback){
//   result = a+b;
//   callback(result);
// }
// sum(6,7, (result)=>{
//   console.log(result);
// });

// calculate sum or sub based on the requirements:

// function cal(a,b,callback){
//   console.log(callback(a,b));
// }

// function sum(a,b){
//   return a+b;
// }

// function sub(a,b,c){
//   return a-b;
// }

// cal(6,7,sub);


// function sum(num1, num2) {
// let result = num1 + num2;
// return result;
// }

// function displayResult(data) {
// console.log("Result of the sum is : " + data);
// return data;
// }

// function displayResultPassive(data) {
// console.log("Sum's result is : " + data);
// }

// console.log(displayResult(sum(3, 5)));


// COUNTER FROM 30 TO 0

// let count = 10;

// function counter_(){
//   console.clear();
//   console.log(count--);
 
//   if (count == 0){
//     clearInterval(interval)
//   }
// }

// let interval = setInterval(counter_, 500);

// let curr_time = new Date().toLocaleTimeString('en-IN',{timeZone:'Asia/Kolkata'});

// function time_(){
//   console.clear();
//   console.log(curr_time);
//   curr_time = new Date().toLocaleTimeString('en-IN',{timeZone:'Asia/Kolkata'});
// }

// let Interval = setInterval(time_,1*1000);

// console.log('Sangamesh'.indexOf('gamesh'));
// console.log('Sangamesh San'.lastIndexOf('San'));
// console.log('Sangamesh'.replace('amesh',' and Sunny'));
// console.log('Sangamesh'.slice(2,6));
// console.log('Sangamesh'.repeat(3))

// parsing the string into int

// let value = '21';
// console.log(typeof(value))
// value = parseInt(value)
// console.log(value)
// console.log(typeof(value))
// console.log(parseInt('42ppxdvasf'))


// Arrays:

// arr = [1,2,3]
// arr.push(4)
// console.log(arr)

// arr.pop()
// console.log(arr)

// arr.shift()
// console.log(arr)

// arr.unshift(20)
// console.log(arr)

// arr = [1,2,3,4,5,6,7];

// function logfun(str){
//   console.log(str);
// }

// arr.forEach(logfun);

// class Animal {
  
//   constructor(fname, age, sound){
//     this.fname = fname;
//     this.age = age;
//     this.sound = sound;
//   }
//   speak(){
//     console.log(this.sound);
//   }
//   static type(){
//     console.log('This is an Animal')
//   }
// }

// let cat = new Animal('tom', 3, 'meow')
// let doggy = new Animal('tommy', 10, 'bark');
// doggy.speak()
// cat.speak()
// Animal.type()

// let curr_date = new Date();
// console.log(curr_date.getMonth()+1)
// console.log(curr_date.getFullYear())

// function exec(){
//   let a = 0;
//   for( let i = 0; i<1000000000000000000000; i++){
//     a = a+i
//   }
//   return a;
// }

// let btime = new Date();
// let btime_ = btime.getTime();
// console.log(btime_);
// console.log(exec());
// let atime = new Date();
// let atime_ = atime.getTime();
// console.log(atime_)

// function callingSum(){
//   sum = 0
//   for(let i = 0; i< 10; i++){
//     sum +=i
//   }
//   return sum
// }

// function callingSum1000(){
//    console.log(callingSum())
// }

// function print(){
//   console.log('2th Hello')
// }

// console.log('calling function')

// setTimeout(callingSum1000, 1000)

// console.log('Hello')

// setTimeout(print,600)
// console.log('after 600 ms')

// setTimeout(print, 2000)
// console.log('after 2000 ms')

const fs = require("fs");
fs.readFile('a.txt', 'UTF-8',function(err,data){
  console.log(data)
})
// Write your JavaScript here and click Run
// const user_name = "sam";
// console.log(user_name);

// let gender = "male";

// if ((gender = "male")) {
//   console.log("hello");
// } else if ((gender = "female")) {
//   console.log("hii");
// } else {
//   console.log("default");
// }

// let count = 0;

// for (let i = 0; i <= 1000; i++) {
//   console.log(count);
//   count++;
// }

// const a = 10;
// console.log("the value of the variable is " + a);

// let var_arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let new_arr = [];
// for (let i = 0; i < var_arr.length; i++) {
//   if ((var_arr[i])%2==0) {
//     // console.log(var_arr[i]);
//   }
// }

// let largest = 0;
// for( let i = 0; i< var_arr.length; i++){
//   if (var_arr[i]> largest){
//     largest = var_arr[i];
//   }
// }
// console.log(largest);

// objects

// let users = {
//   user1:{
//     fname:'Nutan',
//     age:23,
//     gender: "male"
//   },
//   user2:{
//     fname:'Sam',
//     age:23,
//     gender:'female'
//   }
// }

// console.log(users.user1.fname)
// console.log(users['user1']['fname'])

// let users = [{
//   fname:"Sam",
//   age:23,
//   gender: 'female'
// },{
//   fname:'Nutan',
//   age:23,
//   gender:'male'
// }]

// for(let i =0; i<users.length;i++){
//   if(users[i]['gender']=='female'){
//     console.log(users[i]['fname'])
//   }
// }

// reversing the elements in an array:

// let arr= [1,2,3,4,5,6,7,8];
// let temp;
// for(let i = 0; i<arr.length/2; i++){
//   temp = arr[i]
//   arr[i] = arr[arr.length-i-1]
//   arr[arr.length-i-1]=temp
// }
// console.log(arr)
// let j;
// for(let i = 0; i< arr.length/2; i++){
//   j = arr.length-i-1;
//   [arr[i], arr[j]]= [arr[j],arr[i]];
// }
// console.log(arr)

// Functions:
// function sum(a,b){
//   return a+b;
// }

// const value = sum(6,7);
// console.log(value)

// function sum(a,b){
//   let result = a+b;
//   return result;
// }
// function display_result(data){
//   console.log("The sum of the nums is: " + data);
// }

// sum(6,7)

// Callbacks:

// function print(data){
//   console.log(data);
// }

// function sum(a,b,callback){
//   let result = a+b;
//   callback(result);
// }

// sum(6,7,print);

// function sum( a,b,callback){
//   result = a+b;
//   callback(result);
// }
// sum(6,7, (result)=>{
//   console.log(result);
// });

// calculate sum or sub based on the requirements:

// function cal(a,b,callback){
//   console.log(callback(a,b));
// }

// function sum(a,b){
//   return a+b;
// }

// function sub(a,b,c){
//   return a-b;
// }

// cal(6,7,sub);


// function sum(num1, num2) {
// let result = num1 + num2;
// return result;
// }

// function displayResult(data) {
// console.log("Result of the sum is : " + data);
// return data;
// }

// function displayResultPassive(data) {
// console.log("Sum's result is : " + data);
// }

// console.log(displayResult(sum(3, 5)));


// COUNTER FROM 30 TO 0

// let count = 10;

// function counter_(){
//   console.clear();
//   console.log(count--);
 
//   if (count == 0){
//     clearInterval(interval)
//   }
// }

// let interval = setInterval(counter_, 500);

// let curr_time = new Date().toLocaleTimeString('en-IN',{timeZone:'Asia/Kolkata'});

// function time_(){
//   console.clear();
//   console.log(curr_time);
//   curr_time = new Date().toLocaleTimeString('en-IN',{timeZone:'Asia/Kolkata'});
// }

// let Interval = setInterval(time_,1*1000);

// console.log('Sangamesh'.indexOf('gamesh'));
// console.log('Sangamesh San'.lastIndexOf('San'));
// console.log('Sangamesh'.replace('amesh',' and Sunny'));
// console.log('Sangamesh'.slice(2,6));
// console.log('Sangamesh'.repeat(3))

// parsing the string into int

// let value = '21';
// console.log(typeof(value))
// value = parseInt(value)
// console.log(value)
// console.log(typeof(value))
// console.log(parseInt('42ppxdvasf'))


// Arrays:

// arr = [1,2,3]
// arr.push(4)
// console.log(arr)

// arr.pop()
// console.log(arr)

// arr.shift()
// console.log(arr)

// arr.unshift(20)
// console.log(arr)

// arr = [1,2,3,4,5,6,7];

// function logfun(str){
//   console.log(str);
// }

// arr.forEach(logfun);

// class Animal {
  
//   constructor(fname, age, sound){
//     this.fname = fname;
//     this.age = age;
//     this.sound = sound;
//   }
//   speak(){
//     console.log(this.sound);
//   }
//   static type(){
//     console.log('This is an Animal')
//   }
// }

// let cat = new Animal('tom', 3, 'meow')
// let doggy = new Animal('tommy', 10, 'bark');
// doggy.speak()
// cat.speak()
// Animal.type()

// let curr_date = new Date();
// console.log(curr_date.getMonth()+1)
// console.log(curr_date.getFullYear())

// function exec(){
//   let a = 0;
//   for( let i = 0; i<1000000000000000000000; i++){
//     a = a+i
//   }
//   return a;
// }

// let btime = new Date();
// let btime_ = btime.getTime();
// console.log(btime_);
// console.log(exec());
// let atime = new Date();
// let atime_ = atime.getTime();
// console.log(atime_)

// function callingSum(){
//   sum = 0
//   for(let i = 0; i< 10; i++){
//     sum +=i
//   }
//   return sum
// }

// function callingSum1000(){
//    console.log(callingSum())
// }

// function print(){
//   console.log('2th Hello')
// }

// console.log('calling function')

// setTimeout(callingSum1000, 1000)

// console.log('Hello')

// setTimeout(print,600)
// console.log('after 600 ms')

// setTimeout(print, 2000)
// console.log('after 2000 ms')

const fs = require("fs");
fs.readFile('a.txt', 'UTF-8',function(err,data){
  console.log(data)
})
// Write your JavaScript here and click Run
// const user_name = "sam";
// console.log(user_name);

// let gender = "male";

// if ((gender = "male")) {
//   console.log("hello");
// } else if ((gender = "female")) {
//   console.log("hii");
// } else {
//   console.log("default");
// }

// let count = 0;

// for (let i = 0; i <= 1000; i++) {
//   console.log(count);
//   count++;
// }

// const a = 10;
// console.log("the value of the variable is " + a);

// let var_arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let new_arr = [];
// for (let i = 0; i < var_arr.length; i++) {
//   if ((var_arr[i])%2==0) {
//     // console.log(var_arr[i]);
//   }
// }

// let largest = 0;
// for( let i = 0; i< var_arr.length; i++){
//   if (var_arr[i]> largest){
//     largest = var_arr[i];
//   }
// }
// console.log(largest);

// objects

// let users = {
//   user1:{
//     fname:'Nutan',
//     age:23,
//     gender: "male"
//   },
//   user2:{
//     fname:'Sam',
//     age:23,
//     gender:'female'
//   }
// }

// console.log(users.user1.fname)
// console.log(users['user1']['fname'])

// let users = [{
//   fname:"Sam",
//   age:23,
//   gender: 'female'
// },{
//   fname:'Nutan',
//   age:23,
//   gender:'male'
// }]

// for(let i =0; i<users.length;i++){
//   if(users[i]['gender']=='female'){
//     console.log(users[i]['fname'])
//   }
// }

// reversing the elements in an array:

// let arr= [1,2,3,4,5,6,7,8];
// let temp;
// for(let i = 0; i<arr.length/2; i++){
//   temp = arr[i]
//   arr[i] = arr[arr.length-i-1]
//   arr[arr.length-i-1]=temp
// }
// console.log(arr)
// let j;
// for(let i = 0; i< arr.length/2; i++){
//   j = arr.length-i-1;
//   [arr[i], arr[j]]= [arr[j],arr[i]];
// }
// console.log(arr)

// Functions:
// function sum(a,b){
//   return a+b;
// }

// const value = sum(6,7);
// console.log(value)

// function sum(a,b){
//   let result = a+b;
//   return result;
// }
// function display_result(data){
//   console.log("The sum of the nums is: " + data);
// }

// sum(6,7)

// Callbacks:

// function print(data){
//   console.log(data);
// }

// function sum(a,b,callback){
//   let result = a+b;
//   callback(result);
// }

// sum(6,7,print);

// function sum( a,b,callback){
//   result = a+b;
//   callback(result);
// }
// sum(6,7, (result)=>{
//   console.log(result);
// });

// calculate sum or sub based on the requirements:

// function cal(a,b,callback){
//   console.log(callback(a,b));
// }

// function sum(a,b){
//   return a+b;
// }

// function sub(a,b,c){
//   return a-b;
// }

// cal(6,7,sub);


// function sum(num1, num2) {
// let result = num1 + num2;
// return result;
// }

// function displayResult(data) {
// console.log("Result of the sum is : " + data);
// return data;
// }

// function displayResultPassive(data) {
// console.log("Sum's result is : " + data);
// }

// console.log(displayResult(sum(3, 5)));


// COUNTER FROM 30 TO 0

// let count = 10;

// function counter_(){
//   console.clear();
//   console.log(count--);
 
//   if (count == 0){
//     clearInterval(interval)
//   }
// }

// let interval = setInterval(counter_, 500);

// let curr_time = new Date().toLocaleTimeString('en-IN',{timeZone:'Asia/Kolkata'});

// function time_(){
//   console.clear();
//   console.log(curr_time);
//   curr_time = new Date().toLocaleTimeString('en-IN',{timeZone:'Asia/Kolkata'});
// }

// let Interval = setInterval(time_,1*1000);

// console.log('Sangamesh'.indexOf('gamesh'));
// console.log('Sangamesh San'.lastIndexOf('San'));
// console.log('Sangamesh'.replace('amesh',' and Sunny'));
// console.log('Sangamesh'.slice(2,6));
// console.log('Sangamesh'.repeat(3))

// parsing the string into int

// let value = '21';
// console.log(typeof(value))
// value = parseInt(value)
// console.log(value)
// console.log(typeof(value))
// console.log(parseInt('42ppxdvasf'))


// Arrays:

// arr = [1,2,3]
// arr.push(4)
// console.log(arr)

// arr.pop()
// console.log(arr)

// arr.shift()
// console.log(arr)

// arr.unshift(20)
// console.log(arr)

// arr = [1,2,3,4,5,6,7];

// function logfun(str){
//   console.log(str);
// }

// arr.forEach(logfun);

// class Animal {
  
//   constructor(fname, age, sound){
//     this.fname = fname;
//     this.age = age;
//     this.sound = sound;
//   }
//   speak(){
//     console.log(this.sound);
//   }
//   static type(){
//     console.log('This is an Animal')
//   }
// }

// let cat = new Animal('tom', 3, 'meow')
// let doggy = new Animal('tommy', 10, 'bark');
// doggy.speak()
// cat.speak()
// Animal.type()

// let curr_date = new Date();
// console.log(curr_date.getMonth()+1)
// console.log(curr_date.getFullYear())

// function exec(){
//   let a = 0;
//   for( let i = 0; i<1000000000000000000000; i++){
//     a = a+i
//   }
//   return a;
// }

// let btime = new Date();
// let btime_ = btime.getTime();
// console.log(btime_);
// console.log(exec());
// let atime = new Date();
// let atime_ = atime.getTime();
// console.log(atime_)

// function callingSum(){
//   sum = 0
//   for(let i = 0; i< 10; i++){
//     sum +=i
//   }
//   return sum
// }

// function callingSum1000(){
//    console.log(callingSum())
// }

// function print(){
//   console.log('2th Hello')
// }

// console.log('calling function')

// setTimeout(callingSum1000, 1000)

// console.log('Hello')

// setTimeout(print,600)
// console.log('after 600 ms')

// setTimeout(print, 2000)
// console.log('after 2000 ms')

// const fs = require("fs");
// fs.readFile('a.txt', 'UTF-8',function(err,data){
//   console.log(data)
// })


// Callbacks vs promises:
// Callback:

// Write your JavaScript here and click Run
// const user_name = "sam";
// console.log(user_name);

// let gender = "male";

// if ((gender = "male")) {
//   console.log("hello");
// } else if ((gender = "female")) {
//   console.log("hii");
// } else {
//   console.log("default");
// }

// let count = 0;

// for (let i = 0; i <= 1000; i++) {
//   console.log(count);
//   count++;
// }

// const a = 10;
// console.log("the value of the variable is " + a);

// let var_arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let new_arr = [];
// for (let i = 0; i < var_arr.length; i++) {
//   if ((var_arr[i])%2==0) {
//     // console.log(var_arr[i]);
//   }
// }

// let largest = 0;
// for( let i = 0; i< var_arr.length; i++){
//   if (var_arr[i]> largest){
//     largest = var_arr[i];
//   }
// }
// console.log(largest);

// objects

// let users = {
//   user1:{
//     fname:'Nutan',
//     age:23,
//     gender: "male"
//   },
//   user2:{
//     fname:'Sam',
//     age:23,
//     gender:'female'
//   }
// }

// console.log(users.user1.fname)
// console.log(users['user1']['fname'])

// let users = [{
//   fname:"Sam",
//   age:23,
//   gender: 'female'
// },{
//   fname:'Nutan',
//   age:23,
//   gender:'male'
// }]

// for(let i =0; i<users.length;i++){
//   if(users[i]['gender']=='female'){
//     console.log(users[i]['fname'])
//   }
// }

// reversing the elements in an array:

// let arr= [1,2,3,4,5,6,7,8];
// let temp;
// for(let i = 0; i<arr.length/2; i++){
//   temp = arr[i]
//   arr[i] = arr[arr.length-i-1]
//   arr[arr.length-i-1]=temp
// }
// console.log(arr)
// let j;
// for(let i = 0; i< arr.length/2; i++){
//   j = arr.length-i-1;
//   [arr[i], arr[j]]= [arr[j],arr[i]];
// }
// console.log(arr)

// Functions:
// function sum(a,b){
//   return a+b;
// }

// const value = sum(6,7);
// console.log(value)

// function sum(a,b){
//   let result = a+b;
//   return result;
// }
// function display_result(data){
//   console.log("The sum of the nums is: " + data);
// }

// sum(6,7)

// Callbacks:

// function print(data){
//   console.log(data);
// }

// function sum(a,b,callback){
//   let result = a+b;
//   callback(result);
// }

// sum(6,7,print);

// function sum( a,b,callback){
//   result = a+b;
//   callback(result);
// }
// sum(6,7, (result)=>{
//   console.log(result);
// });

// calculate sum or sub based on the requirements:

// function cal(a,b,callback){
//   console.log(callback(a,b));
// }

// function sum(a,b){
//   return a+b;
// }

// function sub(a,b,c){
//   return a-b;
// }

// cal(6,7,sub);


// function sum(num1, num2) {
// let result = num1 + num2;
// return result;
// }

// function displayResult(data) {
// console.log("Result of the sum is : " + data);
// return data;
// }

// function displayResultPassive(data) {
// console.log("Sum's result is : " + data);
// }

// console.log(displayResult(sum(3, 5)));


// COUNTER FROM 30 TO 0

// let count = 10;

// function counter_(){
//   console.clear();
//   console.log(count--);
 
//   if (count == 0){
//     clearInterval(interval)
//   }
// }

// let interval = setInterval(counter_, 500);

// let curr_time = new Date().toLocaleTimeString('en-IN',{timeZone:'Asia/Kolkata'});

// function time_(){
//   console.clear();
//   console.log(curr_time);
//   curr_time = new Date().toLocaleTimeString('en-IN',{timeZone:'Asia/Kolkata'});
// }

// let Interval = setInterval(time_,1*1000);

// console.log('Sangamesh'.indexOf('gamesh'));
// console.log('Sangamesh San'.lastIndexOf('San'));
// console.log('Sangamesh'.replace('amesh',' and Sunny'));
// console.log('Sangamesh'.slice(2,6));
// console.log('Sangamesh'.repeat(3))

// parsing the string into int

// let value = '21';
// console.log(typeof(value))
// value = parseInt(value)
// console.log(value)
// console.log(typeof(value))
// console.log(parseInt('42ppxdvasf'))


// Arrays:

// arr = [1,2,3]
// arr.push(4)
// console.log(arr)

// arr.pop()
// console.log(arr)

// arr.shift()
// console.log(arr)

// arr.unshift(20)
// console.log(arr)

// arr = [1,2,3,4,5,6,7];

// function logfun(str){
//   console.log(str);
// }

// arr.forEach(logfun);

// class Animal {
  
//   constructor(fname, age, sound){
//     this.fname = fname;
//     this.age = age;
//     this.sound = sound;
//   }
//   speak(){
//     console.log(this.sound);
//   }
//   static type(){
//     console.log('This is an Animal')
//   }
// }

// let cat = new Animal('tom', 3, 'meow')
// let doggy = new Animal('tommy', 10, 'bark');
// doggy.speak()
// cat.speak()
// Animal.type()

// let curr_date = new Date();
// console.log(curr_date.getMonth()+1)
// console.log(curr_date.getFullYear())

// function exec(){
//   let a = 0;
//   for( let i = 0; i<1000000000000000000000; i++){
//     a = a+i
//   }
//   return a;
// }

// let btime = new Date();
// let btime_ = btime.getTime();
// console.log(btime_);
// console.log(exec());
// let atime = new Date();
// let atime_ = atime.getTime();
// console.log(atime_)

// function callingSum(){
//   sum = 0
//   for(let i = 0; i< 10; i++){
//     sum +=i
//   }
//   return sum
// }

// function callingSum1000(){
//    console.log(callingSum())
// }

// function print(){
//   console.log('2th Hello')
// }

// console.log('calling function')

// setTimeout(callingSum1000, 1000)

// console.log('Hello')

// setTimeout(print,600)
// console.log('after 600 ms')

// setTimeout(print, 2000)
// console.log('after 2000 ms')

const fs = require("fs");
fs.readFile('a.txt', 'UTF-8',function(err,data){
  console.log(data)
})
// Write your JavaScript here and click Run
// const user_name = "sam";
// console.log(user_name);

// let gender = "male";

// if ((gender = "male")) {
//   console.log("hello");
// } else if ((gender = "female")) {
//   console.log("hii");
// } else {
//   console.log("default");
// }

// let count = 0;

// for (let i = 0; i <= 1000; i++) {
//   console.log(count);
//   count++;
// }

// const a = 10;
// console.log("the value of the variable is " + a);

// let var_arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let new_arr = [];
// for (let i = 0; i < var_arr.length; i++) {
//   if ((var_arr[i])%2==0) {
//     // console.log(var_arr[i]);
//   }
// }

// let largest = 0;
// for( let i = 0; i< var_arr.length; i++){
//   if (var_arr[i]> largest){
//     largest = var_arr[i];
//   }
// }
// console.log(largest);

// objects

// let users = {
//   user1:{
//     fname:'Nutan',
//     age:23,
//     gender: "male"
//   },
//   user2:{
//     fname:'Sam',
//     age:23,
//     gender:'female'
//   }
// }

// console.log(users.user1.fname)
// console.log(users['user1']['fname'])

// let users = [{
//   fname:"Sam",
//   age:23,
//   gender: 'female'
// },{
//   fname:'Nutan',
//   age:23,
//   gender:'male'
// }]

// for(let i =0; i<users.length;i++){
//   if(users[i]['gender']=='female'){
//     console.log(users[i]['fname'])
//   }
// }

// reversing the elements in an array:

// let arr= [1,2,3,4,5,6,7,8];
// let temp;
// for(let i = 0; i<arr.length/2; i++){
//   temp = arr[i]
//   arr[i] = arr[arr.length-i-1]
//   arr[arr.length-i-1]=temp
// }
// console.log(arr)
// let j;
// for(let i = 0; i< arr.length/2; i++){
//   j = arr.length-i-1;
//   [arr[i], arr[j]]= [arr[j],arr[i]];
// }
// console.log(arr)

// Functions:
// function sum(a,b){
//   return a+b;
// }

// const value = sum(6,7);
// console.log(value)

// function sum(a,b){
//   let result = a+b;
//   return result;
// }
// function display_result(data){
//   console.log("The sum of the nums is: " + data);
// }

// sum(6,7)

// Callbacks:

// function print(data){
//   console.log(data);
// }

// function sum(a,b,callback){
//   let result = a+b;
//   callback(result);
// }

// sum(6,7,print);

// function sum( a,b,callback){
//   result = a+b;
//   callback(result);
// }
// sum(6,7, (result)=>{
//   console.log(result);
// });

// calculate sum or sub based on the requirements:

// function cal(a,b,callback){
//   console.log(callback(a,b));
// }

// function sum(a,b){
//   return a+b;
// }

// function sub(a,b,c){
//   return a-b;
// }

// cal(6,7,sub);


// function sum(num1, num2) {
// let result = num1 + num2;
// return result;
// }

// function displayResult(data) {
// console.log("Result of the sum is : " + data);
// return data;
// }

// function displayResultPassive(data) {
// console.log("Sum's result is : " + data);
// }

// console.log(displayResult(sum(3, 5)));


// COUNTER FROM 30 TO 0

// let count = 10;

// function counter_(){
//   console.clear();
//   console.log(count--);
 
//   if (count == 0){
//     clearInterval(interval)
//   }
// }

// let interval = setInterval(counter_, 500);

// let curr_time = new Date().toLocaleTimeString('en-IN',{timeZone:'Asia/Kolkata'});

// function time_(){
//   console.clear();
//   console.log(curr_time);
//   curr_time = new Date().toLocaleTimeString('en-IN',{timeZone:'Asia/Kolkata'});
// }

// let Interval = setInterval(time_,1*1000);

// console.log('Sangamesh'.indexOf('gamesh'));
// console.log('Sangamesh San'.lastIndexOf('San'));
// console.log('Sangamesh'.replace('amesh',' and Sunny'));
// console.log('Sangamesh'.slice(2,6));
// console.log('Sangamesh'.repeat(3))

// parsing the string into int

// let value = '21';
// console.log(typeof(value))
// value = parseInt(value)
// console.log(value)
// console.log(typeof(value))
// console.log(parseInt('42ppxdvasf'))


// Arrays:

// arr = [1,2,3]
// arr.push(4)
// console.log(arr)

// arr.pop()
// console.log(arr)

// arr.shift()
// console.log(arr)

// arr.unshift(20)
// console.log(arr)

// arr = [1,2,3,4,5,6,7];

// function logfun(str){
//   console.log(str);
// }

// arr.forEach(logfun);

// class Animal {
  
//   constructor(fname, age, sound){
//     this.fname = fname;
//     this.age = age;
//     this.sound = sound;
//   }
//   speak(){
//     console.log(this.sound);
//   }
//   static type(){
//     console.log('This is an Animal')
//   }
// }

// let cat = new Animal('tom', 3, 'meow')
// let doggy = new Animal('tommy', 10, 'bark');
// doggy.speak()
// cat.speak()
// Animal.type()

// let curr_date = new Date();
// console.log(curr_date.getMonth()+1)
// console.log(curr_date.getFullYear())

// function exec(){
//   let a = 0;
//   for( let i = 0; i<1000000000000000000000; i++){
//     a = a+i
//   }
//   return a;
// }

// let btime = new Date();
// let btime_ = btime.getTime();
// console.log(btime_);
// console.log(exec());
// let atime = new Date();
// let atime_ = atime.getTime();
// console.log(atime_)

// function callingSum(){
//   sum = 0
//   for(let i = 0; i< 10; i++){
//     sum +=i
//   }
//   return sum
// }

// function callingSum1000(){
//    console.log(callingSum())
// }

// function print(){
//   console.log('2th Hello')
// }

// console.log('calling function')

// setTimeout(callingSum1000, 1000)

// console.log('Hello')

// setTimeout(print,600)
// console.log('after 600 ms')

// setTimeout(print, 2000)
// console.log('after 2000 ms')

const fs = require("fs");
fs.readFile('a.txt', 'UTF-8',function(err,data){
  console.log(data)
})
// Write your JavaScript here and click Run
// const user_name = "sam";
// console.log(user_name);

// let gender = "male";

// if ((gender = "male")) {
//   console.log("hello");
// } else if ((gender = "female")) {
//   console.log("hii");
// } else {
//   console.log("default");
// }

// let count = 0;

// for (let i = 0; i <= 1000; i++) {
//   console.log(count);
//   count++;
// }

// const a = 10;
// console.log("the value of the variable is " + a);

// let var_arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let new_arr = [];
// for (let i = 0; i < var_arr.length; i++) {
//   if ((var_arr[i])%2==0) {
//     // console.log(var_arr[i]);
//   }
// }

// let largest = 0;
// for( let i = 0; i< var_arr.length; i++){
//   if (var_arr[i]> largest){
//     largest = var_arr[i];
//   }
// }
// console.log(largest);

// objects

// let users = {
//   user1:{
//     fname:'Nutan',
//     age:23,
//     gender: "male"
//   },
//   user2:{
//     fname:'Sam',
//     age:23,
//     gender:'female'
//   }
// }

// console.log(users.user1.fname)
// console.log(users['user1']['fname'])

// let users = [{
//   fname:"Sam",
//   age:23,
//   gender: 'female'
// },{
//   fname:'Nutan',
//   age:23,
//   gender:'male'
// }]

// for(let i =0; i<users.length;i++){
//   if(users[i]['gender']=='female'){
//     console.log(users[i]['fname'])
//   }
// }

// reversing the elements in an array:

// let arr= [1,2,3,4,5,6,7,8];
// let temp;
// for(let i = 0; i<arr.length/2; i++){
//   temp = arr[i]
//   arr[i] = arr[arr.length-i-1]
//   arr[arr.length-i-1]=temp
// }
// console.log(arr)
// let j;
// for(let i = 0; i< arr.length/2; i++){
//   j = arr.length-i-1;
//   [arr[i], arr[j]]= [arr[j],arr[i]];
// }
// console.log(arr)

// Functions:
// function sum(a,b){
//   return a+b;
// }

// const value = sum(6,7);
// console.log(value)

// function sum(a,b){
//   let result = a+b;
//   return result;
// }
// function display_result(data){
//   console.log("The sum of the nums is: " + data);
// }

// sum(6,7)

// Callbacks:

// function print(data){
//   console.log(data);
// }

// function sum(a,b,callback){
//   let result = a+b;
//   callback(result);
// }

// sum(6,7,print);

// function sum( a,b,callback){
//   result = a+b;
//   callback(result);
// }
// sum(6,7, (result)=>{
//   console.log(result);
// });

// calculate sum or sub based on the requirements:

// function cal(a,b,callback){
//   console.log(callback(a,b));
// }

// function sum(a,b){
//   return a+b;
// }

// function sub(a,b,c){
//   return a-b;
// }

// cal(6,7,sub);


// function sum(num1, num2) {
// let result = num1 + num2;
// return result;
// }

// function displayResult(data) {
// console.log("Result of the sum is : " + data);
// return data;
// }

// function displayResultPassive(data) {
// console.log("Sum's result is : " + data);
// }

// console.log(displayResult(sum(3, 5)));


// COUNTER FROM 30 TO 0

// let count = 10;

// function counter_(){
//   console.clear();
//   console.log(count--);
 
//   if (count == 0){
//     clearInterval(interval)
//   }
// }

// let interval = setInterval(counter_, 500);

// let curr_time = new Date().toLocaleTimeString('en-IN',{timeZone:'Asia/Kolkata'});

// function time_(){
//   console.clear();
//   console.log(curr_time);
//   curr_time = new Date().toLocaleTimeString('en-IN',{timeZone:'Asia/Kolkata'});
// }

// let Interval = setInterval(time_,1*1000);

// console.log('Sangamesh'.indexOf('gamesh'));
// console.log('Sangamesh San'.lastIndexOf('San'));
// console.log('Sangamesh'.replace('amesh',' and Sunny'));
// console.log('Sangamesh'.slice(2,6));
// console.log('Sangamesh'.repeat(3))

// parsing the string into int

// let value = '21';
// console.log(typeof(value))
// value = parseInt(value)
// console.log(value)
// console.log(typeof(value))
// console.log(parseInt('42ppxdvasf'))


// Arrays:

// arr = [1,2,3]
// arr.push(4)
// console.log(arr)

// arr.pop()
// console.log(arr)

// arr.shift()
// console.log(arr)

// arr.unshift(20)
// console.log(arr)

// arr = [1,2,3,4,5,6,7];

// function logfun(str){
//   console.log(str);
// }

// arr.forEach(logfun);

// class Animal {
  
//   constructor(fname, age, sound){
//     this.fname = fname;
//     this.age = age;
//     this.sound = sound;
//   }
//   speak(){
//     console.log(this.sound);
//   }
//   static type(){
//     console.log('This is an Animal')
//   }
// }

// let cat = new Animal('tom', 3, 'meow')
// let doggy = new Animal('tommy', 10, 'bark');
// doggy.speak()
// cat.speak()
// Animal.type()

// let curr_date = new Date();
// console.log(curr_date.getMonth()+1)
// console.log(curr_date.getFullYear())

// function exec(){
//   let a = 0;
//   for( let i = 0; i<1000000000000000000000; i++){
//     a = a+i
//   }
//   return a;
// }

// let btime = new Date();
// let btime_ = btime.getTime();
// console.log(btime_);
// console.log(exec());
// let atime = new Date();
// let atime_ = atime.getTime();
// console.log(atime_)

// function callingSum(){
//   sum = 0
//   for(let i = 0; i< 10; i++){
//     sum +=i
//   }
//   return sum
// }

// function callingSum1000(){
//    console.log(callingSum())
// }

// function print(){
//   console.log('2th Hello')
// }

// console.log('calling function')

// setTimeout(callingSum1000, 1000)

// console.log('Hello')

// setTimeout(print,600)
// console.log('after 600 ms')

// setTimeout(print, 2000)
// console.log('after 2000 ms')

const fs = require("fs");
fs.readFile('a.txt', 'UTF-8',function(err,data){
  console.log(data)
})
// Write your JavaScript here and click Run
// const user_name = "sam";
// console.log(user_name);

// let gender = "male";

// if ((gender = "male")) {
//   console.log("hello");
// } else if ((gender = "female")) {
//   console.log("hii");
// } else {
//   console.log("default");
// }

// let count = 0;

// for (let i = 0; i <= 1000; i++) {
//   console.log(count);
//   count++;
// }

// const a = 10;
// console.log("the value of the variable is " + a);

// let var_arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let new_arr = [];
// for (let i = 0; i < var_arr.length; i++) {
//   if ((var_arr[i])%2==0) {
//     // console.log(var_arr[i]);
//   }
// }

// let largest = 0;
// for( let i = 0; i< var_arr.length; i++){
//   if (var_arr[i]> largest){
//     largest = var_arr[i];
//   }
// }
// console.log(largest);

// objects

// let users = {
//   user1:{
//     fname:'Nutan',
//     age:23,
//     gender: "male"
//   },
//   user2:{
//     fname:'Sam',
//     age:23,
//     gender:'female'
//   }
// }

// console.log(users.user1.fname)
// console.log(users['user1']['fname'])

// let users = [{
//   fname:"Sam",
//   age:23,
//   gender: 'female'
// },{
//   fname:'Nutan',
//   age:23,
//   gender:'male'
// }]

// for(let i =0; i<users.length;i++){
//   if(users[i]['gender']=='female'){
//     console.log(users[i]['fname'])
//   }
// }

// reversing the elements in an array:

// let arr= [1,2,3,4,5,6,7,8];
// let temp;
// for(let i = 0; i<arr.length/2; i++){
//   temp = arr[i]
//   arr[i] = arr[arr.length-i-1]
//   arr[arr.length-i-1]=temp
// }
// console.log(arr)
// let j;
// for(let i = 0; i< arr.length/2; i++){
//   j = arr.length-i-1;
//   [arr[i], arr[j]]= [arr[j],arr[i]];
// }
// console.log(arr)

// Functions:
// function sum(a,b){
//   return a+b;
// }

// const value = sum(6,7);
// console.log(value)

// function sum(a,b){
//   let result = a+b;
//   return result;
// }
// function display_result(data){
//   console.log("The sum of the nums is: " + data);
// }

// sum(6,7)

// Callbacks:

// function print(data){
//   console.log(data);
// }

// function sum(a,b,callback){
//   let result = a+b;
//   callback(result);
// }

// sum(6,7,print);

// function sum( a,b,callback){
//   result = a+b;
//   callback(result);
// }
// sum(6,7, (result)=>{
//   console.log(result);
// });

// calculate sum or sub based on the requirements:

// function cal(a,b,callback){
//   console.log(callback(a,b));
// }

// function sum(a,b){
//   return a+b;
// }

// function sub(a,b,c){
//   return a-b;
// }

// cal(6,7,sub);


// function sum(num1, num2) {
// let result = num1 + num2;
// return result;
// }

// function displayResult(data) {
// console.log("Result of the sum is : " + data);
// return data;
// }

// function displayResultPassive(data) {
// console.log("Sum's result is : " + data);
// }

// console.log(displayResult(sum(3, 5)));


// COUNTER FROM 30 TO 0

// let count = 10;

// function counter_(){
//   console.clear();
//   console.log(count--);
 
//   if (count == 0){
//     clearInterval(interval)
//   }
// }

// let interval = setInterval(counter_, 500);

// let curr_time = new Date().toLocaleTimeString('en-IN',{timeZone:'Asia/Kolkata'});

// function time_(){
//   console.clear();
//   console.log(curr_time);
//   curr_time = new Date().toLocaleTimeString('en-IN',{timeZone:'Asia/Kolkata'});
// }

// let Interval = setInterval(time_,1*1000);

// console.log('Sangamesh'.indexOf('gamesh'));
// console.log('Sangamesh San'.lastIndexOf('San'));
// console.log('Sangamesh'.replace('amesh',' and Sunny'));
// console.log('Sangamesh'.slice(2,6));
// console.log('Sangamesh'.repeat(3))

// parsing the string into int

// let value = '21';
// console.log(typeof(value))
// value = parseInt(value)
// console.log(value)
// console.log(typeof(value))
// console.log(parseInt('42ppxdvasf'))


// Arrays:

// arr = [1,2,3]
// arr.push(4)
// console.log(arr)

// arr.pop()
// console.log(arr)

// arr.shift()
// console.log(arr)

// arr.unshift(20)
// console.log(arr)

// arr = [1,2,3,4,5,6,7];

// function logfun(str){
//   console.log(str);
// }

// arr.forEach(logfun);

// class Animal {
  
//   constructor(fname, age, sound){
//     this.fname = fname;
//     this.age = age;
//     this.sound = sound;
//   }
//   speak(){
//     console.log(this.sound);
//   }
//   static type(){
//     console.log('This is an Animal')
//   }
// }

// let cat = new Animal('tom', 3, 'meow')
// let doggy = new Animal('tommy', 10, 'bark');
// doggy.speak()
// cat.speak()
// Animal.type()

// let curr_date = new Date();
// console.log(curr_date.getMonth()+1)
// console.log(curr_date.getFullYear())

// function exec(){
//   let a = 0;
//   for( let i = 0; i<1000000000000000000000; i++){
//     a = a+i
//   }
//   return a;
// }

// let btime = new Date();
// let btime_ = btime.getTime();
// console.log(btime_);
// console.log(exec());
// let atime = new Date();
// let atime_ = atime.getTime();
// console.log(atime_)

// function callingSum(){
//   sum = 0
//   for(let i = 0; i< 10; i++){
//     sum +=i
//   }
//   return sum
// }

// function callingSum1000(){
//    console.log(callingSum())
// }

// function print(){
//   console.log('2th Hello')
// }

// console.log('calling function')

// setTimeout(callingSum1000, 1000)

// console.log('Hello')

// setTimeout(print,600)
// console.log('after 600 ms')

// setTimeout(print, 2000)
// console.log('after 2000 ms')

const fs = require("fs");
fs.readFile('a.txt', 'UTF-8',function(err,data){
  console.log(data)
})
// Write your JavaScript here and click Run
// const user_name = "sam";
// console.log(user_name);

// let gender = "male";

// if ((gender = "male")) {
//   console.log("hello");
// } else if ((gender = "female")) {
//   console.log("hii");
// } else {
//   console.log("default");
// }

// let count = 0;

// for (let i = 0; i <= 1000; i++) {
//   console.log(count);
//   count++;
// }

// const a = 10;
// console.log("the value of the variable is " + a);

// let var_arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let new_arr = [];
// for (let i = 0; i < var_arr.length; i++) {
//   if ((var_arr[i])%2==0) {
//     // console.log(var_arr[i]);
//   }
// }

// let largest = 0;
// for( let i = 0; i< var_arr.length; i++){
//   if (var_arr[i]> largest){
//     largest = var_arr[i];
//   }
// }
// console.log(largest);

// objects

// let users = {
//   user1:{
//     fname:'Nutan',
//     age:23,
//     gender: "male"
//   },
//   user2:{
//     fname:'Sam',
//     age:23,
//     gender:'female'
//   }
// }

// console.log(users.user1.fname)
// console.log(users['user1']['fname'])

// let users = [{
//   fname:"Sam",
//   age:23,
//   gender: 'female'
// },{
//   fname:'Nutan',
//   age:23,
//   gender:'male'
// }]

// for(let i =0; i<users.length;i++){
//   if(users[i]['gender']=='female'){
//     console.log(users[i]['fname'])
//   }
// }

// reversing the elements in an array:

// let arr= [1,2,3,4,5,6,7,8];
// let temp;
// for(let i = 0; i<arr.length/2; i++){
//   temp = arr[i]
//   arr[i] = arr[arr.length-i-1]
//   arr[arr.length-i-1]=temp
// }
// console.log(arr)
// let j;
// for(let i = 0; i< arr.length/2; i++){
//   j = arr.length-i-1;
//   [arr[i], arr[j]]= [arr[j],arr[i]];
// }
// console.log(arr)

// Functions:
// function sum(a,b){
//   return a+b;
// }

// const value = sum(6,7);
// console.log(value)

// function sum(a,b){
//   let result = a+b;
//   return result;
// }
// function display_result(data){
//   console.log("The sum of the nums is: " + data);
// }

// sum(6,7)

// Callbacks:

// function print(data){
//   console.log(data);
// }

// function sum(a,b,callback){
//   let result = a+b;
//   callback(result);
// }

// sum(6,7,print);

// function sum( a,b,callback){
//   result = a+b;
//   callback(result);
// }
// sum(6,7, (result)=>{
//   console.log(result);
// });

// calculate sum or sub based on the requirements:

// function cal(a,b,callback){
//   console.log(callback(a,b));
// }

// function sum(a,b){
//   return a+b;
// }

// function sub(a,b,c){
//   return a-b;
// }

// cal(6,7,sub);


// function sum(num1, num2) {
// let result = num1 + num2;
// return result;
// }

// function displayResult(data) {
// console.log("Result of the sum is : " + data);
// return data;
// }

// function displayResultPassive(data) {
// console.log("Sum's result is : " + data);
// }

// console.log(displayResult(sum(3, 5)));


// COUNTER FROM 30 TO 0

// let count = 10;

// function counter_(){
//   console.clear();
//   console.log(count--);
 
//   if (count == 0){
//     clearInterval(interval)
//   }
// }

// let interval = setInterval(counter_, 500);

// let curr_time = new Date().toLocaleTimeString('en-IN',{timeZone:'Asia/Kolkata'});

// function time_(){
//   console.clear();
//   console.log(curr_time);
//   curr_time = new Date().toLocaleTimeString('en-IN',{timeZone:'Asia/Kolkata'});
// }

// let Interval = setInterval(time_,1*1000);

// console.log('Sangamesh'.indexOf('gamesh'));
// console.log('Sangamesh San'.lastIndexOf('San'));
// console.log('Sangamesh'.replace('amesh',' and Sunny'));
// console.log('Sangamesh'.slice(2,6));
// console.log('Sangamesh'.repeat(3))

// parsing the string into int

// let value = '21';
// console.log(typeof(value))
// value = parseInt(value)
// console.log(value)
// console.log(typeof(value))
// console.log(parseInt('42ppxdvasf'))


// Arrays:

// arr = [1,2,3]
// arr.push(4)
// console.log(arr)

// arr.pop()
// console.log(arr)

// arr.shift()
// console.log(arr)

// arr.unshift(20)
// console.log(arr)

// arr = [1,2,3,4,5,6,7];

// function logfun(str){
//   console.log(str);
// }

// arr.forEach(logfun);

// class Animal {
  
//   constructor(fname, age, sound){
//     this.fname = fname;
//     this.age = age;
//     this.sound = sound;
//   }
//   speak(){
//     console.log(this.sound);
//   }
//   static type(){
//     console.log('This is an Animal')
//   }
// }

// let cat = new Animal('tom', 3, 'meow')
// let doggy = new Animal('tommy', 10, 'bark');
// doggy.speak()
// cat.speak()
// Animal.type()

// let curr_date = new Date();
// console.log(curr_date.getMonth()+1)
// console.log(curr_date.getFullYear())

// function exec(){
//   let a = 0;
//   for( let i = 0; i<1000000000000000000000; i++){
//     a = a+i
//   }
//   return a;
// }

// let btime = new Date();
// let btime_ = btime.getTime();
// console.log(btime_);
// console.log(exec());
// let atime = new Date();
// let atime_ = atime.getTime();
// console.log(atime_)

// function callingSum(){
//   sum = 0
//   for(let i = 0; i< 10; i++){
//     sum +=i
//   }
//   return sum
// }

// function callingSum1000(){
//    console.log(callingSum())
// }

// function print(){
//   console.log('2th Hello')
// }

// console.log('calling function')

// setTimeout(callingSum1000, 1000)

// console.log('Hello')

// setTimeout(print,600)
// console.log('after 600 ms')

// setTimeout(print, 2000)
// console.log('after 2000 ms')

const fs = require("fs");
fs.readFile('a.txt', 'UTF-8',function(err,data){
  console.log(data)
})
// Write your JavaScript here and click Run
// const user_name = "sam";
// console.log(user_name);

// let gender = "male";

// if ((gender = "male")) {
//   console.log("hello");
// } else if ((gender = "female")) {
//   console.log("hii");
// } else {
//   console.log("default");
// }

// let count = 0;

// for (let i = 0; i <= 1000; i++) {
//   console.log(count);
//   count++;
// }

// const a = 10;
// console.log("the value of the variable is " + a);

// let var_arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let new_arr = [];
// for (let i = 0; i < var_arr.length; i++) {
//   if ((var_arr[i])%2==0) {
//     // console.log(var_arr[i]);
//   }
// }

// let largest = 0;
// for( let i = 0; i< var_arr.length; i++){
//   if (var_arr[i]> largest){
//     largest = var_arr[i];
//   }
// }
// console.log(largest);

// objects

// let users = {
//   user1:{
//     fname:'Nutan',
//     age:23,
//     gender: "male"
//   },
//   user2:{
//     fname:'Sam',
//     age:23,
//     gender:'female'
//   }
// }

// console.log(users.user1.fname)
// console.log(users['user1']['fname'])

// let users = [{
//   fname:"Sam",
//   age:23,
//   gender: 'female'
// },{
//   fname:'Nutan',
//   age:23,
//   gender:'male'
// }]

// for(let i =0; i<users.length;i++){
//   if(users[i]['gender']=='female'){
//     console.log(users[i]['fname'])
//   }
// }

// reversing the elements in an array:

// let arr= [1,2,3,4,5,6,7,8];
// let temp;
// for(let i = 0; i<arr.length/2; i++){
//   temp = arr[i]
//   arr[i] = arr[arr.length-i-1]
//   arr[arr.length-i-1]=temp
// }
// console.log(arr)
// let j;
// for(let i = 0; i< arr.length/2; i++){
//   j = arr.length-i-1;
//   [arr[i], arr[j]]= [arr[j],arr[i]];
// }
// console.log(arr)

// Functions:
// function sum(a,b){
//   return a+b;
// }

// const value = sum(6,7);
// console.log(value)

// function sum(a,b){
//   let result = a+b;
//   return result;
// }
// function display_result(data){
//   console.log("The sum of the nums is: " + data);
// }

// sum(6,7)

// Callbacks:

// function print(data){
//   console.log(data);
// }

// function sum(a,b,callback){
//   let result = a+b;
//   callback(result);
// }

// sum(6,7,print);

// function sum( a,b,callback){
//   result = a+b;
//   callback(result);
// }
// sum(6,7, (result)=>{
//   console.log(result);
// });

// calculate sum or sub based on the requirements:

// function cal(a,b,callback){
//   console.log(callback(a,b));
// }

// function sum(a,b){
//   return a+b;
// }

// function sub(a,b,c){
//   return a-b;
// }

// cal(6,7,sub);


// function sum(num1, num2) {
// let result = num1 + num2;
// return result;
// }

// function displayResult(data) {
// console.log("Result of the sum is : " + data);
// return data;
// }

// function displayResultPassive(data) {
// console.log("Sum's result is : " + data);
// }

// console.log(displayResult(sum(3, 5)));


// COUNTER FROM 30 TO 0

// let count = 10;

// function counter_(){
//   console.clear();
//   console.log(count--);
 
//   if (count == 0){
//     clearInterval(interval)
//   }
// }

// let interval = setInterval(counter_, 500);

// let curr_time = new Date().toLocaleTimeString('en-IN',{timeZone:'Asia/Kolkata'});

// function time_(){
//   console.clear();
//   console.log(curr_time);
//   curr_time = new Date().toLocaleTimeString('en-IN',{timeZone:'Asia/Kolkata'});
// }

// let Interval = setInterval(time_,1*1000);

// console.log('Sangamesh'.indexOf('gamesh'));
// console.log('Sangamesh San'.lastIndexOf('San'));
// console.log('Sangamesh'.replace('amesh',' and Sunny'));
// console.log('Sangamesh'.slice(2,6));
// console.log('Sangamesh'.repeat(3))

// parsing the string into int

// let value = '21';
// console.log(typeof(value))
// value = parseInt(value)
// console.log(value)
// console.log(typeof(value))
// console.log(parseInt('42ppxdvasf'))


// Arrays:

// arr = [1,2,3]
// arr.push(4)
// console.log(arr)

// arr.pop()
// console.log(arr)

// arr.shift()
// console.log(arr)

// arr.unshift(20)
// console.log(arr)

// arr = [1,2,3,4,5,6,7];

// function logfun(str){
//   console.log(str);
// }

// arr.forEach(logfun);

// class Animal {
  
//   constructor(fname, age, sound){
//     this.fname = fname;
//     this.age = age;
//     this.sound = sound;
//   }
//   speak(){
//     console.log(this.sound);
//   }
//   static type(){
//     console.log('This is an Animal')
//   }
// }

// let cat = new Animal('tom', 3, 'meow')
// let doggy = new Animal('tommy', 10, 'bark');
// doggy.speak()
// cat.speak()
// Animal.type()

// let curr_date = new Date();
// console.log(curr_date.getMonth()+1)
// console.log(curr_date.getFullYear())

// function exec(){
//   let a = 0;
//   for( let i = 0; i<1000000000000000000000; i++){
//     a = a+i
//   }
//   return a;
// }

// let btime = new Date();
// let btime_ = btime.getTime();
// console.log(btime_);
// console.log(exec());
// let atime = new Date();
// let atime_ = atime.getTime();
// console.log(atime_)

// function callingSum(){
//   sum = 0
//   for(let i = 0; i< 10; i++){
//     sum +=i
//   }
//   return sum
// }

// function callingSum1000(){
//    console.log(callingSum())
// }

// function print(){
//   console.log('2th Hello')
// }

// console.log('calling function')

// setTimeout(callingSum1000, 1000)

// console.log('Hello')

// setTimeout(print,600)
// console.log('after 600 ms')

// setTimeout(print, 2000)
// console.log('after 2000 ms')

const fs = require("fs");
fs.readFile('a.txt', 'UTF-8',function(err,data){
  console.log(data)
})
// Write your JavaScript here and click Run
// const user_name = "sam";
// console.log(user_name);

// let gender = "male";

// if ((gender = "male")) {
//   console.log("hello");
// } else if ((gender = "female")) {
//   console.log("hii");
// } else {
//   console.log("default");
// }

// let count = 0;

// for (let i = 0; i <= 1000; i++) {
//   console.log(count);
//   count++;
// }

// const a = 10;
// console.log("the value of the variable is " + a);

// let var_arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let new_arr = [];
// for (let i = 0; i < var_arr.length; i++) {
//   if ((var_arr[i])%2==0) {
//     // console.log(var_arr[i]);
//   }
// }

// let largest = 0;
// for( let i = 0; i< var_arr.length; i++){
//   if (var_arr[i]> largest){
//     largest = var_arr[i];
//   }
// }
// console.log(largest);

// objects

// let users = {
//   user1:{
//     fname:'Nutan',
//     age:23,
//     gender: "male"
//   },
//   user2:{
//     fname:'Sam',
//     age:23,
//     gender:'female'
//   }
// }

// console.log(users.user1.fname)
// console.log(users['user1']['fname'])

// let users = [{
//   fname:"Sam",
//   age:23,
//   gender: 'female'
// },{
//   fname:'Nutan',
//   age:23,
//   gender:'male'
// }]

// for(let i =0; i<users.length;i++){
//   if(users[i]['gender']=='female'){
//     console.log(users[i]['fname'])
//   }
// }

// reversing the elements in an array:

// let arr= [1,2,3,4,5,6,7,8];
// let temp;
// for(let i = 0; i<arr.length/2; i++){
//   temp = arr[i]
//   arr[i] = arr[arr.length-i-1]
//   arr[arr.length-i-1]=temp
// }
// console.log(arr)
// let j;
// for(let i = 0; i< arr.length/2; i++){
//   j = arr.length-i-1;
//   [arr[i], arr[j]]= [arr[j],arr[i]];
// }
// console.log(arr)

// Functions:
// function sum(a,b){
//   return a+b;
// }

// const value = sum(6,7);
// console.log(value)

// function sum(a,b){
//   let result = a+b;
//   return result;
// }
// function display_result(data){
//   console.log("The sum of the nums is: " + data);
// }

// sum(6,7)

// Callbacks:

// function print(data){
//   console.log(data);
// }

// function sum(a,b,callback){
//   let result = a+b;
//   callback(result);
// }

// sum(6,7,print);

// function sum( a,b,callback){
//   result = a+b;
//   callback(result);
// }
// sum(6,7, (result)=>{
//   console.log(result);
// });

// calculate sum or sub based on the requirements:

// function cal(a,b,callback){
//   console.log(callback(a,b));
// }

// function sum(a,b){
//   return a+b;
// }

// function sub(a,b,c){
//   return a-b;
// }

// cal(6,7,sub);


// function sum(num1, num2) {
// let result = num1 + num2;
// return result;
// }

// function displayResult(data) {
// console.log("Result of the sum is : " + data);
// return data;
// }

// function displayResultPassive(data) {
// console.log("Sum's result is : " + data);
// }

// console.log(displayResult(sum(3, 5)));


// COUNTER FROM 30 TO 0

// let count = 10;

// function counter_(){
//   console.clear();
//   console.log(count--);
 
//   if (count == 0){
//     clearInterval(interval)
//   }
// }

// let interval = setInterval(counter_, 500);

// let curr_time = new Date().toLocaleTimeString('en-IN',{timeZone:'Asia/Kolkata'});

// function time_(){
//   console.clear();
//   console.log(curr_time);
//   curr_time = new Date().toLocaleTimeString('en-IN',{timeZone:'Asia/Kolkata'});
// }

// let Interval = setInterval(time_,1*1000);

// console.log('Sangamesh'.indexOf('gamesh'));
// console.log('Sangamesh San'.lastIndexOf('San'));
// console.log('Sangamesh'.replace('amesh',' and Sunny'));
// console.log('Sangamesh'.slice(2,6));
// console.log('Sangamesh'.repeat(3))

// parsing the string into int

// let value = '21';
// console.log(typeof(value))
// value = parseInt(value)
// console.log(value)
// console.log(typeof(value))
// console.log(parseInt('42ppxdvasf'))


// Arrays:

// arr = [1,2,3]
// arr.push(4)
// console.log(arr)

// arr.pop()
// console.log(arr)

// arr.shift()
// console.log(arr)

// arr.unshift(20)
// console.log(arr)

// arr = [1,2,3,4,5,6,7];

// function logfun(str){
//   console.log(str);
// }

// arr.forEach(logfun);

// class Animal {
  
//   constructor(fname, age, sound){
//     this.fname = fname;
//     this.age = age;
//     this.sound = sound;
//   }
//   speak(){
//     console.log(this.sound);
//   }
//   static type(){
//     console.log('This is an Animal')
//   }
// }

// let cat = new Animal('tom', 3, 'meow')
// let doggy = new Animal('tommy', 10, 'bark');
// doggy.speak()
// cat.speak()
// Animal.type()

// let curr_date = new Date();
// console.log(curr_date.getMonth()+1)
// console.log(curr_date.getFullYear())

// function exec(){
//   let a = 0;
//   for( let i = 0; i<1000000000000000000000; i++){
//     a = a+i
//   }
//   return a;
// }

// let btime = new Date();
// let btime_ = btime.getTime();
// console.log(btime_);
// console.log(exec());
// let atime = new Date();
// let atime_ = atime.getTime();
// console.log(atime_)

// function callingSum(){
//   sum = 0
//   for(let i = 0; i< 10; i++){
//     sum +=i
//   }
//   return sum
// }

// function callingSum1000(){
//    console.log(callingSum())
// }

// function print(){
//   console.log('2th Hello')
// }

// console.log('calling function')

// setTimeout(callingSum1000, 1000)

// console.log('Hello')

// setTimeout(print,600)
// console.log('after 600 ms')

// setTimeout(print, 2000)
// console.log('after 2000 ms')

// const fs = require("fs");
// fs.readFile('a.txt', 'UTF-8',function(err,data){
//   console.log(data)
// })


// Callbacks vs promises:
// Callback:

