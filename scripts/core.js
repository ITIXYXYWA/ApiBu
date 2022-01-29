import { Module } from "./patterns/module.js"

const Factory = Module.Factory



const data = ['12412', '214124', 1412]

const Iter = Factory.newAwesomeClass(data)

console.log(Iter.next())
