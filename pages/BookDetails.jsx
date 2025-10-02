
import { bookService } from "../services/book.service.js"
import { utilService } from "../services/util.service.js"


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

    function getReadingLevel(pageCount) {
        if (pageCount > 500) return 'Serious Reading'
        if (pageCount > 200) return 'Descent Reading'
        if (pageCount < 100) return 'Light Reading'
        return 'Average Reading'
    }


    function bookPublishedDate(publishedDate) {
        console.log('book date: ', publishedDate)
        // const currentDate = utilService.getDayName(date)
        // console.log(currentDate)
        const currentDate = new Date()
        console.log(currentDate)
        const currentYear = currentDate.getFullYear()
        console.log(currentYear)

        const check = currentYear - publishedDate
        console.log(check)

        if (check > 10) return 'Vintage'
        if (check < 1) return 'New'
    }

    if (!book) return <div>Loading Details...</div>
    const { title, thumbnail, description, pageCount, publishedDate } = book

    return (
        <section className="book-details container" >
            {/* <img src={`../assets/img/${title}.jpg`} alt="book Image" /> */}
            <h1>{title}</h1>
            <h4>{getReadingLevel(pageCount)}</h4>
            <img src={thumbnail} alt="book Image" />

            <h3>Book Price: {book.listPrice.amount}</h3>
            <h4>{bookPublishedDate(publishedDate)}</h4>
            <p>{description}</p>
            <button onClick={() => onBack(book)}>Back</button>

        </section>

    )
}