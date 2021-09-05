import React from 'react'

const CertificateItem = ({img,ket,tags}) => {
    return (
        <>
            <div class="col-lg-4 col-md-12 p-3">
                <h2 class="text-center text-secondary h4">{ket}</h2>
                <img src={img} alt="test"
                    class="img-fluid rounded  box-shadow"/>
                    {
                    tags.map((item, index) => <small class="tag mx-1">{item}</small> )
                    }
                    
            </div>
        </>
    )
}

export default CertificateItem
