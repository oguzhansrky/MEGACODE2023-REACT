import React from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'
import TopNavbar from './header/TopNavbar'

const LayoutProvider = (props) => {
    return (
        <>
            <TopNavbar />
            <Header />
            {props.children}
            <Footer />
        </>
    )
}

export default LayoutProvider;
