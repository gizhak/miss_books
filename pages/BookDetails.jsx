
import { bookService } from "../services/book.service.js"
import { LongTxt } from "../cmps/LongTxt.jsx"



const { useState, useEffect } = React

export function BookDetails({ bookId, onBack }) {

    // console.log('book id from details', bookId)

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


    function getBookAge(publishedDate) {
        const currentDate = new Date()
        // console.log(currentDate)
        const currentYear = currentDate.getFullYear()
        // console.log(currentYear)

        const check = currentYear - publishedDate
        // console.log(check)

        if (check > 10) return 'Vintage Book'
        if (check < 1) return 'New Book'
        return 'Old Book'
    }


    function getPriceClass(amount) {
        console.log(amount)

        if (amount > 150) return 'price-red'
        if (amount < 20) return 'price-green'
        return ''
    }


    if (!book) return <div>Loading Details...</div>
    const { title, thumbnail, description, pageCount, publishedDate } = book

    return (
        <section className="book-details container" >
            {/* <img src={`../assets/img/${title}.jpg`} alt="book Image" /> */}
            <h1>{title}</h1>
            <h4>{getReadingLevel(pageCount)}</h4>
            <img src={thumbnail} alt="book Image" />

            <h3 className={getPriceClass(book.listPrice.amount)}>
                Book Price: {book.listPrice.amount}
            </h3>
            <h4>{getBookAge(publishedDate)}</h4>
            <LongTxt txt={description} />
            <button onClick={() => onBack(book)}>Back</button>

        </section>

    )
}