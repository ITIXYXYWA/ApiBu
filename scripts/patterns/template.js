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

export default LogEach
