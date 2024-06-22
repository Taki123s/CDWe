import React, { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollRef = useRef(null);

  const scrollToTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="footer" style={{ background: "white", padding: "2%" }}>
      <div className="page-up" onClick={scrollToTop} style={{ cursor: "pointer" }}>
        <a href="" id="scrollToTopButton">
        <FontAwesomeIcon icon={faChevronUp} className="arrow_carrot-up" />
        </a>
      </div>

      <div id="fb-root"></div>

      <div id="fb-customer-chat" className="fb-customerchat"></div>

      <div className="container">
        <div className="ah_footer">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer__logo">
                <Link to={"/index"}>
                  <img className="h-full" src={logo} alt="" />{" "}
                </Link>{" "}
              </div>
            </div>
            <div className="col-lg-6"></div>

            <div className="col-lg-3">
              <p>Copyright &copy; {currentYear} All rights reserved</p>
              <p>20130012 & 20130305 & 20130115</p>
              <p>IT NLU</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
