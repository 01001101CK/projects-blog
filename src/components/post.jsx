import React from 'react'


export default function post({ post }) {
    { console.log(post) }
    return (
        <div className="post">
            <img className='postImg'
                src='https://gopher.hey.com/1200x0,q85,sENtDqqZLQ9CKrevknoVzAF_LyqvmhcziDF9nzEDnCuw=/https://mcusercontent.com/25c33bdcf7d6a4a5939b1ae9a/images/8b8f0c4b-56cc-94f6-9b6f-424ee35f7f06.jpg'
                alt='postImg'
            />
            <div className='postContent'>
                <span className='postName'>
                    {post.title}
                </span>
                <br />
                <span className='postAuthor'>Author: Yufa</span>
                <br />
                <p className='postInfo'>
                    {post.content}
                </p>
            </div>
        </div >
    )
}
