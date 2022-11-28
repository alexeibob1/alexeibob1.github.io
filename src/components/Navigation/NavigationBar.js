import {Container, Nav, Navbar} from "react-bootstrap"
import logo from '../../img/logo.svg'
import rus from '../../img/flagRus.svg'
import eng from '../../img/flagEng.svg'
import './NavigationBar.css'

function NavigationBar() {
    return (
        <Navbar as="header" expand="lg" className="nav">
            <Container>
                <Navbar.Brand href="#home" className="logo">
                    <img src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className="nav-link">Главная</Nav.Link>
                        <Nav.Link href="#people" className="nav-link">Архитекторы Беларуси</Nav.Link>
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
    );
}

export default NavigationBar;