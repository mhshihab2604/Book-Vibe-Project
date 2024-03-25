import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const ListedBooks = () => {
    return (
        <div className='mt-16'>
            <div className='bg-[#1313130D] h-20 flex items-center justify-center rounded'>
                <h1 className="text-center text-3xl font-bold">Book</h1>
            </div>
            <div>
                <div className="dropdown dropdown-bottom flex items-center justify-center mt-8">
                    <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] text-white">Sort By</div>
                    <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a>Item 1</a>
                        </li>
                        <li>
                            <a>Item 2</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                <Tabs>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>Wishlist Books</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>MH SHIhab</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Pranti</h2>
                    </TabPanel>
                </Tabs>

            </div>
        </div>
    );
};

export default ListedBooks;