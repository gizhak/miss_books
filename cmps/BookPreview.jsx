

export function BookPreview({ book }) {

    function getSaleBook(isOnSale) {
        const onSale = book.listPrice.isOnSale
        // console.log(onSale)
        if (onSale) return 'On Sale'
        return ''

    }

    const { title, thumbnail, categories, language } = book
    return (
        <article className="book-preview">
            {/* <img src={`../assets/img/${title}.jpg`} alt="book Image" /> */}
            <h4 className="sale" >{getSaleBook(book.listPrice.isOnSale)}</h4>
            <img src={thumbnail} alt="book Image" />
            <h3>Title: {title}</h3>
            <h4>Price: {book.listPrice.amount}</h4>
            <h4>Categories: {categories}</h4>
            <h4>Language: {language}</h4>
        </article>
    )
}


