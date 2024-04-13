import React from 'react'
import './home.css';
import rlogo from '../../assets/logo/favicon.png'
import person from '../../assets/image/download.jpeg';
import logo from '../../assets/image/favicon.png';
import one from '../../assets/image/1.jpeg';
import two from '../../assets/image/2.jpeg';
import three from '../../assets/image/3.jpeg';
import devlopment from '../../assets/icon/web-development.png';
import smartphone from '../../assets/icon/smartphone.png';
import gear from '../../assets/icon/gear.png';
import team from '../../assets/icon/team.png';
import women from '../../assets/image/business-woman-office3.jpg';
import icon from '../../assets/icon/download.png';
import facebook from '../../assets/icon/facebook.png';
import twiter from '../../assets/icon/twitter.png';
import instagram from '../../assets/icon/instagram.png';
import menu from '../../assets/icon/menu.png';


export default function Home() {
  return (
    <div>

      <header>
        <a href="index.js">
          <img src={logo} alt="logo" />
        </a>

        <div className="header-link">
          <a href="abc">One</a>
          <a href="abc">Two</a>
          <a href="abc">Three</a>
          <a href="abc">Four</a>
          <a href="abc">Five</a>
          <a href="abc">Six</a>
        </div>

        <button className='button-main' type='button'><p>BUTTON</p></button>

        <div className="hemburger">
          <img src={menu} alt="menu" />
        </div>

      </header>





      <div className="container-two">
        <div className="herobaanner">
          <div className="first-hero-box">
            <div className="box-side-margin">
              <div className="box-on">
                <div className="box-one">
                  <h2>We advise leaders on strategy</h2>
                  <a href="#stop"><button type='button'><p>CONTACT US</p></button></a>
                </div>
                <div className="second-hero-box">
                  <img src={person} alt="person" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='container'>
        <div className="idel-pera">
          <h2> The idea that drives us as management consultants</h2>
        </div>
        <div className="lorem-pera">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="slidr-off">
          <div className="sli-box">
            <img src={one} alt="one" />
            <div className="who-pera">
              <h4> Who we are</h4>
              <p>Sample text. Click to select the Text Element.</p>
            </div>
          </div>

          <div className="sli-box">
            <img src={two} alt="one" />
            <div className="who-pera">
              <h4>Our Values</h4>
              <p>Sample text. Click to select the Text Element.</p>
            </div>
          </div>

          <div className="sli-box">
            <img src={three} alt="one" />
            <div className="who-pera">
              <h4>Our People</h4>
              <p>Sample text. Click to select the Text Element.</p>
            </div>
          </div>
        </div>
      </div>





      <div className="service-back-colo">
        <div className="container-one">
          <div className="serv-pera">
            <h2>Company Services</h2>
          </div>
          <div className="serv-box-flex-main">
            <div className="serv-box">
              <div className="serv-box-top">
                <div className="serv-box-top-pad">
                  <div className="serv-icon-box">
                    <img src={devlopment} alt="development" />
                  </div>
                  <div className="dev-pera">
                    <h5>Development</h5>
                  </div>
                </div>
              </div>

              <div className="serv-box-bottom">
                <p>Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident.</p>
              </div>
              <div className="serv-box-bottom-a">
                <a href="#stop">MORE</a>
              </div>
            </div>

            <div className="serv-box">
              <div className="serv-box-top">
                <div className="serv-box-top-pad">
                  <div className="serv-icon-box">
                    <img src={smartphone} alt="development" />
                  </div>
                  <div className="dev-pera">
                    <h5>Mobility Services</h5>
                  </div>
                </div>
              </div>

              <div className="serv-box-bottom">
                <p>Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident.</p>
              </div>
              <div className="serv-box-bottom-a">
                <a href="#stop">MORE</a>
              </div>
            </div>

            <div className="serv-box">
              <div className="serv-box-top">
                <div className="serv-box-top-pad">
                  <div className="serv-icon-box">
                    <img src={gear} alt="development" />
                  </div>
                  <div className="dev-pera">
                    <h5>IT Consulting</h5>
                  </div>
                </div>
              </div>

              <div className="serv-box-bottom">
                <p>Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident.</p>
              </div>
              <div className="serv-box-bottom-a">
                <a href="#stop">MORE</a>
              </div>
            </div>

            <div className="serv-box">
              <div className="serv-box-top">
                <div className="serv-box-top-pad">
                  <div className="serv-icon-box">
                    <img src={team} alt="development" />
                  </div>
                  <div className="dev-pera">
                    <h5>Our Team</h5>
                  </div>
                </div>
              </div>

              <div className="serv-box-bottom">
                <p>Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident.</p>
              </div>
              <div className="serv-box-bottom-a">
                <a href="#stop">MORE</a>
              </div>
            </div>
          </div>
        </div>
      </div>






      <div className="shap-div">
        <div className="container">
          <div className="shap-div-iner">
            <div className="circle-img-women">
              <img src={women} alt="women" />
            </div>

            <div className="side-info-pera">
              <div className="side-info-box-pera">
                <img src={icon} alt="icon" />
              </div>
              <div className="side-info-box-pera-write">
                <p> Navigating industry-shaping transitions like circularity with my clients, and turning these into opportunities, is why I do this work. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>
              <div className="side-info-merrill-pera">
                <p>- Merrill Smith,&nbsp;Partner</p>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="contact-form-page">
        <div className="container-one">
          <div className="contact-form-page">
            <div className="contact-frm-pa-ma">
              <div className="contact-form-detail">
                <div className="contact-form-first-box">
                  <div className="contact-form-first-box-iner">
                    <h4>Nam ultrices ultrices nec tortor pulvinar esteras loremips est orem.</h4>
                    <p className='add'>Address:<span>New York, USA</span></p>
                    <p>Phone:<span>+1 234-567-890</span></p>
                    <p>Hours:<span>6:00 am – 2:00 am</span></p>

                    <div className="social-media-logo">
                      <a href="#stop">
                        <img src={facebook} alt="facebook" />
                      </a>
                      <a href="#stop">
                        <img src={twiter} alt="twiter" />
                      </a>
                      <a href="#stop">
                        <img src={instagram} alt="instagram" />
                      </a>
                    </div>
                  </div>

                </div>
                <div className="contact-form-second-box">
                  <div className="contact-frm">

                    <form>
                      <input type="text" placeholder='Name' />
                      <input type="email" placeholder='Email' />
                      <input type="text" placeholder='Subject' />
                      <textarea name="message" cols="30" rows="10" placeholder='Message'></textarea>
                      <a href="#stop"><button type='button'>SUBMIT</button></a>
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>







      <footer>
        <div className="footer-det">
          <div className="rlogo-class">
            <img src={rlogo} alt="error" />
          </div>
          <div class="footer-menu">
            <div class="footer-menu-item">
              <a href="#home">Home</a>
            </div>
            <div class="footer-menu-item">
              <a href="#about">About</a>
            </div>
            <div class="footer-menu-item">
              <a href="#services">Services</a>
            </div>
            <div class="footer-menu-item">
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className="social-media-logo-last">
            <a href="https://www.facebook.com/">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="https://twitter.com/">
              <img src={twiter} alt="twiter" />
            </a>
            <a href="https://www.instagram.com/" >
              <img src={instagram} alt="instagram" />
            </a>
          </div>


        </div>
        <div class="footer-copyright">
          © 2023 Company Name
        </div>
      </footer>



    


    </div>



  )
}
