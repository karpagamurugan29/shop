import React from 'react'

export const Header = () => {
  return (
    <div>
    <div id="preloader">
        <div className="jumper">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>  
   
    <header className="header-area header-sticky">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="main-nav">
                      
                        <a href="index.html" className="logo">
                            <img src="assets/images/logo.png"/>
                        </a>
                       
                        {/* <ul className="nav">
                            <li className="scroll-to-section"><a   className="active">Home</a></li>
                            <li className="scroll-to-section"><a  >Men's</a></li>
                            <li className="scroll-to-section"><a  >Women's</a></li>
                            <li className="scroll-to-section"><a  >Kid's</a></li>
                            <li className="submenu">
                                <a href="javascript:;">Pages</a>
                                <ul>
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="products.html">Products</a></li>
                                    <li><a href="single-product.html">Single Product</a></li>
                                    <li><a href="contact.html">Contact Us</a></li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <a href="javascript:;">Features</a>
                                <ul>
                                    <li><a  >Features Page 1</a></li>
                                    <li><a  >Features Page 2</a></li>
                                    <li><a  >Features Page 3</a></li>
                                    <li><a rel="nofollow" href="https://templatemo.com/page/4" target="_blank">Template Page 4</a></li>
                                </ul>
                            </li>
                            <li className="scroll-to-section"><a  >Explore</a></li>
                        </ul>        
                        <a class='menu-trigger'>
                            <span>Menu</span>
                        </a>
                       */}
                    </nav>
                </div>
            </div>
        </div>
    </header>
    </div>
  )
}
