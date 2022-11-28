import {Container, Nav, Navbar} from "react-bootstrap"
import { Outlet, Link} from "react-router-dom"
import logo from '../../img/logo.svg'
import rus from '../../img/flagRus.svg'
import eng from '../../img/flagEng.svg'
import './NavigationBar.css'

function NavigationBar() {
    return (
        <>
            <Navbar as="header" expand="lg" className="nav">
                <Container>
                    <Link to="/" className="logo">
                        <img src={logo} alt="logo" />
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/" className="nav-link">Главная</Link>
                            <Link to="/architects" className="nav-link">Архитекторы Беларуси</Link>
                        </Nav>
                        <div className="nav-languages">
                            <Nav.Link className="lang">
                                <img src={rus} alt="russian" className="flag"/>
                                <span>Русский</span>
                            </Nav.Link>

                            <Nav.Link className="lang">
                                <img src={eng} alt="english" className="flag"/>
                                <span>Английский</span>
                            </Nav.Link>
                        </div>
                    </Navbar.Collapse>

                </Container>
            </Navbar>

            <Outlet />
        </>

    );
}

export default NavigationBar;