import Iterator from "./Iterator.js"
import Singleton from "./singleton.js"

class Factory {
   constructor () {
    if (Factory.exists) {
      return Factory.instance
    }
  
    Factory.instance = this
    Factory.exists = true
    return this
  }
  
  newAwesomeClass (array) {
    return new Iterator(array)
  }

}

export default Factory