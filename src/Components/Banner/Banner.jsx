import React from 'react';
import bookimage from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className='md:flex justify-between items-center gap-3 rounded-2xl md:mt-7 md:mb-7 mb-2.5 mt-2.5 p-2 md:p-6  bg-[#13131305] '>
            <div className='p-5'>
                <h1 className='font-bold text-5xl'>Books to freshen up your bookshelf</h1>
                <button className='btn btn-primary mt-10'>View The List</button>
            </div>
            <div>
                <img className='rounded-xl' src={bookimage} alt="" />
            </div>
        </div>
    );
};

export default Banner;