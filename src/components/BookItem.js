import React from 'react'

const BookItem = ({ nama, img, link, desc, tags }) => {
    return (
        <>
            <div className="col-lg-4  col-md-12 p-3 border-top border-bottom">

                <div className="col d-flex justify-content-center align-items-center ">
                    <img src={img} alt="test" className="img-fluid rounded book-img" />
                </div>
                <div className="col pl-2 mt-1">

                    <h2 className="h4  font-weight-medium text-capitalize ml-2 text-center" >{nama}</h2>
                    <div className="d-flex align-items-center justify-content-center">
                        {tags.map((item, index) => <small className="tag mx-1 no-gradient text-center" key={index}>{item}</small>)}
                    </div>

                </div>

                <p className="text-secondary mt-1 project-description text-center">{desc}</p>
                {/* <div className="row d-flex justify-content-center">
                    <a href={link} target="_blank" className="btn btn-no-gradient text-center"><i
                        className="fa fa-shopping-cart"></i> Buy</a>

                </div> */}
            </div>
        </>
    )
}

export default BookItem
