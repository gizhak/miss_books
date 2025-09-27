import { BookPreview } from "./BookPreview.jsx"

export function BookList({ books }) {

    return (
        <ul className="book-list container" >
            {/* {JSON.stringify(books, null, 4)} */}
            {books.map(book =>
                <li key={book.id}>
                    <BookPreview book={book} />
                </li>
            )}
        </ul>
    )
}