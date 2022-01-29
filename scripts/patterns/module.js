import Factory from "./factory.js"

export const Module = (function () {
  const privateData = 'hello world!'

  return {
    Factory: Factory
  }

}())