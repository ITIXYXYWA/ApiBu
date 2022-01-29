import Factory from "./Factory.js"
import ProxyBuilder from "./ProxyBuilder.js"

const ApiBu = (function (a) {

  return {
    Iterator: new Factory().newAwesomeClass,
    Req: new ProxyBuilder(),
  }
}())

export default ApiBu
