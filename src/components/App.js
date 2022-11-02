import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import './style.scss'
import Nav from './nav.jsx'
import Home from '../pages/Home/Home.jsx'
import Single from '../pages/Home/single/single.jsx'
import Write from '../pages/Home/Write/Write.jsx'

class App extends Component {
    render() {
        return (
            <Router>
                <Nav />
                <Routes>
                    <Route exact path='/' caseSensitive={false} element={<Home />} />
                    <Route path='/home' caseSensitive={false} element={<Home />} />
                    <Route path='/write' caseSensitive={false} element={<Write />} />
                    <Route path='/post/:postId' caseSensitive={false} element={<Single />} />
                </Routes>
            </Router >
        );
    }
}

export default App;