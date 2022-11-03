import React from 'react'
import Selfie from '../../Assets/Yufa.png'

export default function About() {
    return (
        <div className='sideAbout'>
            <div className='sideAboutItem'>
                <p className='sideAboutTitle'>ABOUT ME</p>
                <img className='selfie' src={Selfie} alt='Picture of Me'></img>
                <blockquote className="wp-block-quote">
                    <p>“So plant your own gardens and decorate your own soul,
                        instead of waiting for someone to bring you flowers.”</p>
                    <cite>— Jorge Luis Borges</cite>
                </blockquote>
                <br></br>
                <p>Hi Friends! <img draggable="false" role="img" className="emoji" alt="👋"
                    src="https://s.w.org/images/core/emoji/14.0.0/svg/1f44b.svg"></img>
                    My name is Yufa. I am a aspiring Software Engineer focusing on protecting users’ mental health and accessibility.
                    my personal journey as an immigrant, HR practitioner and meditation teacher have shaped my mission to foster and build environments where everyone can thrive.
                    <br />
                    <br />
                    Fun Facts:
                </p>
                <ul>
                    <li>I am passionate about learning new things and always looking for ways to nurture my inner growth.</li>
                    <li>I bring order, peace, and calm to complex, unpredictable, sometimes stressful people-centric environments.</li>
                </ul>
            </div>
            <hr />
        </div>
    )
}
