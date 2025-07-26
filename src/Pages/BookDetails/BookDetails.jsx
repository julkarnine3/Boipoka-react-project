import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../Utility/addToDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const BookDetails = () => {

    const { id } = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId);
    const { yearOfPublishing, bookName, publisher, author, image, review, category, tags, totalPages, rating } = singleBook;
    // console.log(singleBook, id)
    const handleMarkAsRead = (id) => {
        addToStoredDB(id);
        MySwal.fire({
            title: "Drag me!",
            icon: "success",
            draggable: true
        }).then(() => {
            return MySwal.fire(<p>Shorthand works too</p>)
        })
    }

    return (
        <div className='md:flex  gap-10 m-5 shadow-sm rounded-xl'>
            <div className='p-16 w-full bg-[#13131305]'>
                <img className='rounded-2xl w-[425px] h-[564px]' src={image} alt="" />
            </div>
            <div className='p-6  w-full'>
                <h1 className='text-3xl font-bold'>{bookName}</h1>
                <h3>By : {author}</h3>
                <hr className='border-t border-dashed w-full mb-3 mt-3' />
                <h1>{category}</h1>
                <hr className='border-t border-dashed w-full mb-3 mt-3' />
                <p className='mt-2.5'><span className='font-semibold'>Review :</span> {review}</p>
                <div className=' mt-4 flex gap-4'><span className='font-bold'>Tag : </span>
                    <div className='flex gap-5'>
                        {
                            tags.map(tag => <button className='text-green-400'> #{tag}</button>)
                        }
                    </div>
                </div>
                <hr className='border-t border-dashed w-full mb-3 mt-3' />
                <div className=''>
                    <p>Number of page : {totalPages}</p>
                    <p>Publisher : {publisher}</p>
                    <p>Year of Publishing : {yearOfPublishing}</p>
                    <h1>Rating : {rating}</h1>
                </div>
                <div className='mt-5 flex gap-10'>
                    <button onClick={() => handleMarkAsRead(id)} className='btn'>Mark as Read</button>
                    <button className='btn btn-primary border-none bg-[#50B1C9]'>Add to WishtList</button>
                </div>

            </div>
        </div>
    );
};

export default BookDetails;