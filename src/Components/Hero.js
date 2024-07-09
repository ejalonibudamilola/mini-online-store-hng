import { Container } from 'react-bootstrap';
import '../Styles/main.css';
import m1 from '../Images/m1.png';
import m2 from '../Images/m2.png';
import m3 from '../Images/m3.png';
import m4 from '../Images/m4.png';
import m5 from '../Images/m5.png';
import m6 from '../Images/m6.png';
import m7 from '../Images/m7.png';
import m8 from '../Images/m8.png';
import arrow from '../Images/arrow-right.png';
import p1 from '../Images/p1.jpeg';
import p2 from '../Images/p2.png';
import p3 from '../Images/p3.png';
import p4 from '../Images/p4.png';
import p5 from '../Images/p5.png';
import p6 from '../Images/p6.png'
import p7 from '../Images/p7.png';
import p8 from '../Images/p8.png';
import p9 from '../Images/p9.png';
import p10 from '../Images/p10.png';
import p11 from '../Images/p11.png';
import p12 from '../Images/p12.png';
import p13 from '../Images/p13.png';
import p14 from '../Images/p14.png';
import p15 from '../Images/p15.png';
import p16 from '../Images/p16.png';
import b1 from '../Images/b1.png';
import b2 from '../Images/b2.jpeg';
import b3 from '../Images/b3.jpeg';
import b4 from '../Images/b4.jpeg';
import b5 from '../Images/b5.jpeg';
import b6 from '../Images/b6.jpeg';
import cart from '../Images/cart-white.png';

function Hero(){  


  const showMessage = () => {
      alert('Item successfully added to cart, check your cart');    
  }
   

    return (
        <div className='hero'>
          <Container>
            <p>🏆 2023 & 2024 AWARD WINNING ECO-FRIENDLY STORE</p>
            <h2>
                Enjoy Sustainable and Healthy Living with Our Eco-Friendly Products
            </h2>
            <p>
                At Nature's Bounty, we're committed to nurturing both people and the planet.<br/>
                Dive into our world of eco-friendly products sourced with care and consideration for the environment. 
            </p>
            <button className='hero-btn'>
                <a href="#features">Discover Eco-Friendly Products</a>
            </button>
            <div className="div-animate">
                <div className='d-flex img-to-slide'>
                    <img className='img-animate' src={m1} alt="" />
                    <img className='img-animate' src={m2} alt="" />
                    <img className='img-animate' src={m3} alt="" />
                    <img className='img-animate' src={m4} alt="" />
                    <img className='img-animate' src={m5} alt="" />
                    <img className='img-animate' src={m6} alt="" />
                    <img className='img-animate' src={m7} alt="" />
                    <img className='img-animate' src={m8} alt="" />
                </div>
               
            </div>

            <section>
                <div className='feature'>
                    <h3>Featured products</h3>
                    <p>Browse through our featured eco-friendly products of the day.</p>
                </div>
                <div className='arrow'>
                    <a href="#">See all products <img src={arrow} alt="" /></a>
                </div>
                <div className='row product-div'>
                    <div className='col-md-3 products'>
                        <img src={p1} alt="" />
                        <div className='row details'>
                            <div className='col-md-8'>
                                <p className='go-left'>Bamboo Bliss Chair</p>
                            </div>
                            <div className='col-md-4'>
                                <p className='go-right'>$114</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 products'>
                        <img src={p2} alt="" />
                        <div className='row details'>
                            <div className='col-md-8'>
                                <p className='go-left'>Organic Harvest Basket</p>
                            </div>
                            <div className='col-md-4'>
                                <p className='go-right'>$114</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 products'>
                        <img src={p3} alt="" />
                        <div className='row details'>
                            <div className='col-md-8'>
                                <p className='go-left'>Eco Fresh Home Cleaning Kit</p>
                            </div>
                            <div className='col-md-4'>
                                <p className='go-right'>$114</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 products'>
                        <img src={p4} alt="" />
                        <div className='row details'>
                            <div className='col-md-8'>
                                <p className='go-left'>Pure Earth Spa Collection</p>
                            </div>
                            <div className='col-md-4'>
                                <p className='go-right'>$114</p>
                            </div>
                        </div>
                    </div>
                </div> 
            </section>   
            <section className='browse-section'>
                <div className='feature'>
                    <h3>Browse Through Our Collections</h3>
                    <p>We have different categories of Eco-friendly products to cater and suit every of your needs and wants..</p>
                </div>
                <div className='row browse-div'>
                    <div className='col-md-4 browse'>
                        <div className='browse-img'>
                            <div className='image-overlay'>
                                <img className='image' src={b1} alt="" />
                                <div className="overlay overlay_4">
                                    <h6>
                                    Experience farm-fresh goodness with our organic food selection. From vibrant fruits to crisp vegetables
                                    </h6>
                                </div>
                            </div>                            
                        </div>
                        <p>Organic Food Products</p>
                    </div>                       
                    <div className='col-md-4 browse'>
                        <div className='browse-img'>
                            <div className='image-overlay'>
                                <img className='image' src={b2} alt="" />
                                <div className="overlay overlay_4">
                                    <h6>
                                    Transform your home into a haven of sustainability. Explore our eco-friendly household products, 
                                    thoughtfully crafted to clean with care and kindness to the environment.
                                    </h6>
                                </div>
                            </div>                            
                        </div>
                        <p>Eco-friendly household products</p>
                    </div>
                    <div className='col-md-4 browse'>
                        <div className='browse-img'>
                            <div className='image-overlay'>
                                <img className='image' src={b3} alt="" />
                                <div className="overlay overlay_4">
                                    <h6>
                                        Indulge in self-care with products that nourish both body and planet. 
                                        Dive into our collection of sustainable personal care essentials, 
                                        formulated with natural ingredients for a radiant, eco-conscious routine.
                                    </h6>
                                </div>
                            </div>                            
                        </div>
                        <p>Sustainable personal care products</p>
                    </div>
                </div>
                <div className='row browse-div'>
                    <div className='col-md-4 browse'>
                        <div className='browse-img'>
                            <div className='image-overlay'>
                                <img className='image' src={b4} alt="" />
                                <div className="overlay overlay_4">
                                    <h6>
                                        Embrace style with a conscience. Explore our sustainable clothing and textiles,
                                        where fashion meets sustainability. From organic cotton to recycled fabrics, 
                                        dress sustainably without compromising on style.
                                    </h6>
                                </div>
                            </div>                            
                        </div>
                        <p>Clothing and textiles</p>
                    </div>
                    <div className='col-md-4 browse'>
                        <div className='browse-img'>
                            <div className='image-overlay'>
                                <img className='image' src={b5} alt="" />
                                <div className="overlay overlay_4">
                                    <h6>
                                        Live sustainably, one product at a time. Discover our range of reusable and sustainable
                                        lifestyle products designed to reduce waste and elevate everyday living. Make a positive impact with every choice.
                                    </h6>
                                </div>
                            </div>                            
                        </div>
                        <p>Reusable and sustainable lifestyle products</p>
                    </div>
                    <div className='col-md-4 browse'>
                        <div className='browse-img'>
                            <div className='image-overlay'>
                                <img className='image' src={b6} alt="" />
                                <div className="overlay overlay_4">
                                    <h6>
                                    Protecting the planet starts with mindful packaging. Explore our selection of reusable and biodegradable packaging solutions,
                                     where sustainability meets convenience. Make the switch and reduce your ecological footprint.
                                    </h6>
                                </div>
                            </div>                            
                        </div>
                        <p>Reusable and Biodegradable packaging</p>
                    </div>
                </div>
            </section> 
            <section>
                <div id="features" className='feature'>
                    <h3>Popular best selling products</h3>
                    <p>Browse through some of the most purchased eco-friendly products</p>
                </div>               
                <div className='row product-div'>
                    <div className='col-md-3 products'>
                        <img src={p1} alt="" />
                        <div className='row details'>
                            <div className='col-md-8'>
                                <p className='go-left'>Bamboo Bliss Chair</p>
                            </div>
                            <div className='col-md-4'>
                                <p className='go-right'>$114</p>
                            </div>
                        </div>
                        <div className='cart-div'>
                            <button className='cart-btn' onClick={showMessage}>
                                    Add to Cart <span><img className='cart-img' src={cart} alt="" /></span>
                            </button>
                        </div>
                    </div>
                    <div className='col-md-3 products'>
                        <img src={p2} alt="" />
                        <div className='row details'>
                            <div className='col-md-8'>
                                <p className='go-left'>Organic Harvest Basket</p>
                            </div>
                            <div className='col-md-4'>
                                <p className='go-right'>$114</p>
                            </div>
                        </div>
                        <div className='cart-div'>
                            <button className='cart-btn' onClick={showMessage}>
                                    Add to Cart <span><img className='cart-img' src={cart} alt="" /></span>
                            </button>
                        </div>
                    </div>
                    <div className='col-md-3 products'>
                        <img src={p3} alt="" />
                        <div className='row details'>
                            <div className='col-md-8'>
                                <p className='go-left'>Eco Fresh Home Cleaning Kit</p>
                            </div>
                            <div className='col-md-4'>
                                <p className='go-right'>$114</p>
                            </div>
                        </div>
                        <div className='cart-div'>
                            <button className='cart-btn' onClick={showMessage}>
                                    Add to Cart <span><img className='cart-img' src={cart} alt="" /></span>
                            </button>
                        </div>
                    </div>
                    <div className='col-md-3 products'>
                        <img src={p4} alt="" />
                        <div className='row details'>
                            <div className='col-md-8'>
                                <p className='go-left'>Pure Earth Spa Collection</p>
                            </div>
                            <div className='col-md-4'>
                                <p className='go-right'>$114</p>
                            </div>
                        </div>
                        <div className='cart-div'>
                            <button className='cart-btn' onClick={showMessage}>
                                    Add to Cart <span><img className='cart-img' src={cart} alt="" /></span>
                            </button>
                        </div>
                    </div>
                </div> 
                <div className='row product-div'>
                    <div className='col-md-3 products'>
                        <img src={p5} alt="" />
                        <div className='row details'>
                            <div className='col-md-8'>
                                <p className='go-left'>Nature Wear Organic Roundneck</p>
                            </div>
                            <div className='col-md-4'>
                                <p className='go-right'>$114</p>
                            </div>
                        </div>
                        <div className='cart-div'>
                            <button className='cart-btn' onClick={showMessage}>
                                    Add to Cart <span><img className='cart-img' src={cart} alt="" /></span>
                            </button>
                        </div>
                    </div>
                    <div className='col-md-3 products'>
                        <img src={p6} alt="" />
                        <div className='row details'>
                            <div className='col-md-8'>
                                <p className='go-left'>Green Life Reusable Water Bottle</p>
                            </div>
                            <div className='col-md-4'>
                                <p className='go-right'>$114</p>
                            </div>
                        </div>
                        <div className='cart-div'>
                            <button className='cart-btn' onClick={showMessage}>
                                    Add to Cart <span><img className='cart-img' src={cart} alt="" /></span>
                            </button>
                        </div>
                    </div>
                    <div className='col-md-3 products'>
                        <img src={p7} alt="" />
                        <div className='row details'>
                            <div className='col-md-8'>
                                <p className='go-left'>Bio Wrap Biodegradable Packaging Set</p>
                            </div>
                            <div className='col-md-4'>
                                <p className='go-right'>$114</p>
                            </div>
                        </div>
                        <div className='cart-div'>
                            <button className='cart-btn' onClick={showMessage}>
                                    Add to Cart <span><img className='cart-img' src={cart} alt="" /></span>
                            </button>
                        </div>
                    </div>
                    <div className='col-md-3 products'>
                        <img src={p8} alt="" />
                        <div className='row details'>
                            <div className='col-md-8'>
                                <p className='go-left'>Sustaina Scent Eco-Friendly Candle</p>
                            </div>
                            <div className='col-md-4'>
                                <p className='go-right'>$114</p>
                            </div>
                        </div>
                        <div className='cart-div'>
                            <button className='cart-btn' onClick={showMessage}>
                                    Add to Cart <span><img className='cart-img' src={cart} alt="" /></span>
                            </button>
                        </div>
                    </div>
                </div> 
                <div className='row product-div'>
                    <div className='col-md-3 products'>
                        <img src={p9} alt="" />
                        <div className='row details'>
                            <div className='col-md-8'>
                                <p className='go-left'>Nature Wood Cutlery set</p>
                            </div>
                            <div className='col-md-4'>
                                <p className='go-right'>$114</p>
                            </div>
                        </div>
                        <div className='cart-div'>
                            <button className='cart-btn' onClick={showMessage}>
                                    Add to Cart <span><img className='cart-img' src={cart} alt="" /></span>
                            </button>
                        </div>
                    </div>
                    <div className='col-md-3 products'>
                        <img src={p10} alt="" />
                        <div className='row details'>
                            <div className='col-md-8'>
                                <p className='go-left'>Green Life Eco Friendly Water Bottle</p>
                            </div>
                            <div className='col-md-4'>
                                <p className='go-right'>$114</p>
                            </div>
                        </div>
                        <div className='cart-div'>
                            <button className='cart-btn' onClick={showMessage}>
                                    Add to Cart <span><img className='cart-img' src={cart} alt="" /></span>
                            </button>
                        </div>
                    </div>
                    <div className='col-md-3 products'>
                        <img src={p11} alt="" />
                        <div className='row details'>
                            <div className='col-md-8'>
                                <p className='go-left'>Eco Friendly Spot Remover</p>
                            </div>
                            <div className='col-md-4'>
                                <p className='go-right'>$114</p>
                            </div>
                        </div>
                        <div className='cart-div'>
                            <button className='cart-btn' onClick={showMessage}>
                                    Add to Cart <span><img className='cart-img' src={cart} alt="" /></span>
                            </button>
                        </div>
                    </div>
                    <div className='col-md-3 products'>
                        <img src={p12} alt="" />
                        <div className='row details'>
                            <div className='col-md-8'>
                                <p className='go-left'>Sustaina Scent Sun Screen</p>
                            </div>
                            <div className='col-md-4'>
                                <p className='go-right'>$114</p>
                            </div>
                        </div>
                        <div className='cart-div'>
                            <button className='cart-btn' onClick={showMessage}>
                                    Add to Cart <span><img className='cart-img' src={cart} alt="" /></span>
                            </button>
                        </div>
                    </div>
                </div> 
                <div className='row product-div'>
                    <div className='col-md-3 products'>
                        <img src={p13} alt="" />
                        <div className='row details'>
                            <div className='col-md-8'>
                                <p className='go-left'>Bronte Eco Friendly Shaving Stick</p>
                            </div>
                            <div className='col-md-4'>
                                <p className='go-right'>$114</p>
                            </div>
                        </div>
                        <div className='cart-div'>
                            <button className='cart-btn' onClick={showMessage}>
                                    Add to Cart <span><img className='cart-img' src={cart} alt="" /></span>
                            </button>
                        </div>
                    </div>
                    <div className='col-md-3 products'>
                        <img src={p14} alt="" />
                        <div className='row details'>
                            <div className='col-md-8'>
                                <p className='go-left'>Event Garden Body Lotion</p>
                            </div>
                            <div className='col-md-4'>
                                <p className='go-right'>$114</p>
                            </div>
                        </div>
                        <div className='cart-div'>
                            <button className='cart-btn' onClick={showMessage}>
                                    Add to Cart <span><img className='cart-img' src={cart} alt="" /></span>
                            </button>
                        </div>
                    </div>
                    <div className='col-md-3 products'>
                        <img src={p15} alt="" />
                        <div className='row details'>
                            <div className='col-md-8'>
                                <p className='go-left'>Clean Eco Friendly Air Humidifier</p>
                            </div>
                            <div className='col-md-4'>
                                <p className='go-right'>$114</p>
                            </div>
                        </div>
                        <div className='cart-div'>
                            <button className='cart-btn' onClick={showMessage}>
                                    Add to Cart <span><img className='cart-img' src={cart} alt="" /></span>
                            </button>
                        </div>
                    </div>
                    <div className='col-md-3 products'>
                        <img src={p16} alt="" />
                        <div className='row details'>
                            <div className='col-md-8'>
                                <p className='go-left'>Bamboo Wooden Toothbrushn</p>
                            </div>
                            <div className='col-md-4'>
                                <p className='go-right'>$114</p>
                            </div>
                        </div>
                        <div className='cart-div'>
                            <button className='cart-btn' onClick={showMessage}>
                                    Add to Cart <span><img className='cart-img' src={cart} alt="" /></span>
                            </button>
                        </div>
                    </div>
                </div> 
                <div className='row more-products'>
                    <button className='product-btn'>
                        See More Products
                    </button>
                </div>               
            </section>        
          </Container>
           
           
        </div>
    );
}

export default Hero;