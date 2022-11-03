import { useEffect, useState } from "react"
import '../../components/style.scss'
import Header from '../../components/Header.jsx'
import Posts from '../../components/Posts.jsx'
import About from '../../components/About.jsx'
import axios from "axios"


export default function Home() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const postsData = async () => {
            const res = await axios.get('http://localhost:8000/api/posts')
            setPosts(res.data)
        }
        postsData()
        // fetch('http://localhost:8000/api/posts', {
        //     headers: {
        //         "Access-Control-Allow-Credentials": true
        //     },
        // })
        //     .then((response) => response.json())
        //     .then((data) => console.log(data));
    }, [])


    return (
        <>
            <Header />
            <div className="home">
                <Posts posts={posts} />
                {/* {console.log(posts)} */}
                <About />
            </div>
        </>

    )
}
