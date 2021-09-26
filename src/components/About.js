import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <>
            <section className=" py-5" id="about">
                <div className="container">
                    <h2 className="display-3 font-weight-bold text-center gradient-text">About Me...</h2>
                    <div className="row pt-5">
                        <div className="col-lg-6 col-md-12">
                            <img src="../img/doni new profile.jpg" alt="" className="rounded img-fluid box-shadow" />
                        </div>
                        <div className="col-lg-6  col-md-12 p-lg-2">
                            <h2 className="font-weight-bold letter-spacing-md text-secondary mt-4 mt-md-0 serif">Doni Wirawan
                            </h2>
                            <br />
                            <p className="h5 letter-spacing-sm font-weight-light">
                                My background is an <span className="gradient-text font-weight-bold"> Software
                                    Engineering</span> graduated from Vocational High School SMK N 1 GIANYAR, when i was
                                High School I had intersnhip
                                at Tayatha.com as a Member of the SEO (Search Engine Optimization) Team.
                            </p>
                            <br />
                            <p className="h5 letter-spacing-sm font-weight-light">
                                <span className="gradient-text font-weight-bold">I've been coding
                                    since the 2nd grade of High School</span> until now (college), since I was little I've
                                liked computers and
                                electronic things.</p>
                            <br />
                            <p className="h5 letter-spacing-sm font-weight-light"> Besides that I also <span
                                className="gradient-text font-weight-bold"> like Meme, History, Science, Politics,
                                Psychology,
                                Design, and Engineering.</span></p>
                            <a className="btn btn-secondary mt-4 row  ml-md-1 ml-sm-2" href="https://test.com">
                                <span><i className="fa fa-long-arrow-down"></i>Download CV</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
