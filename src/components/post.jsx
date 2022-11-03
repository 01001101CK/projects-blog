import React from 'react';
import { Link } from 'react-router-dom'


export default function post({ post }) {
    // { console.log(post) }
    return (
        <div className="post">
            {post.picture && (
                <img className='postImg'
                    src={post.picture}
                    alt='postImg'
                />
            )}
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
