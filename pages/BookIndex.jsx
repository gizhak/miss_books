import { bookService } from "../services/book.service.js"
import { BookList } from "../cmps/BookList.jsx"
import { BookDetails } from "../pages/BookDetails.jsx"
import { BookFilter } from "../cmps/BookFilter.jsx"

const { useState, useEffect, Fragment } = React

export function BookIndex() {

    const [books, setBooks] = useState(null)
    const [selectedBookId, setSelectedBookId] = useState(null)
    const [filterBy, getFilterBy] = useState(bookService.getDefaltFilter())


    // useEffect(() => {
    //     loadBooks()
    // }, [])

    useEffect(() => {
        // console.log('mounting')
        loadBooks()
    }, [])

    function loadBooks() {
        bookService.query()
            .then(setBooks)
            .catch(err => console.log('err', err))
    }


    function onRemoveBook(bookId) {
        console.log('Removing... - ', bookId)
        bookService.remove(bookId)
            .then(() => {
                setBooks(books => books.filter(book => book.id !== bookId))
            })
            .catch(err => console.log('err', err))

    }

    function onSelectBookId(bookId) {
        console.log('SelectedBook - ', bookId)
        setSelectedBookId(bookId)
    }


    // console.log('render')
    if (!books) return <div>Loading...</div>

    return (
        <section className="book-index" >

            {selectedBookId
                ? <BookDetails
                    onBack={() => setSelectedBookId(null)}
                    bookId={selectedBookId}
                />
                : <Fragment>
                    <BookFilter />

                    <BookList books={books}
                        onRemoveBook={onRemoveBook}
                        onSelectBookId={onSelectBookId}
                    />
                </Fragment>

            }
            {/* <h1>Books Index</h1> */}
            {/* <pre>{JSON.stringify(books, null, 2)}</pre> */}



        </section>
    )

}