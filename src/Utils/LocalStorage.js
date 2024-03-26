import toast from 'react-hot-toast'

export const getBooks = (status) => {
    let books = []
    const storedBooks = localStorage.getItem('books')
    if(!storedBooks){
        return [];
    }
    if (storedBooks) {
        books = JSON.parse(storedBooks)
    }
    if(!status){
        return books;
    }
    let filterBooks = books.filter(book => book.status === status)
    return filterBooks
}

export const saveReadBooks = (newBook) => {
    let readBooks = getBooks("read")
    
    let allBooks = getBooks();
    console.log(allBooks);
    const isExist = [...readBooks].find(book => book.book_id === newBook.book_id)
    
    
    if (isExist) {
        return toast.error('Already Added!')
    }
   
    newBook.status = "read";
    allBooks.push(newBook);
    
    localStorage.setItem('books', JSON.stringify(allBooks))
    
    toast.success('Book Added Successfully!')
}
export const saveWishBooks = (newBook) => {
    let books = getBooks()
    let readBooks = getBooks("read")
    let wishBook = getBooks("wish")
    const isExist = [...wishBook].find(book => book.book_id === newBook.book_id)

    const isRead = [...readBooks].find(book => book.book_id === newBook.book_id)
    if (isExist) {
        return toast.error('Already Added!')
    }
     if(isRead) {
        return toast.error("already readed")
    }
    newBook.status = "wish";
    books.push(newBook)
    
    localStorage.setItem('books', JSON.stringify(books))
    
    toast.success('Book Added Successfully!')
}