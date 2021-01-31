
import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from '../views/Home.js'
import About from '../views/About.js'
import './index.scss'

export default function router() {
    return (
        <Router>
            <Link to='/home' className='link'>Home</Link>
            <Link to='/about' className='link'>About</Link>
            <Route path='/home' component={Home} />
            <Route path='/about' component={About} />
        </Router>
    )
}