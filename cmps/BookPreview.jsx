

export function BookPreview({ book }) {

    const { title, price } = book
    return (
        <article className="book-preview">
            <h2>Title: {title}</h2>
            <h4>Price: {price}</h4>
            {/* <img src={`../assets/img/${title}.png`} alt="Car Image" /> */}
        </article>
    )
}