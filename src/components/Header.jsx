import './style.scss'

export default function Header() {
    return (
        <div className='header'>
            <div className='HeaderName'>
                <span className="headerName">Mind Garden</span>
            </div>
            <img
                className='headerImg'
                src='https://www.themasterpicks.com/wp-content/uploads/2019/12/Screenshot-at-Dec-26-15-39-21.png'
                alt="Bento picture"
            ></img>
        </div>
    )
}
