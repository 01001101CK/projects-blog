import React, { Component } from 'react';
import './style.scss'
import Nav from './nav.jsx'
import Home from '../pages/Home/Home.jsx'
import Single from '../pages/Home/single/single.jsx'
import Write from '../pages/Home/Write/Write.jsx'

class App extends Component {
    render() {
        return (
            <>
                <Nav />
                <Write />
            </>
        );
    }
}

export default App;