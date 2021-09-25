import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer>
            <Navbar bg="dark" expand="md" variant="dark" collapseOnSelect>
                <Container>
                    <p className="text-center w-100 text-white m-0">
                        All right reserved by <strong>Md Borhan Uddin</strong>
                    </p>
                </Container>
            </Navbar>
        </footer>
    )
}

export default Footer
