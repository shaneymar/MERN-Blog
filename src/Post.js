import React from 'react'

const Post = () => {
  return (
    <div className='post'>
        <div className='image'>
          <img src="https://techcrunch.com/wp-content/uploads/2023/07/threads-image-getty.jpg?w=730&crop=1" alt="Instagram Threads" />
        </div>
        <div className='texts'>
          <h2>Threads’ latest growth hack is showing posts on Facebook</h2>
          <p className='info'>
            <a href="/" className='author'>David Malan</a>
             <time>2023-01-06 16:45</time>
            </p>
          <p className='summary'>While Meta is continuously introducing new features to Threads, the company is also deploying new tricks to ramp up engagement on the platform. In its latest move, the social media giant is showing posts from Threads on Facebook.</p>
        </div>
    </div>
  )
}

export default Post