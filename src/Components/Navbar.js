import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import user from '../Images/user.png';
import cart from '../Images/cart.png';
import p5 from '../Images/p5.png';
import Add from '../Images/add.png';
import Delete from '../Images/delete.png';
import '../Styles/main.css';


function Navbar(){

    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
            <header>
                <h3 className="logo">Nature's Bounty</h3>
                <nav className="nav" ref={ navRef }>
                    <a className="active link" href="/#">Home</a>
                    <a className="link" href="/#">Shop</a>
                    <input type="text" className="icon"  placeholder="Search for Eco friendly products"/>
                    <a className="store" href="/#"><img src={user} alt="" /></a>                
                    <a className="store" onClick={handleShow}><img src={cart} alt="" /> <sup>2</sup></a>
                    <button className="nav-btn nav-close-btn" onClick={ showNavBar }>
                        <FaTimes/>
                    </button>
                </nav>
                <button className="nav-btn" onClick={showNavBar}>
                    <FaBars/>
                </button>
                <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>My Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-md-5">
                            <img className="add-cart-img" src={p5} alt="" />
                        </div>
                        <div className="col-md-4">
                            <p>Nature Wear Organic Roundwear</p>
                            <img src={Add} alt="" />
                        </div>
                        <div className="col-md-3 go-right-div">
                            <p className="">$114</p>
                            <img className="" src={Delete} alt="" />
                        </div>
                    </div>
                    <div className="row cart-total-div">
                        <div className="col-md-8">
                            <p className="cart-total">Subtotal:</p>
                        </div>
                        <div className="col-md-4">
                            <p className="cart-amount">$114.00</p>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Check Out
                    </Button>                    
                </Modal.Footer>
            </Modal>  
        </header>
                      
    );
}

export default Navbar;
