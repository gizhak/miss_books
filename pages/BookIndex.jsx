import { bookService } from "../services/book.service.js"
import { BookList } from "../cmps/BookList.jsx"

const { useState, useEffect } = React

export function BookIndex() {

    const [books, setBooks] = useState(null)


    // useEffect(() => {
    //     loadBooks()
    // }, [])

    useEffect(() => {
        bookService.query()
            .then(setBooks)
            .catch(err => console.log('err', err))
    }, [])

    // function loadBooks() {
    //     bookService.query()
    //         .then(setBooks)
    //         .catch(err => console.log('err', err))
    // }

    if (!books) return <div>Loading...</div>

    return (
        <section className="book-index" >
            <h1>Books Index</h1>
            {/* <pre>{JSON.stringify(books, null, 2)}</pre> */}
            <BookList books={books} />

        </section>
    )

}