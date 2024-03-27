import {useEffect, useState} from "react";
import Book from "./Book";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("book.json")
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])
    return (
        <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold  text-center mx-auto mt-20">Books</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10 mx-2">
                {books.map(book => <Book key={book.book_id} book={book}></Book>)}
            </div>
        </div>
    );
};

export default Books;