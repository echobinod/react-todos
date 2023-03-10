import React from 'react'

export default function Footer() {
    let footerStyles = {
        position: "relative",
        top: "10vh",
        width: "100%",
    }
    return (
        <footer className='bg-dark text-light py-4' style={footerStyles}>
            <p className='text-center'>
                <a className='text-white text-decoration-none' href='https://github.com/echobinod'>@echobinod</a>
            </p>
        </footer>
    )
}
