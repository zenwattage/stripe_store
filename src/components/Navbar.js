import { Button, Container, Navbar, Modal } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { CartContext } from '../CartContext';

function NavbarComponent() {

    const cart = useContext(CartContext);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="sm">
                <Navbar.Brand href="/"> E-Commerce </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Button variant="dark" onClick={handleShow}> Cart ({productsCount}) Items</Button>
                </Navbar.Collapse>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h1>This is the modal body</h1>
                </Modal.Body>
            </Modal>
        </>
    );

}

export default NavbarComponent;