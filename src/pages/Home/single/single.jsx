import '../../../components/style.scss'
import About from '../../../components/About.jsx'
import SinglePost from '../../../components/SinglePost.jsx'

export default function single() {
    return (
        <div className='single'>
            <SinglePost />
            <About />
        </div>
    )
}
