import ApiBu from './patterns/Module.js'
import { GetReq } from './patterns/template.js'

const Req = ApiBu.Req
  .addUrl('https://jsonplaceholder.typicode.com')
  .addUri('/users')
  .build()

const Req_2 = ApiBu.Req
  .addUrl('https://jsonplaceholder.typicode.com')
  .addUri('/posts')
  .build()

Req_2.then(posts => {
  const IteratorPosts = ApiBu.Iterator(posts)
  console.log(
    IteratorPosts.next(),
    IteratorPosts.next(),
    IteratorPosts.next(),
    IteratorPosts.next(),
    IteratorPosts.next(),
    IteratorPosts.next()
  )
})

new GetReq().makeReq('https://jsonplaceholder.typicode.com', '/users').then(res => console.log(res))
