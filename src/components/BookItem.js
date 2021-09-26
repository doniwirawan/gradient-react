import React from 'react'

const BookItem = ({ nama, img, link, desc, tags }) => {
    return (
        <>
            <div className="col-lg-4  col-md-12 p-3 border-top border-bottom">

                <div className="col">
                    <img src={img} alt="test" className="img-fluid rounded book-img" />
                </div>
                <div className="col pl-2 mt-1">
                    <h2 className="h4 gradient-text font-weight-medium text-capitalize ml-2">{nama}</h2>
                    {tags.map((item, index) => <small className="tag mx-1 p
                    ml-2" key={index}>{item}</small>)}
                </div>

                <p className="text-secondary mt-1 project-description pl-2">{desc}</p>
                <div className="row ml-3">
                    <a href={link} target="_blank" className="btn btn-gradient"><i
                        className="fa fa-globe"></i> Link</a>

                </div>
            </div>
        </>
    )
}

export default BookItem
