
const { useState, useEffect } = React

export function BookFilter({ defaultFilter, onSetFilterBy }) {

    const [filterByToEdite, setFilterByToEdite] = useState(defaultFilter)

    // console.log('book filter: ', filterByToEdite)

    // handeling filter chnages
    function handleTxtChange(ev) {
        // console.log('ev-target', ev.target.value)
        const value = ev.target.value
        setFilterByToEdite(filterBy => ({ ...filterBy, txt: value }))
    }

    function handlePriceChange(ev) {
        const value = ev.target.value
        setFilterByToEdite(filterBy => ({ ...filterBy, price: value }))
    }
    //----------------------------//

    function onSubmitFilter(ev) {
        ev.preventDefault() // don't know where its come

        // console.log('submit: ', filterByToEdite)
        onSetFilterBy(filterByToEdite)
    }


    const { txt, price } = filterByToEdite
    return (
        <section className="book-filter container" >
            <form onSubmit={onSubmitFilter} >
                <label htmlFor="text">Name</label>
                <input onChange={handleTxtChange} value={txt} id="txt" type="text" />


                <label htmlFor="Price">Price</label>
                <input onChange={handlePriceChange} value={price} id="price" type="number" />
                <button >Submit</button>
            </form>
        </section>
    )

}