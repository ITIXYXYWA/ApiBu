export default class {
  constructor (data) {
    this._index = 0
    this._items = data
  }

  first () {
    this.reset()
    return this.next()
  }

  next () {
    if (this.hasNext()) {
      return this._items[this._index++]
    } else {
      return false
    }
  }

  hasNext () {
    return this._index <= this._items.length
  }

  reset () {
    this._index = 0
  }

  each (cb) {
    for (let item = this.first(); this.hasNext(); item = this.next()) {
      cb(item)
    }
  }
  
  logEach () { }
}

