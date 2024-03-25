import { FaRegStar } from "react-icons/fa";
const Book = ({book}) => {
    const {book_name, author, image,category,rating} = book;
    return (

        <div>
            <div>
                <div className="card card-compact bg-base-100 shadow-xl border-2 rounded-lg p-5">
                    <figure className="bg-[#F3F3F3] py-10"><img className=" rounded-xl" src={image} alt="Shoes"/></figure>
                    <div className="flex justify-around text-[#23BE0A] font-medium">
                        <h1>Young Adult</h1>
                        <h1>Identity</h1>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title font-bold text-2xl">{author}</h2>
                        <p className="text-[#131313CC] font-medium">By: {book_name}</p>
                    </div>
                    <hr className="border-dashed" />
                    <div className="flex justify-between text-[#131313CC] font-medium">
                        <p>{category}</p>
                        <p className="flex items-center gap-4">{rating} <FaRegStar></FaRegStar></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;