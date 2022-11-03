import React from 'react'
import post from './post.jsx'
import Post from './post.jsx'
import './style.scss'

{/* {posts.map(each => (
    <Post post={each} />
))}  */}

export default function Posts({ posts }) {
    const post = [];
    for (let i = 0; i < posts.length; i++) {
        post.push(<Post post={posts[i]} key={`post${i}`} />)
    }
    return (
        <div className="posts">
            {post}
        </div>
    )
}
