import './App.css';
import { Button, Navbar, Container, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
function Header(){
  return(
<div>
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
        <Navbar.Brand href="/">
            <h4><strong>React-Shop</strong></h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">주문폭주⭐</Nav.Link>
                <Nav.Link href="#link">6월 추천 아이템😎</Nav.Link>
                <NavDropdown title="유아가구🛋️" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/kidsfurniture/table">테이블&체어</NavDropdown.Item>
                  <NavDropdown.Item href="/kidsfurniture/bookcase">책장&정리함</NavDropdown.Item>
                  <NavDropdown.Item href="/kidsfurniture/bed">침대</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="베이비👶🏻" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/baby/room">베이비룸</NavDropdown.Item>
                  <NavDropdown.Item href="/baby/chair">아기체어</NavDropdown.Item>
                  <NavDropdown.Item href="/baby/bib">턱받이</NavDropdown.Item>
                  <NavDropdown.Item href="/baby/products">유아용품</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#member">회원정보</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
</div>
)}
export default Header;