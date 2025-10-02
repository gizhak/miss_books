import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'


const BOOK_KEY = 'bookDB'
// var gFilterBy = { txt: '', price: 0 }
_createBooks()

export const bookService = {
    query,
    get,
    remove,
    save,
    getEmptyBook,
    getDefaltFilter,
    // getFilterBy,
    // setFilterBy,
}


function query(filterBy) {
    console.log('gFilterBy inside query:', filterBy)
    return storageService.query(BOOK_KEY)
        .then(books => {
            // console.log('gFilterBy:', gFilterBy)
            // console.log('First book structure:', books[0])
            if (filterBy.txt) {
                const regex = new RegExp(filterBy.txt, 'i')
                books = books.filter(book => regex.test(book.title))
            } if (filterBy.price) {
                books = books.filter(book => book.listPrice.amount <= filterBy.price)
            }
            return books
        })
}

function get(bookId) {
    return storageService.get(BOOK_KEY, bookId)
}

function remove(bookId) {
    return storageService.remove(BOOK_KEY, bookId)
}

function save(book) {
    if (book.id) {
        return storageService.put(BOOK_KEY, book)
    } else {
        return storageService.post(BOOK_KEY, book)
    }
}

function getEmptyBook(title = '', price = 0) {
    return { id: '', title, price }
}

function getDefaltFilter() {
    return { txt: '', price: '' }
}

// function getFilterBy() {
//     return { ...gFilterBy }
// }

// function setFilterBy(filterBy = {}) {
//     if (filterBy.txt !== undefined) gFilterBy.txt = filterBy.txt
//     if (filterBy.price !== undefined) gFilterBy.price = filterBy.price
//     return gFilterBy
// }


// create books


function _createBooks() {

    const ctgs = ['Love', 'Fiction', 'Poetry', 'Computers', 'Religion']
    const books = []
    for (let i = 0; i < 20; i++) {
        const book = {
            id: utilService.makeId(),
            title: utilService.makeLorem(2),
            subtitle: utilService.makeLorem(4),
            authors: [
                utilService.makeLorem(1)
            ],
            publishedDate: utilService.getRandomIntInclusive(1950, 2024),
            description: utilService.makeLorem(20),
            pageCount: utilService.getRandomIntInclusive(20, 600),
            categories: [ctgs[utilService.getRandomIntInclusive(0, ctgs.length - 1)]],
            thumbnail: `./assets/img/${i + 1}.jpg`,
            language: "en",
            listPrice: {
                amount: utilService.getRandomIntInclusive(80, 1000),
                currencyCode: "EUR",
                isOnSale: Math.random() > 0.7
            }
        }
        books.push(book)
    }
    console.log('books', books)
    utilService.saveToStorage(BOOK_KEY, books)
}



// function _createBooks() {
//     let books = utilService.loadFromStorage(BOOK_KEY)
//     if (!books || !books.length) {
//         books = []
//         books.push(_createBook('1', 109))
//         books.push(_createBook('2', 200))
//         books.push(_createBook('3', 80))
//         utilService.saveToStorage(BOOK_KEY, books)
//     }
// }

function _createBook(title, listPrice) {
    const book = getEmptyBook(title, listPrice)
    book.id = utilService.makeId()
    return book
}