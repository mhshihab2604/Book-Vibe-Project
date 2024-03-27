import { IoLocationOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { LuFileBarChart } from "react-icons/lu";
import { Link } from "react-router-dom";
const ListBook = ({book}) => {
    return (
        <div>
            <div className="card w-full lg:card-side gap-10 border-2 rounded-lg p-5">
                <figure className="min-w-[230px] h-56"><img className="w-full h-full object-cover bg-base-300 p-5" src={book.image} alt="Movie"/></figure>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <h1 className="text-lg font-semibold">{book.book_name}</h1>
                        <p>By: {book.author}</p>
                    </div>
                    <div className="flex justify-around items-center gap-2 font-medium flex-wrap">
                        <h1 className="font-semibold text-lg">Tag:</h1>
                        <h1 className="bg-[#F3F3F3] text-[#23BE0A] rounded-full p-1">#{book.tags[0]}</h1>
                        <h1 className="bg-[#F3F3F3] text-[#23BE0A] rounded-full p-1">#{book.tags[1]}</h1>
                        <div className="flex gap-2 items-center">
                            <IoLocationOutline className="lg:text-lg text-xl"></IoLocationOutline>
                            <p className="text-[#131313B3]">Year of Publishing: {book.yearOfPublishing}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <BsPeople className="lg:text-lg text-2xl"></BsPeople> 
                        <h1 className="pr-5">Publisher: {book.publisher}</h1>
                        <LuFileBarChart className="lg:text-lg text-2xl"></LuFileBarChart>
                        <h1>Page: {book.totalPages}</h1>
                    </div>
                    <hr />
                    <div className="flex items-center gap-3 text-[#23BE0A] font-medium">
                        <h1 className="bg-[#328EFF26] text-[#328EFF] rounded-full p-2">Category: {book.category}</h1>
                        <h1 className="bg-[#FFAC3326] text-[#FFAC33] rounded-full p-2">Rating: {book.rating}</h1>
                        <Link to={`/book/${book.book_id}`}><button className="btn text-white rounded-full bg-[#23BE0A]">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListBook;