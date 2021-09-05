import React from 'react'

const Footer = () => {
    return (
        <>
            <footer class="bg-light">
                <div class="container ">
                    <div class="d-flex justify-content-between align-items-center p-3">
                        <p class="text-secondary h6">Copyright © Doni Wirawan. All rights reserved.</p>
                        <div class="social-media mb-4 ml-2 pb-2">
                            <a target="_blank" href="https://github.com/doniwirawan">
                                <i class="fab fa-github-square fa-2x  text-secondary gradient-hover m-2 "></i>
                            </a>
                            <a target="_blank" href="https://instagram.com/doni_wirawans">
                                <i class="fab fa-instagram-square fa-2x  text-secondary gradient-hover m-2 "></i>
                            </a>
                            <a target="_blank" href="https://twitter.com/doni_wirawans">
                                <i class="fab fa-twitter-square fa-2x  text-secondary gradient-hover m-2 "></i>
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/in/doni-wirawan-7a0189178/">
                                <i class="fab fa-linkedin fa-2x  text-secondary gradient-hover m-2 "></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
