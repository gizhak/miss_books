
import { Home } from './cmps/Home.jsx'

const { useState } = React

export function App() {

    const [page, setPage] = useState('home')


    return (
        <section className="app">
            <header className="app-header">
                <h1>My App</h1>
                <nav>
                    <span onClick={() => setPage('home')} >Home Page</span>
                    <span onClick={() => setPage('about')} >About Us</span>
                    <span onClick={() => setPage('bookindex')} >Book Index</span>
                </nav>
            </header>
            <main className="container">
                {page === 'home' && <Home />}
                {page === 'about' && <div>About Us Page</div>}
                {page === 'bookindex' && <div>Books will be here</div>}
            </main>
        </section>
    )
}