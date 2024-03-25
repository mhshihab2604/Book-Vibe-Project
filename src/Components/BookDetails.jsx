import {useLoaderData, useParams} from "react-router-dom";

const BookDetails = () => {
    const books = useLoaderData();
    const {book_id} = useParams();
    const book = books.find(book => book.book_id === book_id);
    console.log(book);
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={book.image}
                        className="max-w-sm w-96 bg-base-200 p-5"/>
                    <div className="space-y-5">
                        <h1 className="text-5xl font-bold">{book.book_name}</h1>
                        <p className="text-[#131313CC] font-medium">By: {book.author}</p>
                        <hr />
                        <h1>Islam</h1>
                        <hr />
                        <h2><small className="font-semibold text-lg">Review:</small> {book.review}</h2>
                        <div className="flex justify-between font-medium">
                            <h1 className="font-semibold text-lg">Tag:</h1>
                            <h1 className="bg-[#F3F3F3] text-[#23BE0A]  rounded-full p-1">#{book.tags[0]}</h1>
                            <h1 className="bg-[#F3F3F3] text-[#23BE0A]  rounded-full p-1">#{book.tags[1]}</h1>
                        </div>
                        <hr />
                        <div className="flex gap-10">
                            <p className="text-[#131313B3]">Number of Pages:</p>
                            <h1 className="font-semibold">{book.totalPages}</h1>
                        </div>
                        <div className="flex gap-10">
                            <p className="text-[#131313B3]">Publisher:</p>
                            <h1 className="font-semibold">{book.publisher}</h1>
                        </div>
                        <div className="flex gap-10">
                            <p className="text-[#131313B3]">Year of Publishing:</p>
                            <h1 className="font-semibold">{book.yearOfPublishing}</h1>
                        </div>
                        <div className="flex gap-10">
                            <p className="text-[#131313B3]">Rating:</p>
                            <h1 className="font-semibold">{book.rating}</h1>
                        </div>
                        <div className="flex gap-4">
                            <button className="btn border-2 border-gray-500">Read</button>
                            <button className="btn bg-[#50B1C9] text-white">Wishlist</button>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default BookDetails;