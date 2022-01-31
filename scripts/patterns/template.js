import Iterator from "./Iterator.js";

class LogEach extends Iterator {
  constructor (data) {
    super(data)
  }

  each () {
    for (let item = this.first(); this.hasNext(); item = this.next()) {
      console.log(item)
    }
  }
}

class getFirst extends Iterator {
  constructor(data) {
    super(data)
  }

  first() {
    return (this._items[0])
  }
}

export {LogEach, getFirst}
