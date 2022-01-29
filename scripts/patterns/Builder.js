class Builder {
	constructor () {
		this.url = '' 
		this.uri = ''
		this.method = null
	}

	addUrl (url) {
		this.url = url 
		return this
	}

	addUri (uri) {
		this.uri = uri
		return this
	}

	addMethod (method) {
		this.method = method
		return this
	}

	async build () {
		const promise = await fetch(
			this.url + this.uri, {
			method: !this.method ? "GET" : this.method 
		})

		return await promise.json()
	}
}

export default Builder