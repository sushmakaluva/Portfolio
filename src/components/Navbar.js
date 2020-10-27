import React, { Component } from "react";
import $ from "jquery";
import {BrowserRouter as Router} from 'react-router-dom';

class Navbar extends Component {

  componentDidMount() {
    const nav = $("nav");
    let navHeight = nav.outerHeight();

    $(".navbar-toggler").on("click", function () {
      if (!$("#mainNav").hasClass("navbar-reduce")) {
        $("#mainNav").addClass("navbar-reduce");
      }
    });

    $("body").scrollspy({
      target: "#mainNav",
      offset: navHeight
    });

    $(".js-scroll").on("click", function () {
      $(".navbar-collapse").collapse("hide");
    });

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        document
          .querySelector(".navbar-expand-md")
          .classList.add("navbar-reduce");
        document
          .querySelector(".navbar-expand-md")
          .classList.remove("navbar-trans");
      } else {
        document
          .querySelector(".navbar-expand-md")
          .classList.add("navbar-trans");
        document
          .querySelector(".navbar-expand-md")
          .classList.remove("navbar-reduce");
      }
    });

    $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
      if (
        window.location.pathname.replace(/^\//, "") ===
        this.pathname.replace(/^\//, "") &&
        window.location.hostname === this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top - navHeight + 5
            },
            1000,
            "easeInExpo"
          );
          return false;
        }
      }
    });

    $(".js-scroll").on("click", function () {
      $(".navbar-collapse").collapse("hide");
    });
  }

  render() {
    return (
      <nav
        className="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
        id="mainNav"
      >
        <div className="container">
          <nav
            className="navbar fixed-top navbar-dark justify-content-start">
            <a className="navbar-brand" href="https://github.com/sushmakaluva"
            ><i className="fa fa-github fa-md"></i
            ></a>
            <a
              className="navbar-brand"
              href="https://www.linkedin.com/in/sushma-reddy-kaluva/"
            ><i className="fa fa-linkedin-square fa-md"></i
            ></a>
            <a
              className="navbar-brand"
              href="mailto:kaluvasushma@gmail.com?Subject=Hello Sushma&Body=I would like to get in touch !"
            ><i className="fa fa-envelope fa-md"></i
            ></a>
          </nav>
          <div
            className="navbar-collapse collapse justify-content-end"
            id="navbarDefault"
          >
            <Router>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link js-scroll active" href="#home">
                    Home
                </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll" href="#about" >
                    About
                </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link js-scroll" href="#work">
                    Work
                </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll" href="#contact">
                    Contact
                </a>
                </li>
              </ul>
            </Router>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
