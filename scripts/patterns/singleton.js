class Singleton {
  constructor (name) {
    if (Singleton.exists) {
      return Singleton.instance
    }

    Singleton.instance = this
    Singleton.exists = true
    return this
  }
}