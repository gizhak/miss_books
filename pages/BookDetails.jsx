
import { bookService } from "../services/book.service.js"

const { useState, useEffect } = React

export function BookDetails({ bookId, onBack }) {

    console.log('book id from details', bookId)

    const [book, setBook] = useState(null)
    useEffect(() => {
        loadBook()
    }, [])

    function loadBook() {
        bookService.get(bookId)
            .then(setBook)
            .catch(err => console.log('err', err))
    }

    // const book = null

    if (!book) return <div>Loading Details...</div>
    const { title, pageCount, thumbnail } = book

    return (
        <section className="book-details container" >
            {/* <img src={`../assets/img/${title}.jpg`} alt="book Image" /> */}
            <img src={thumbnail} alt="book Image" />
            <h1>Book Name: {title}</h1>
            <h1>Book Price: {pageCount}</h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, mollitia?
                Dicta neque ratione consectetur dolor nesciunt rem cumque harum? Perferendis,
                iusto quidem! Optio illum unde praesentium consectetur atque sit maiores.
            </p>
            <button onClick={() => onBack(book)}>Back</button>

        </section>

    )
}