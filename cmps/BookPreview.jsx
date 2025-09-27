

export function BookPreview({ book }) {

    const { title, price, thumbnail } = book
    return (
        <article className="book-preview">
            {/* <img src={`../assets/img/${title}.jpg`} alt="book Image" /> */}
            <img src={thumbnail} alt="book Image" />
            <h2>Title: {title}</h2>
            <h4>Price: {price}</h4>
        </article>
    )
}


