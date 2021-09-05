import React from 'react'
import ProjectItem from './ProjectItem'
import Data from '../data.json'

const Project = () => {
    return (
        <>
            <section className="py-5 bg-light" id="project">
                <div className="container mt-2">
                    <h2 className="display-3 font-weight-bold text-center gradient-text">Personal Project</h2>
                    <p className="text-secondary text-center">Here is a project that I made purely myself, inspired by other
                        people, or the result of following an online course. But with some changes, adjustments, added
                        features etc.</p>

                    <div className="row mt-5" id="projectContainer">
                        {
                            Data.projects.map((item, index) => <ProjectItem key={index} nama={item.nama} img={item.img} link={item.link} desc={item.desc} tags={item.tags} />)
                        }
                    </div>
                </div>

        </section>
        </>
    )
}

export default Project
