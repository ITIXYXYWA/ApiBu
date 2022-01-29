import Iterator from "./Iterator.js"
import Singleton from "./singleton.js"

class Factory {
  static newAwesomeClass (array) {
    return new Iterator(array)
  }

  static Singleton () {
    return new Singleton()
  }
}

export default Factory