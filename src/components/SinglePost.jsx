import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import axios from "axios";
import './style.scss';
// axios.defaults.baseURL = "http://localhost:8080"


export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split('/')[2];
    // console.log(path)
    const [post, setPost] = useState({})
    let info;
    useEffect(() => {
        const getSinglePost = async () => {
            const getPost = await axios.get('http://localhost:8000/api/posts/');
            for (let i = 0; i < getPost.data.length; i++) {
                if (getPost.data[i]._id === path) info = getPost.data[i];
            }
            console.log(info)
            setPost(info)
        }
        getSinglePost()
    }, [path])
    return (
        <div className='singlePost'>
            <div className='singlePostContainer'>
                {post.picture && (
                    <img src={post.picture}
                        alt="Post Image" className="singlePostImg" />

                )}
                <h1 className="singlePostTitle">
                    {post.title}
                    <div className="singlePostEdit">
                        <i className="singlePostIcon edit fi fi-rr-edit"></i>
                        <i className="singlePostIcon delete fi-rs-trash"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <p className='singlePostAuthor'><strong>Author: Yufa</strong></p>
                    <br />
                    <p className="singlePostContent">
                        {post.content}
                    </p>
                </div>
            </div>
        </div>
    )
}
