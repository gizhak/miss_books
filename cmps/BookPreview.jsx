

export function BookPreview({ book }) {

    const { title, price } = book
    return (
        <article className="book-preview">
            <img src={`../assets/img/${title}.jpg`} alt="book Image" />
            <h2>Title: {title}</h2>
            <h4>Price: {price}</h4>
        </article>
    )
}


