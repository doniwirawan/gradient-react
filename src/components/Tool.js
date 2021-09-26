import React from 'react'
import ToolItem from './ToolItem'
import Data from '../data.json'

const Tool = () => {
    return (
        <>
            <section className="py-5 bg-light" id="tool">
                <div className="container mt-2">
                    <h2 className="display-3 font-weight-bold text-center gradient-text">My Favorite Tools/Resources</h2>
                    <p className="text-secondary text-center">Here are a few cool resources/tools I love.</p>

                    <div className="row mt-5" id="projectContainer">
                        {
                            Data.tools.map((item, index) => <ToolItem key={index} nama={item.nama} img={item.img} link={item.link} desc={item.desc} tags={item.tags} />)
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Tool
