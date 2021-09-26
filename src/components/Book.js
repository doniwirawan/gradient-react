import React from 'react'
import BookItem from './BookItem'
import Data from '../data.json'

const Book = () => {
    return (
        <>
            <section className="py-5 bg-light" id="book">
                <div className="container mt-2">
                    <h2 className="display-3 font-weight-bold text-center gradient-text">Book Recommendation</h2>
                    <p className="text-secondary text-center">Hi Nerds, I'm Glad You Are Here. Here are some of the books I've read and I recommend you to read them too.</p>

                    <div className="row mt-5" id="projectContainer">
                        {
                            Data.books.map((item, index) => <BookItem key={index} nama={item.nama} img={item.img} link={item.link} desc={item.desc} tags={item.tags} />)
                        }
                    </div>
                </div>

            </section>
        </>
    )
}

export default Book
