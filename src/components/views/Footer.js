import React from 'react';

export default () => {
  return(
    <footer className="section footer-classic context-dark bg-image">
        <div className="container">
          <div className="row row-30 footer-row">
            <div className="col-md-4 col-xl-5">
              <div className="pr-xl-4">
                <p>Food safety, ensure health</p>
                <p className="rights"><span>©  </span><span className="copyright-year">2021</span><span>. </span><span>Done by 2H2K.</span></p>
              </div>
            </div>
            <div className="col-md-4">
              <h5>Contacts</h5>
              <dl className="contact-list">
                <dt>Address:</dt>
                <dd>280 An Duong Vuong, Q5, TP.HCM, VietNam</dd>
              </dl>
              <dl className="contact-list">
                <dt>Email:</dt>
                <dd><a href="mailto:#">info@example.com</a></dd>
              </dl>
              <dl className="contact-list">
                <dt>Phone:</dt>
                <dd><a href="tel:#">0909845154</a>
                </dd>
              </dl>
            </div>
            <div className="col-md-4 col-xl-3">
              <h5>Links</h5>
              <ul className="nav-list">
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contacts">Contacts</a></li>
                <li><a href="#pricing">Pricing</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row no-gutters social-container">
          <div className="col"><a className="social-inner" href="#facebook"><span className="icon mdi mdi-facebook"></span><span>Facebook</span></a></div>
          <div className="col"><a className="social-inner" href="#instagram"><span className="icon mdi mdi-instagram"></span><span>instagram</span></a></div>
          <div className="col"><a className="social-inner" href="#google"><span className="icon mdi mdi-youtube-play"></span><span>google</span></a></div>
        </div>
      </footer>
  );
}
