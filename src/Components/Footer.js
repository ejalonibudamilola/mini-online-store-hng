import { Container } from "react-bootstrap";
import '../Styles/main.css';
import LinkedIn from '../Images/linkedin.png';
import Facebook from '../Images/facebook.png';
import Instagram from '../Images/instagram.png';
import Youtube from '../Images/youtube.png';

function Footer(){
    return(
        <div className="footer">
            <Container>
                <div className="row">
                    <div className="col-md-5">
                        <h3>Nature's Bounty</h3>
                        <p className="nature-footer">More sustainable lifestyles while safeguarding the planet for future generations.</p>
                    </div>
                    <div className="col-md-5 text-white">
                        <div className="row">
                            <div className="col-md-6">
                                <p className="link-head">Link</p>
                                <ul className="link-list">
                                    <li>Home</li>
                                    {/* <li>About Us</li> */}
                                    {/* <li>Contact Us</li> */}
                                    <li>Products</li>
                                </ul>
                            </div>
                            {/* <div className="col-md-6">
                                <p className="link-head">Category</p>
                                <ul className="link-list">
                                    <li>Organic Food Products</li>
                                    <li>Eco-friendly household products</li>
                                    <li>Clothing and textiles</li>
                                    <li>Reusable Eco-friendly products</li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <p className="link-head">Resources</p>
                                <ul className="link-list">
                                    <li>Privacy policy</li>
                                    <li>Terms and conditions</li>
                                </ul>                                
                            </div> */}
                        </div>
                        
                    </div>
                    <div className="col-md-2">
                        <div className="d-flex">
                            <div className="social-icon">
                                <img src={LinkedIn} alt="Link"/>
                            </div>
                            <div className="social-icon">
                                <img src={Facebook} alt="Link"/>
                            </div>
                            <div className="social-icon">
                                <img src={Instagram} alt="Link"/>
                            </div>
                            <div className="social-icon">
                                <img src={Youtube} alt="Link"/>
                            </div>
                        </div>
                    </div>
                </div>


            </Container>
        </div>
    );
}

export default Footer;