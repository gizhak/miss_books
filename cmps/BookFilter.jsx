
const { useState, useEffect } = React

export function BookFilter({ }) {

    // const [filterByToEdite, setFilterByToEdite] = useState(defaultFilter)



    // console.log(filterByToEdite)


    return (
        <section className="book-filter container" >
            <form>
                <label htmlFor="text">Name</label>
                <input name="txt" id="txt" type="text" />


                <label htmlFor="Price">Price</label>
                <input name="Price" id="Price" type="number" />
                <button >Submit</button>
            </form>
        </section>
    )

}