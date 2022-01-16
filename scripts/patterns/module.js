import Iterator from "./Iterator.js"

export const Module = (function () {
  const privateData = 'hello world!'

  return {
    getData: function () {
      console.log(privateData)
    },

    Iterator: data => new Iterator(data)
  }

}())