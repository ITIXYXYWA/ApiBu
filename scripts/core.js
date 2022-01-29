import ApiBu from './patterns/Module.js'

const Req = ApiBu.Req
  .addUrl('https://jsonplaceholder.typicode.com')
  .addUri('/users')
  .build()


Req.then(posts => {
  const postsIter = ApiBu.Iterator(posts)
  // posts.forEach(el => console.log(el))
  postsIter.each(item => console.log(item))
})

