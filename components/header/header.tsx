import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import AuthModal from '../auth-modal/auth-modal';
import Link from 'next/link';

const menuLinks = [
  {
    title: 'Проекты',
    path: '/projects'
  }
];

const Header: React.FC = () => {
  const [showAuth, setShowAuth] = useState(false);

  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Link href="/" passHref>
            <Navbar.Brand>Project Track</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {menuLinks.map((item) => (
                <Link key={item.title} href={item.path} passHref>
                  <Nav.Link as="div">{item.title}</Nav.Link>
                </Link>
              ))}
            </Nav>
            <Nav>
              <Nav.Link onClick={() => setShowAuth(true)}>Войти</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">Зарегистрироваться</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <AuthModal show={showAuth} onHide={() => setShowAuth(false)} />
    </div>
  );
};

export default Header;