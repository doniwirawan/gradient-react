import React from 'react'
import { Link } from 'react-router-dom'

const ProjectItem = ({ nama, img, link, desc, tags }) => {
    return (
        <>
            <div className="col-lg-4  col-md-12 p-3 border-top border-bottom">
                <div className="row">
                    <div className="col">
                        <img src={img} alt="test" className="img-fluid rounded" />
                    </div>
                    <div className="col pl-2">
                        <h2 className="h4 gradient-text font-weight-medium">{nama}</h2>
                        {tags.map((item, index) => <small className="tag mx-1" key={index}>{item}</small>)}


                    </div>
                </div>
                <p className="text-secondary mt-1 project-description">{desc}</p>
                <div className="row ml-3">
                    <div className="row ">
                        <a href={link[1]} target="_blank" className="btn btn-gradient"><i
                            className="fa fa-globe"></i> Demo</a>
                    </div>
                    <div className="row ml-4">
                        <a href={link[0]} target="_blank" className="btn btn-secondary"><i
                            className="fab fa-github"></i> Github</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectItem
