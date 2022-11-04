import '../../../components/style.scss'
import { useState } from 'react';
import axios from 'axios';

export default function Write() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            title,
            content
        };
        try {
            const res = await axios.post('http://localhost:8000/api/posts', newPost, { headers: { "Content-Type": "application/json" } });
            // console.log(res)
            window.location.replace('http://localhost:8080/post/' + res.data._id)
        } catch (err) { res.status(500).json(err) }
    }

    return (
        <div className='write'>
            <div className="write">
                <form className="writeForm" onSubmit={handleSubmit}>
                    <label htmlFor="fileInput">
                        <i className="writeAdd fi fi-rr-add"></i>
                    </label>
                    <input type='file' id="fileInput" style={{ display: 'none' }} />
                    <input type="text" placeholder='Title' className='writeInput writeTitle' onChange={e => setTitle(e.target.value)} />
                    <div className='content'>
                        <textarea type="text" placeholder="I am grateful for..." className="writeInput writeContent" onChange={e => setContent(e.target.value)} />
                    </div>
                    <button className='submit' type='submit'>Publish</button>
                </form>
            </div>
        </div>
    )
}
