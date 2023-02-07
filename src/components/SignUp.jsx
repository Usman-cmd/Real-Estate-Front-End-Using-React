import React from 'react';
import signup from "../images/signup.jpg"
import { FaUser, FaEnvelope, FaLock, FaLockOpen } from 'react-icons/fa';
import signin from "../images/sign.png";
import { FaFacebook,FaTwitter,FaGoogle } from 'react-icons/fa';
import { FaInstagram, FaLinkedin,FaYoutube } from 'react-icons/fa';
function SignUp() {
  return (
    <div>
  {/* Sign up form */}
  <section className="signup">
    <div className="container-signup">
      <div className="signup-content">
        <div className="signup-form">
          <h2 className="form-title">Create an Account</h2>
          <form method="POST" className="register-form" id="register-form">
            <div className="form-group">
              <label htmlFor="name">
                <FaUser/>
              </label>              
              <input              
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">
                <FaEnvelope />
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="pass">
                <FaLock />
              </label>
              <input
                type="password"
                name="pass"
                id="pass"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="re-pass">
                <FaLockOpen />
              </label>
              <input
                type="password"
                name="re_pass"
                id="re_pass"
                placeholder="Repeat your password"
              />
            </div>
            <div className="form-group">
              <input
                type="checkbox"
                name="agree-term"
                id="agree-term"
                className="agree-term"
              />
              <label htmlFor="agree-term" className="label-agree-term">
                <span>
                  <span />
                </span>
                I agree all statements in{" "}
                <a href="#" className="term-service">
                  Terms of service
                </a>
              </label>
            </div>
            <div className="form-group form-button">
              <input
                type="submit"
                name="signup"
                id="signup"
                className="form-submit"
                defaultValue="Register"
              />
            </div>
          </form>
        </div>
        <div className="signup-image">
          <figure>
            <img src={signup} alt="sing up image" />
          </figure>
          <a href="#sign" className="signup-image-link">
            I am already member
          </a>
        </div>
      </div>
    </div>
    

    <section id='sign' className="sign-in">
  <div className="container-signin">
    <div className="signin-content">
      <div className="signin-image">
        <figure>
          <img src={signin} alt="sing up image" />
        </figure>
        <a href="#" className="signup-image-link">
          Create an account
        </a>
      </div>
      <div className="signin-form">
        <h2 className="form-title">Sign up</h2>
        <form method="POST" className="register-form" id="login-form">
          <div className="form-group">
            <label htmlFor="your_name">
              <FaUser/>
            </label>
            <input
              type="text"
              name="your_name"
              id="your_name"
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="your_pass">
            <FaEnvelope />
            </label>
            <input
              type="password"
              name="your_pass"
              id="your_pass"
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <input
              type="checkbox"
              name="remember-me"
              id="remember-me"
              className="agree-term"
            />
            <label htmlFor="remember-me" className="label-agree-term">
              <span>
                <span />
              </span>
              Remember me
            </label>
          </div>
          <div className="form-group form-button">
            <input
              type="submit"
              name="signin"
              id="signin"
              className="form-submit"
              defaultValue="Log in"
            />
          </div>
        </form>
        <div className="social-login">
          <span className="social-label">Or login with</span>
          <ul className="socials">
            <li>
              <a href="#">
                < FaFacebook className="display-flex-center" />
              </a>
            </li>
            <li>
              <a href="#">
                < FaTwitter className="display-flex-center" />
              </a>
            </li>
            <li>
              <a href="#">
                < FaGoogle className="display-flex-center" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

  </section>
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

export default SignUp