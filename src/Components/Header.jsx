import React from 'react'
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
    return (
        <div>

            <Nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="mainNav">
                <div className="container px-4">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                            <Nav.Item>
                                <Nav.Link href="/home"><i class="fa-brands fa-instagram text-info fa-1x"></i></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-1"><i class="fa-brands fa-facebook text-info fa-1x"></i></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-2"><i class="fa-brands fa-twitter text-info fa-1x"></i></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-2"><i class="fa-solid fa-phone text-info fa-1x"></i></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-2"><i class="fa-brands fa-github text-info fa-1x"></i></Nav.Link>
                            </Nav.Item>
                    </div>
                </div>
            </Nav>

            <h3 className='bg-primary p-3 text-center' href="#home">
                <i class="fa-brands fa-readme text-light fa-1x me-2"></i>
                <span className='text-light me-5'>Online-Magazine</span>
            </h3>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto navlinks">
                            <Nav.Link href="#home" style={{ color: 'grey', hover: 'green' }}>Education</Nav.Link>
                            <Nav.Link href="#link" style={{ color: 'grey' }}>Sports</Nav.Link>
                            <Nav.Link href="#link" style={{ color: 'grey' }}>Science</Nav.Link>
                            <Nav.Link href="#link" style={{ color: 'grey' }}>History</Nav.Link>
                            <Nav.Link href="#link" style={{ color: 'grey' }}>Interviews</Nav.Link>
                            <Nav.Link href="#link" style={{ color: 'grey' }}>Business</Nav.Link>
                            <Nav.Link href="#link" style={{ color: 'grey' }}>Travel</Nav.Link>
                            <Nav.Link href="#link" style={{ color: 'grey' }}>Tourism</Nav.Link>
                            <Nav.Link href="#link" style={{ color: 'grey' }}>Blogs</Nav.Link>
                            <Nav.Link href="#link" style={{ color: 'grey' }}>Robotics</Nav.Link>
                            <Nav.Link href="#link" style={{ color: 'grey' }}>IT</Nav.Link>
                            <Nav.Link href="#link" style={{ color: 'grey' }}>News</Nav.Link>
                            <Nav.Link href="#link" style={{ color: 'grey' }}>Accounts</Nav.Link>
                            <Nav.Link href="#link" style={{ color: 'grey' }}>Sports</Nav.Link>
                            <Nav.Link href="#link" style={{ color: 'grey' }}>Science</Nav.Link>
                            <Nav.Link href="#link" style={{ color: 'grey' }}>History</Nav.Link>
                            <Nav.Link href="#link" style={{ color: 'grey' }}>Interviews</Nav.Link>
                            <Nav.Link href="#link" style={{ color: 'grey' }}>Business</Nav.Link>
                            <Nav.Link href="#link" style={{ color: 'grey' }}>Travel</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header