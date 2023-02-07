import React from 'react'
import '../style.css';
import  { FaEnvelope, FaLocationArrow, FaPhone } from 'react-icons/fa'
import { FaFacebook, FaInstagram, FaLinkedin,FaYoutube } from 'react-icons/fa';

function ContactUs() {
  return (
    <div>
    <div className="content">
      <div className="container text-center">
        <div className="border-sh row">
          <div className="formbg col-sm-8">
            <div className="form h-100">
              <h3>Send us a message</h3>
              <form
                className="mb-5"
                method="post"
                id="contactForm"
                name="contactForm"
              >
                <div className="row">
                  <div className=" col-md-6 form-group mb-5">                    
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="col-md-6 form-group mb-5">                    
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 form-group mb-5">                    
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      id="phone"
                      placeholder="Phone #"
                    />
                  </div>
                  <div className="col-md-6 form-group mb-5">
                    <input
                      type="text"
                      className="form-control"
                      name="company"
                      id="company"
                      placeholder="Company  name"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group mb-5">                    
                    <textarea
                      className="form-control"
                      name="message"
                      id="message"
                      cols={30}
                      rows={4}
                      placeholder="Write your message"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <input
                      type="Submit"
                      defaultValue="Send Message"
                      name='Send Message'
                      className="sub-btn btn btn-primary rounded-0 py-2 px-4"
                    />
                    <span className="submitting" />
                  </div>
                </div>
              </form>              
            </div>

          </div>
          <div className="continf col-sm-4">
            <div className="contact-info1 h-100">
              <h3>Contact Information</h3>
              <p className="mb-5">
              The simplest way to find property in a very suitable prices. Pakistan's 1st Online Real Estate Market Place
              </p>
              <ul className="list-unstyled">
                <li className="d-flex">
                  <span className="wrap-icon icon-room mr-3" />
                  <span className="text">
                  <FaLocationArrow id='loc-icon'/> 9757 Aspen Lane South Richmond Hill, NY 11419
                  </span>
                </li>
                <li className="d-flex">
                  <span className="wrap-icon icon-phone mr-3" />
                  <span className="text">
                    <FaPhone id='loc-icon'/>+1 (291) 939 9321
                    </span>
                </li>
                <li className="d-flex">
                  <span className="wrap-icon icon-envelope mr-3" />
                  <span className="text">
                    <FaEnvelope id='loc-icon'/>info@mywebsite.com
                    </span>
                </li>
              </ul>
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
                                <li id="lists"><FaInstagram id="icon"/></li>
                                <li id="lists"><FaLinkedin id="icon"/></li>
                                <li id="lists"><FaYoutube id="icon"/></li>                                                            
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>    
    </div>


  )
}

export default ContactUs