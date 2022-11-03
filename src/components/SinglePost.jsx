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
            // console.log(info)
            setPost(info)
        }
        getSinglePost()
    }, [path])
    return (
        <div className='singlePost'>
            <div className='singlePostContainer'>
                <img className="singlePostImg" src='https://gopher.hey.com/1200x0,q85,sKHBU78d9FGtpdLISnZJYOv3f7sOTTwNC4Rp0mSATF8U=/https://mcusercontent.com/25c33bdcf7d6a4a5939b1ae9a/images/946f9a2e-51ad-42d4-434a-2e80848ef538.jpg'
                    alt="Post Image" />
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
