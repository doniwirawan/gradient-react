import React from 'react'
import Menu from '../components/Menu'
import Banner from '../components/Banner'
import About from '../components/About'
import Project from '../components/Project'
import Certificate from '../components/Certificate'
import Footer from '../components/Footer'

import {
    BrowserRouter as Router
} from "react-router-dom";

const Home = () => {

    return (
        <Router>
            <Menu/>
            <Banner/>
            <About/>
            <Project/>
            <Certificate/>
            <Footer/>
        </Router>
    )
}

export default Home
