import { Module } from "./patterns/module.js";

Module.getData()

const testArray = [1, 'dog', 'eleven']

const Iterator = Module.Iterator(testArray)

// Iterator.each((item) => console.log(item))

console.log(Iterator.next())
console.log(Iterator.next())
console.log(Iterator.next())
console.log(Iterator.next())
