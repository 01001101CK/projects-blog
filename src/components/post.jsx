import React from 'react';
import { Link } from 'react-router-dom'


export default function post({ post }) {
    // { console.log(post) }
    return (
        <div className="post">
            <img className='postImg'
                src='https://gopher.hey.com/1200x0,q85,sKHBU78d9FGtpdLISnZJYOv3f7sOTTwNC4Rp0mSATF8U=/https://mcusercontent.com/25c33bdcf7d6a4a5939b1ae9a/images/946f9a2e-51ad-42d4-434a-2e80848ef538.jpg'
                alt="Post Image" />'
            <div className='postContent'>
                <Link className="link" to={`/post/${post._id}`}>
                    <span className='postName'>
                        {post.title}
                    </span>
                </Link>
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
