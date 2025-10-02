

export function BookPreview({ book }) {

    function getSaleBook(isOnSale) {
        const onSale = book.listPrice.isOnSale
        console.log(onSale)
        if (onSale) return 'Yes'
        return 'No'

    }

    const { title, thumbnail } = book
    return (
        <article className="book-preview">
            {/* <img src={`../assets/img/${title}.jpg`} alt="book Image" /> */}
            <img src={thumbnail} alt="book Image" />
            <h3>Title: {title}</h3>
            <h4>Price: {book.listPrice.amount}</h4>
            <h4>On Sale: {getSaleBook(book.listPrice.isOnSale)}</h4>

        </article>
    )
}


