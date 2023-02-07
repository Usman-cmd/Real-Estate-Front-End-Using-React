import React from 'react'
import agent1 from "../images/agent1.jpg";
import agent2 from "../images/agent2.jpg"
import agent3 from "../images/agent3.webp"
import { FaFacebook, FaInstagram, FaLinkedin,FaYoutube } from 'react-icons/fa';

function Agent() {
  return (
    <div>
      <div className='top-cont'>
        <div className='top'>
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Agents</h1>
              <p className="lead text-muted">
                We are professionals Real-Estate Agents who helps home buyers
                to find and buy a new home or commercial space.

              </p>
              <div className='agentp'>
                <p >
                  Here are the information of our professional agents who
                  can help you to find your dream homes
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container container-agent" style={{ paddingLeft: '60px' }}>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card" style={{ width: "18rem" }}>
                <img src={agent1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Muhammad Hussain</h5>
                  <p className="card-text">
                    Phone Number :  +92 3354441325
                  </p>
                  <p className="card-text">
                    Email :  M.husaain@gmail.com
                  </p>

                </div>
              </div>

            </div>
            <div className="col">
              <div className="card" style={{ width: "18rem" }}>
                <img src={agent2} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Abdul Basit</h5>
                  <p className="card-text">
                    Phone Number: +92 3354541315
                  </p>
                  <p className="card-text">
                    Email: basit02@gmail.com
                  </p>
                </div>
              </div>

            </div>
            <div className="col">
              <div className="card" style={{ width: "16.7rem" }}>
                <img src={agent3} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Muhammad Usman Akram</h5>
                  <p className="card-text">
                    Phone Number:  +92 3215421421
                  </p>
                  <p className="card-text">
                    Email:  usman12@gmail.com
                  </p>
                </div>
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
    </div >
  )
}

export default Agent