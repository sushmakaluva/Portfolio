import React from "react";
import $ from "jquery";

class Navbar extends React.Component {

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

            } else {
                document
                    .querySelector(".navbar-expand-md")
                    .classList.add("navbar-trans");

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
                <div className="container" style={{ listStyleType: "none", marginLeft: "0px" }}>
                    <li className="nav-item fixed-top navbar-dark justify-content-start">
                        <a className="navbar-brand" href="https://github.com/sushmakaluva">
                            <i className="fa fa-github fa-md"></i>
                        </a>
                    </li>

                    <li className="nav-item fixed-top navbar-dark justify-content-start">
                        <a className="navbar-brand" href="https://www.linkedin.com/in/sushma-reddy-kaluva/">
                            <i className="fa fa-linkedin-square fa-md"></i>
                        </a>
                    </li>
                    <li className="nav-item fixed-top navbar-dark justify-content-start">
                        <a className="navbar-brand" href="mailto:kaluvasushma@gmail.com?Subject=Hello Sushma&Body=I would like to get in touch !">
                            <i className="fa fa-envelope fa-md"></i>
                        </a>
                    </li>
                    <button
                        className="navbar-toggler collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarDefault"
                        aria-controls="navbarDefault"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div
                        className="navbar-collapse collapse justify-content-end"
                        id="navbarDefault" style={{ listStyleType: "none", marginRight: "0px" }}>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link js-scroll active" href="#home">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll" href="#about">
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
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;