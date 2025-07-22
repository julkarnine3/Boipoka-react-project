import React, { Suspense, useEffect } from 'react';
import { useState } from 'react';
import { data } from 'react-router';
import Book from '../Book/Book';

const Books = ({ allBooks }) => {
    // console.log(allBooks);
    // const [AllBooks, setAllBooks] = useState([]);
    // useEffect(()=>{
    //     fetch('booksData.json')
    //     .then(res => res.json())
    //     .then(data => console.log(data));
    // },[])
    // const booksPromise = fetch('booksData.json').then(res => res.json());
    return (
        <div>
            <h1 className='font-bold text-3xl text-center mb-3'>Books</h1>
            <Suspense fallback={<span>Loading...</span>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4'>
                    {
                        allBooks.map(book => <Book book={book} key={book.bookId}></Book>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;