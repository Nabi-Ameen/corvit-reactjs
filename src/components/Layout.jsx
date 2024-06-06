import React from 'react'
import Footer from './footer/Footer'
import { Outlet } from 'react-router-dom'
import Header from './header/Header'

const Layout = () => {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout
