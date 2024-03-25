import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const Book = ({book}) => {
    const {book_id,book_name, author, image,category,rating,tags} = book;
    return (

        <div>
            <div>
                <div className="card card-compact bg-base-100 shadow-xl border-2 rounded-lg p-5 space-y-3">
                    <figure className="bg-[#F3F3F3] py-10"><img className=" rounded-xl" src={image} alt="Shoes"/></figure>
                    <div className="flex justify-around text-[#23BE0A] font-medium">
                        <h1 className="bg-[#F3F3F3] rounded-full p-1">{tags[0]}</h1>
                        <h1 className="bg-[#F3F3F3] rounded-full p-1">{tags[1]}</h1>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title font-bold text-2xl">{book_name}</h2>
                        <p className="text-[#131313CC] font-medium">By: {author}</p>
                    </div>
                    <hr className="border-dashed" />
                    <div className="flex justify-between text-[#131313CC] font-medium">
                        <p>{category}</p>
                        <p className="flex items-center gap-4">{rating} <FaRegStar></FaRegStar></p>
                    </div>
                    <div>
                        <Link to={`/book/${book_id}`}>
                            <button className="btn">Click</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;