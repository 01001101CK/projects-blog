import React, { Component } from 'react';
import './style.scss'
import Nav from './nav.jsx'
import Home from '../pages/Home/Home.jsx'

class App extends Component {
    render() {
        return (
            <>
                <Nav />
                <Home />
            </>
        );
    }
}

export default App;