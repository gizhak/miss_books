import { bookService } from "../services/book.service.js"
import { BookList } from "../cmps/BookList.jsx"
import { BookDetails } from "../pages/BookDetails.jsx"
import { BookFilter } from "../cmps/BookFilter.jsx"

const { useState, useEffect, Fragment } = React

export function BookIndex() {

    const [books, setBooks] = useState(null)
    const [selectedBookId, setSelectedBookId] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.getDefaltFilter())
    // console.log('filterBy: ', filterBy)


    // useEffect(() => {
    //     loadBooks()
    // }, [])

    useEffect(() => {
        // console.log('mounting')
        loadBooks()
    }, [filterBy])

    function loadBooks() {
        bookService.query(filterBy)
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
        // console.log('SelectedBook - ', bookId)
        setSelectedBookId(bookId)
    }

    function onSetFilterBy(newFilterBy) {
        // console.log('new Filter: ', newFilterBy)
        // console.log('filter', filterBy)
        setFilterBy(prevFilter => ({ ...prevFilter, ...newFilterBy }))
    }


    // console.log('render')
    if (!books) return <div>Loading...</div>
    const { txt, price, labels } = filterBy

    return (
        <section className="book-index" >

            {selectedBookId
                ? <BookDetails
                    onBack={() => setSelectedBookId(null)}
                    bookId={selectedBookId}
                />
                : <Fragment>
                    <BookFilter onSetFilterBy={onSetFilterBy} defaultFilter={{ txt, price }} />
                    {/* <BookFilterSelect onSetFilterBy={onSetFilterBy} defaultFilter={{ labels }} /> */}
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

function BookFilterSelect() {

}