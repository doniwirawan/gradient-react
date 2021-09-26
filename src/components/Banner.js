import React from 'react'
import {Link} from 'react-router-dom'
import ReactTypingEffect from 'react-typing-effect';

const Banner = () => {
    return (
        <div>
            <section className="banner d-flex align-items-center mb-0 position-relative">
                <img src="../img/CircuitBoard.svg" alt="" className="position-absolute bg-banner"/>
                    <div className="container ">
                        <h1
                            className="gradient-text display-2 font-weight-bold animate__animated animate__bounce animate__delay-1s ">
                            Doni Wirawan</h1>
                        <div className="social-media mb-4 ml-1">
                            <a target="_blank" href="https://github.com/doniwirawan">
                                <i className="fab fa-github-square fa-2x  text-secondary gradient-hover m-2 "></i>
                            </a>
                            <a target="_blank" href="https://instagram.com/doni_wirawans">
                                <i className="fab fa-instagram-square fa-2x  text-secondary gradient-hover m-2 "></i>

                            </a>
                            <a target="_blank" href="https://twitter.com/doni_wirawans">
                                <i className="fab fa-twitter-square fa-2x  text-secondary gradient-hover m-2 "></i>

                            </a>
                            <a target="_blank" href="https://www.linkedin.com/in/doni-wirawan-7a0189178/">
                                <i className="fab fa-linkedin fa-2x  text-secondary gradient-hover m-2 "></i>

                            </a>
                        </div>
                        <p className="h5 letter-spacing-sm font-weight-light ml-2"><ReactTypingEffect
                                text={["Web Developer", "CS Student"]}
                                speed={500}
                            />who <span
                            className="gradient-text font-weight-bold">interested in the world of Software
                            Development, Minimalism,
                            UI/UX and Technology in general.</span>
                        </p>
                    </div>
        </section>
        </div>
    )
}

export default Banner
