import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Page1 from '../Page1'
import Add from '../Add'
import Header from '../Header'
import Footer from '../Footer'


const Landing = () => {
    return (
        <>
            <Router>
                <Header />
                <Route exact path='/' component={Page1} />
                <Route exact path='/add' component={Add} />
                <Footer />
            </Router>
        </>
    )
}

export default Landing
