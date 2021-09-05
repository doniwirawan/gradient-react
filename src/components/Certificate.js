import React from 'react'
import Data from '../data.json'
import CertificateItem from './CertificateItem'


const Certificate = () => {
    return (
        <>
            <section class="bg-light py-5" id="certificate">
                <div class="container">
                    <h2 class="display-3 font-weight-bold text-center gradient-text">Certificate</h2>
                    <p class="text-center text-secondary">
                        Here are the certificates I got from participating in online and offline training
                    </p>
                    <div class="row pt-5" id="certificateContainer">
                        {
                            Data.certificates.map((item, index) => <CertificateItem img={item.img} ket={item.ket} tags={item.tags} /> )
                        }
                      
                    </div>
                </div>
        </section>
        </>
    )
}

export default Certificate
