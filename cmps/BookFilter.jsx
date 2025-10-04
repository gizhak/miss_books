
const { useState, useEffect } = React

export function BookFilter({ defaultFilter, onSetFilterBy }) {

    const [filterByToEdite, setFilterByToEdite] = useState(defaultFilter)

    // console.log('book filter: ', filterByToEdite)


    useEffect(() => {
        const debTime = setTimeout(() => {
            onSetFilterBy(filterByToEdite)
        }, 800)
        return () => clearTimeout(debTime)
    }, [filterByToEdite])


    // handeling filter chnages
    function handleTxtChange(ev) {
        // console.log('ev-target', ev.target.value)
        const value = ev.target.value
        setFilterByToEdite(filterBy => ({ ...filterBy, txt: value }))
    }

    function handlePriceChange(ev) {
        const value = ev.target.value
        setFilterByToEdite(filterBy => ({ ...filterBy, price: +value || 0 }))
    }

    function handleCtgsChange(ev) {
        console.log('ev-target', ev.target.value)
        const value = ev.target.value
        setFilterByToEdite(filterBy => ({ ...filterBy, catg: value }))
    }
    //----------------------------//

    function onSubmitFilter(ev) {
        ev.preventDefault() // don't know where its come

        // console.log('submit: ', filterByToEdite)
        onSetFilterBy(filterByToEdite)
    }

    function onClearFilter() {
        const emptyFilter = { txt: '', price: '', catg: '' }
        setFilterByToEdite(emptyFilter)
        onSetFilterBy(emptyFilter) // send to Perent
    }


    const { txt, price, catg } = filterByToEdite
    return (
        <section className="book-filter container" >
            <form onSubmit={onSubmitFilter} >
                <label htmlFor="text">Name</label>
                <input onChange={handleTxtChange} value={txt} id="txt" type="text" />

                <label htmlFor="Price">Price</label>
                <input onChange={handlePriceChange} value={price} id="price" type="number" />

                <label htmlFor="categories">Categories</label>
                <select onChange={handleCtgsChange} value={catg} id="ctgs">
                    <option value="">All Categories</option>
                    <option value="Love">Love</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Poetry">Poetry</option>
                    <option value="Computers">Computers</option>
                    <option value="Religion">Religion</option>
                </select>

                {/* <button >Submit</button> */}
                <button type="button" onClick={onClearFilter} >Clear Filter</button>

            </form>
        </section>
    )
}