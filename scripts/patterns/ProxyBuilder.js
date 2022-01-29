import Builder from "./Builder.js";

class ProxyBuilder {
  constructor () {
    this.Builder = new Builder()
  }

  
	addUrl (url) {
    this.Builder.addUrl(url)
    console.log(url)
		return this
	}

	addUri (uri) {
    this.Builder.addUri(uri)
    console.log(uri)
		return this
	}

	addMethod (method) {
    this.Builder.addMethod(method)
    console.log(method)
		return this
	}

	build () {
    return this.Builder.build()
	}
}

export default ProxyBuilder
