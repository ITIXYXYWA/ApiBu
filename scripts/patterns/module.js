import Factory from "./factory.js"
import ProxyBuilder from "./ProxyBuilder.js"

const ApiBu = (function (a) {

  return {
    Iterator: Factory.newAwesomeClass,
    Req: new ProxyBuilder(),
  }
}())

export default ApiBu
