import ApiBu from './patterns/Module.js'
import LogEach from './patterns/template.js'

const Req = ApiBu.Req
  .addUrl('https://jsonplaceholder.typicode.com')
  .addUri('/users')
  .build()

const Req_2 = ApiBu.Req
  .addUrl('https://jsonplaceholder.typicode.com')
  .addUri('/posts')
  .build()


Req.then(users => {
  new LogEach(users).each()
})

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



