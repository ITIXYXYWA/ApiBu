import ProxyBuilder from "./ProxyBuilder.js"

class GetReq extends ProxyBuilder {
  constructor () {
    super()
  }

  makeReq (url, uri) {
    this.addUrl(url)
    this.addUri(uri)
    this.addMethod('GET')
    return this.build()
  }
}

export { GetReq }