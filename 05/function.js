"use strict";
function printHello(){
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message)
}
log('Heelo')

//2. parameters
function changeName(obj){
    obj.name = 'coder'
}

const ellie = {name: 'ellie'};
console.log(ellie)
// changeName(ellie);
// console.log(ellie);

05강 09:07