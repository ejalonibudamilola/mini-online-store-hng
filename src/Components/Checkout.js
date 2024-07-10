import { Container } from "react-bootstrap";
import p5 from '../Images/p5.png';
import '../Styles/main.css';



function Checkout(){
    return (
        <div className="checkout">
            <Container>
                <div className="checkout-link"><a className="checkout-home" href="/">Home</a>/<a className="checkout-check" href="#">Checkout</a></div>
                <div className="row">
                    <div className="col-md-8 order-div">
                        <div className="order-summary">
                            <h3>Order Summary</h3>
                            <div className="items">
                                <div className="row">
                                    <div className="col-md-5">
                                        <img className="add-cart-img" src={p5} alt="" />
                                    </div>
                                    <div className="col-md-4">
                                        <p>Nature Wear Organic Roundwear</p>
                                        <p>Color : Ocean Blue</p>
                                        <p>Size: XL</p>
                                    </div>
                                    <div className="col-md-3 go-right-div">
                                        <p className="">$114</p>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                        <div className="delivery">
                            <h3>Delivery Information</h3>
                            <form>
                                <div className="row formline">
                                    <div className="col-md-6">
                                        <label for="firstname">Firstname</label>
                                            <input type="text" className="form-control" id="firstname" placeholder="firstname"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label for="lastname">Lastname</label>
                                        <input type="text" className="form-control" id="lastname" placeholder="lastname"/>
                                    </div>
                                </div>
                                <div className="form-group formline">
                                    <label for="inputAddress">Address</label>
                                    <input type="text" className="form-control" id="inputAddress" placeholder="address"/>
                                </div> 
                                <div className="row formline">
                                    <div className="form-group col-md-6">
                                        <label for="city">City/Town</label>
                                            <input type="text" className="form-control" id="city" placeholder="city/town"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="code">Zip Code</label>
                                        <input type="text" className="form-control" id="code" placeholder="zip code"/>
                                    </div>
                                </div> 
                                <div className="row formline">
                                    <div className="form-group col-md-6">
                                        <label for="city">Mobile Number</label>
                                            <input type="number" className="form-control" id="mobile" placeholder="mobile number"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="code">Email Address</label>
                                        <input type="email" className="form-control" id="email" placeholder="email address"/>
                                    </div>
                                </div>  
                            </form>
                        </div>
                    </div>
                    <div className="col-md-4 payment">
                        <h3>Payment Information</h3>
                        <p>
                            <input type="radio" name="options" id="option1" autocomplete="off" checked/> Debit or Credit Card
                        </p>
                        <p>
                            <input type="radio" name="options" id="option1" autocomplete="off"/> Pay on Delivery
                        </p>
                        <h4 className="card-info">
                            Enter Card Information
                        </h4>
                        <form>
                            <div className="form-group formline">
                                <label for="inputAddress">CardHolder Name</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder=""/>
                            </div> 
                            <div className="form-group formline">
                                <label for="inputAddress">Card Number</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder=""/>
                            </div> 
                            <div className="row formline">
                                <div className="form-group col-md-6">
                                        <label for="city">Expiry Date</label>
                                            <input type="text" className="form-control" id="city" placeholder="02/26"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="code">CVV</label>
                                    <input type="text" className="form-control" id="code" placeholder="123"/>
                                </div>
                            </div> 
                                
                        </form>   

                        <div className="row checkout-div">
                            <div className="col-md-6">
                                <p>Sub Total</p>
                                <p>Tax</p>
                                <p>Shipping</p>
                                <p className="checkout-bold">Total</p>

                            </div>
                            <div className="col-md-6 checkout-right">
                                <p>$2115.00</p>
                                <p>$54.00</p>
                                <p>$0.00</p>
                                <p className="checkout-bold">$2169.32</p>
                            </div>
                            <div className="buy-btn-div">
                                <button className='buy-btn'>
                                    Buy Now
                                </button>
                            </div>                            
                        </div>                    
                    </div>
                </div>

            </Container>
        </div>

    );
}
export default Checkout;