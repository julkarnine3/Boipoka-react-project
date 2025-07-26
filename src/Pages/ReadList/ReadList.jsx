import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utility/addToDB';
import Book from '../Book/Book';

const ReadList = () => {
    const data = useLoaderData();
    const [readList, setReadList] = useState([]);
    const [sort, setSort] = useState("");
    // console.log(data)
    useEffect(() => {
        const storedBookData = getStoredBook();
        // console.log(storedBookData);
        const convertedStoredBooks = storedBookData.map(id => parseInt(id))
        const myReadList = data.filter(book => convertedStoredBooks.includes(book.bookId));
        setReadList(myReadList);
        console.log(myReadList)
    }, [])
// Sorted work start here
    const handleSort =(type)=>{
        setSort(type);
        if(type === "pages"){
            const sortedByPages =[...readList].sort((a,b)=>a.totalPages - b.totalPages);
            setReadList(sortedByPages);
        }
        if(type === "ratings"){
            const sortedByRatings = [...readList].sort((a,b)=>a.rating - b.rating);
            setReadList(sortedByRatings);
        }
    }

    return (
        <div>
            <div className="dropdown flex justify-center items-center   mt-4 mb-4">
                <div tabIndex={0} role="button" className="btn m-1">Sort By : {sort ? sort :""}</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={()=>handleSort("pages")}>Pages</a></li>
                    <li><a onClick={()=>handleSort("ratings")}>Ratings</a></li>
                </ul>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read List Books</Tab>
                    <Tab>Wish List Books</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='font-bold text-2xl text-center'>My read list Books : {readList.length}</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4 mb-4'>
                        {
                            readList.map(b => <Book key={b.bookId} book={b} ></Book>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>My wish list Books</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;