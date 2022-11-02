import '../../components/style.scss'
import Header from '../../components/Header.jsx'
import Posts from '../../components/Posts.jsx'
import About from '../../components/About.jsx'


export default function Home() {
    return (
        <>
            <Header />
            <div className="home">
                <Posts />
                <About />
            </div>
        </>

    )
}
