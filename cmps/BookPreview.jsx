

export function BookPreview({ book }) {

    const { title, pageCount, thumbnail } = book
    return (
        <article className="book-preview">
            {/* <img src={`../assets/img/${title}.jpg`} alt="book Image" /> */}
            <img src={thumbnail} alt="book Image" />
            <h3>Title: {title}</h3>
            <h4>Price: {pageCount}</h4>
        </article>
    )
}


