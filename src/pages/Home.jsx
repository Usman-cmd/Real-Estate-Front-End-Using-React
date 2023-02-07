import React from "react";
import logoab from "../images/about.jpg"
import logo1 from "../images/service-1.jpg"
import logo2 from "../images/service-2.jpg"
import logo3 from "../images/service-3.jpg"
import logo4 from "../images/service-4.jpg"
import logo5 from "../images/service-5.jpg"
import logo6 from "../images/service-6.jpg"
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

function Home() {
    return (
        <div >
            {/* Header */}
            <header id="header">
                <div className="intro">
                    <div className="overlay">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 col-md-offset-2 intro-text">
                                    <h1>
                                        Welcome To
                                        <br />
                                        Your New Home
                                    </h1>
                                    <p>
                                        The simplest way to find property in a very suitable prices.
                                        Pakistan's 1st Online Real Estate Market Place , lets you buy, rent and sell houses,
                                        plots, shops, flats in Islamabad,lahoe and all across pakistan.
                                    </p>
                                    <a href="#about" className="btn btn-custom btn-lg page-scroll">
                                        Learn More
                                    </a>{" "}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* Get Touch Section */}
            <div id="get-touch">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-6 col-md-offset-1">
                            <h3>Find your dream Home</h3>
                            <p>
                                Get started today and complete our form to request your free
                                estimate
                            </p>
                        </div>
                        <div className="col-xs-12 col-md-4 text-center">
                            <a href="#contact" className="btn btn-custom btn-lg page-scroll">
                                Free Estimate
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* About Section */}
            <div id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-6">
                            {" "}
                            <img src={logoab} className="img-responsive" alt="" />{" "}
                        </div>
                        <div className="col-xs-12 col-md-6">
                            <div className="about-text">
                                <h2>Who We Are</h2>
                                <p>
                                    Pakistan's 1st Online Real Estate Market Place , lets you buy, rent and sell houses,
                                    plots, shops, flats in Islamabad,lahoe and all across pakistan. Find Your dream home with us.
                                </p>
                                <h3>Why Choose Us?</h3>
                                <div className="list-style">
                                    <div className="col-lg-6 col-sm-6 col-xs-12">
                                        <ul>
                                            <li>Years of Experience</li>
                                            <li>Fully Insured</li>
                                            <li>Cost Control Experts</li>
                                            <li>100% Satisfaction Guarantee</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-xs-12">
                                        <ul>
                                            <li>Free Consultation</li>
                                            <li>Satisfied Customers</li>
                                            <li>Project Management</li>
                                            <li>Affordable Pricing</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="services">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Services</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="service-media">
                                {" "}
                                <img src={logo1} alt=" " />{" "}
                            </div>
                            <div className="service-desc">
                                <h3>New Home Construction</h3>
                                <p>
                                    The best offer for our customers
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-media">
                                {" "}
                                <img src={logo2} alt=" " />{" "}
                            </div>
                            <div className="service-desc">
                                <h3>Home Additions</h3>
                                <p>
                                    Beautiful and Furnished Homes
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-media">
                                {" "}
                                <img src={logo3} alt=" " />{" "}
                            </div>
                            <div className="service-desc">
                                <h3>Bathroom Remodels</h3>
                                <p>
                                    With Attached Washrooms
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="service-media">
                                {" "}
                                <img src={logo4} alt=" " />{" "}
                            </div>
                            <div className="service-desc">
                                <h3>Kitchen Remodels</h3>
                                <p>
                                    Open and Wide Kitchens
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-media">
                                {" "}
                                <img src={logo5} alt=" " />{" "}
                            </div>
                            <div className="service-desc">
                                <h3>Windows &amp; Doors</h3>
                                <p>
                                    clean slate Windows for best views
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-media">
                                {" "}
                                <img src={logo6} alt=" " />{" "}
                            </div>
                            <div className="service-desc">
                                <h3>Decks &amp; Porches</h3>
                                <p>
                                    Wide and beautiful porches
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            


            <div class="Footer ">
                <div className="headers">
                    <h1>Get In Touch</h1>
                </div>
                <div class="row">
                    <div class="col">
                        <div className="contact-info">
                            <h2>Contact Info</h2>
                            <hr />
                        </div>
                        <div className="cont">
                            <div className="add">
                                <h4 >Address:</h4>
                                <p >4321 Defence St, Lahore, CA 1234</p>
                            </div>
                            <div className="ph">
                                <h4>Phone:</h4>
                                <p>+92 33542530</p>
                            </div>
                            <div className="em">
                                <h4>Email:</h4>
                                <p>sigma43@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div className="contact-info">
                            <h2>Links</h2>
                            <hr />
                        </div>
                        <div className="cont">
                            <ul>
                                <li id="lists">Home</li>
                                <li id="lists">Agents</li>
                                <li id="lists">Sign Up</li>
                                <li id="lists">Contact Us</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                        <div className="contact-info">
                            <h2>Social</h2>
                            <hr />
                        </div>
                        <div className="cont">
                            <ul>
                                <li id="lists"><FaFacebook id="icon" /></li>
                                <li id="lists"><FaInstagram id="icon" /></li>
                                <li id="lists"><FaLinkedin id="icon" /></li>
                                <li id="lists"><FaYoutube id="icon" /></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            



        </div>

    )
}
export default Home
