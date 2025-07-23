import React, { use } from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';

const Book = ({ book }) => {
    // const AllBooks = use(booksPromise);
    // console.log(AllBooks);
    // console.log(book)

    const { bookId, bookName, author, image, review, rating, category, yearOfPublishing, tags } = book;

    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card bg-base-100 max-w-96 shadow-sm p-5">
                <figure className='p-10 bg-[#F3F3F3] w-[326px] h-[230px] mx-auto'>
                    <img className='rounded-2xl w-[126px] h-[166px]'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className='flex justify-center gap-20 mt-2 text-[#23BE0A]'>
                    {
                        tags.map(tag => <button>{tag}</button>)
                    }
                </div>
                <div className="card-body">
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">{yearOfPublishing}</div>
                    </h2>
                    <p>By: {author}</p>
                    <hr className="border-t border-dashed border-gray-400 my-1" />
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline">{rating} <FaStarHalfAlt />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;