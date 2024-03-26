import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getBooks } from '../Utils/LocalStorage';
import ListBook from './ListBook';

const ListedBooks = () => {
    const [books, setBooks] = useState([]);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        const list = ["read", "wish"];
        const savedBlogs = getBooks(list[activeTab])
        setBooks(savedBlogs)
    }, [activeTab])

    const handleShort = (sortBy) => {
        const sortedArray = [...books].sort((a,b) => b[sortBy]-a[sortBy]);
        setBooks(sortedArray);
    } 

    return (
        <div>
            <h3 className='text-3xl font-bold  text-center mx-auto mt-20'>Books</h3>
            <div>
                <div className="dropdown dropdown-bottom flex items-center justify-center mt-8">
                    <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] text-white">Sort By</div>
                    <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={() => handleShort("rating")} className='cursor-pointer'>
                            Rating
                        </li>
                        <li onClick={() => handleShort("totalPages")} className='cursor-pointer'>
                            Number of Pages
                        </li>
                        <li onClick={() => handleShort("yearOfPublishing")} className='cursor-pointer'>
                            Publisher Year
                        </li>
                    </ul>
                </div>
            </div>
            <Tabs selectedIndex={activeTab} onSelect={index => setActiveTab(index)}>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>
                <TabPanel>
                    <section className=' px-4 sm:px-8 lg:px-12 py-8'>
                        <div >
                            <div className='space-y-10'>
                                {books.map(book => (
                                    <ListBook key={books.book_id} book={book}>

                                    </ListBook>
                                ))}
                            </div>
                        </div>
                    </section>
                </TabPanel>
                <TabPanel>
                <section className=' px-4 sm:px-8 lg:px-12 py-8'>
                        <div>
                            <div className='space-y-10'>
                                {books.map(book => (
                                    <ListBook key={books.book_id} book={book}>

                                    </ListBook>
                                ))}
                            </div>
                        </div>
                    </section>
                </TabPanel>
            </Tabs>
        </div>
    );
};


export default ListedBooks;