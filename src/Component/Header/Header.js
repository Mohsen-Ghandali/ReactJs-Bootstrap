import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';

const Header = () => {
  return (
    <header>
      <Navbar expand="lg" className="bg-dark bg-opacity-75 py-3 px-3" >
        <Container fluid>
          <Navbar.Brand href="#" className='text-light'>Company Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto my-2 my-lg-0 gap-5 "
              style={{ maxHeight: '100px' }}
              navbarScroll

            >
              <Nav.Link href="#action1" className='text-light'>Home</Nav.Link>
              <Nav.Link href="#action2" className='text-light'>Gallery</Nav.Link>
              <Nav.Link href="#" className='text-light'>
                About us
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 "
                aria-label="Search"
              />
              <Button variant="outline-success " className='bg-dark bg-opacity-75 text-light ' >Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Card className='bg-transparent px-4 mb-5 border-0'>
        <Card.Body>
          <Card.Text>
          <h1 className='text-center fs-3  my-2 fw-bold'>Digital Marketing</h1>
          </Card.Text>
        </Card.Body>
        <Card.Img variant="top" src={require("../../Images/4.png")} className='shadow' />
      </Card>
    </header>
  );
}

export default Header;