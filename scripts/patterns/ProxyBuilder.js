import Builder from "./Builder.js";

class ProxyBuilder {
  constructor () {
    this.Builder = new Builder()
  }
  
	addUrl (url) {
    this.Builder.addUrl(url)
    console.warn("URL:", url)
		return this
	}

	addUri (uri) {
    this.Builder.addUri(uri)
    console.warn("URI", uri)
		return this
	}

	addMethod (method) {
    this.Builder.addMethod(method)
    console.warn("METHOD", method)
		return this
	}

	build () {
    return this.Builder.build()
	}

	makeReq () { }
}

export default ProxyBuilder
