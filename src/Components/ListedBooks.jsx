// import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
// const ListedBooks = () => {
//     return (
//         <div className='mt-16'>
//             <div className='bg-[#1313130D] h-20 flex items-center justify-center rounded'>
//                 <h1 className="text-center text-3xl font-bold">Book</h1>
//             </div>
//             <div>
//                 <div className="dropdown dropdown-bottom flex items-center justify-center mt-8">
//                     <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] text-white">Sort By</div>
//                     <ul
//                         tabIndex={0}
//                         className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
//                         <li>
//                             <a>Item 1</a>
//                         </li>
//                         <li>
//                             <a>Item 2</a>
//                         </li>
//                     </ul>
//                 </div>
//             </div>

//             <div>
//                 <Tabs>
//                     <TabList>
//                         <Tab>Read Books</Tab>
//                         <Tab>Wishlist Books</Tab>
//                     </TabList>

//                     <TabPanel>
//                         <h2>MH SHIhab</h2>
//                     </TabPanel>
//                     <TabPanel>
//                         <h2>Pranti</h2>
//                     </TabPanel>
//                 </Tabs>

//             </div>
//         </div>
//     );
// };

// export default ListedBooks;
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
    console.log(activeTab);
    return (
        <div>
            <h3 className='text-3xl font-bold  text-center mx-auto mt-20'>Books</h3>
            <div>
                <div className="dropdown dropdown-bottom flex items-center justify-center mt-8">
                    <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] text-white">Sort By</div>
                    <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a>Rating</a>
                        </li>
                        <li>
                            <a>Number of Pages</a>
                        </li>
                        <li>
                            <a>Publisher Year</a>
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