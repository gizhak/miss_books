
import { Home } from './cmps/Home.jsx'
import { BookIndex } from './pages/BookIndex.jsx'
import { BookFilter } from "../cmps/BookFilter.jsx"

const { useState } = React

export function App() {

    const [page, setPage] = useState('bookindex')


    return (
        <section className="app">
            <header className="app-header">
                <h1>MISS BOOKS</h1>
                <nav className='nav-toolbar'>
                    <span onClick={() => setPage('home')} >Home</span>
                    <span onClick={() => setPage('about')} >About</span>
                    <span onClick={() => setPage('bookindex')} >Books</span>
                </nav>
            </header>
            <main className="container">
                {page === 'home' && <Home />}
                {page === 'about' && <div>About Us Page</div>}
                {page === 'bookindex' && <BookIndex />}
            </main>
        </section>
    )
}