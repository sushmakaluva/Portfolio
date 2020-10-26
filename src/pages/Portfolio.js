import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

//import stock
import stock from "../img/images/image1.jpg";
import stock1 from "../img/images/image2.jpg";
import stock2 from "../img/images/image3.jpg";
import stock3 from "../img/images/image4.jpg";
import stock4 from "../img/images/image5.jpg";
import stock5 from "../img/images/image6.jpg";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#233",
    padding: "30px"
  },
  heading: {
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  input: {
    color: "#fff",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tan",
  },
  field: {
    margin: "1rem 0rem",
  },
}));


function Portfolio() {
  const classes = useStyles();

  return (
    <section id="work" className="paralax-mf footer-paralax bg-image sect-mt4 sect-pt4 route" >
      <Box component="div" className={classes.contactContainer}>
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <Typography variant="h5" className={classes.heading}>
                PROJECTS
                    </Typography>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="work-box">
              <a href={stock} data-lightbox="gallery-vmarine">
                <div className="work-img">
                  <img src={stock} alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Lorem Ipsum</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          HTML5 CSS3 Bootstrap ReactJS
                          </span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <span className="ion-ios-plus-outline"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href={stock1}
                data-lightbox="gallery-vmarine"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
                </a>
              <a
                href={stock2}
                data-lightbox="gallery-vmarine"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
                </a>
              <a
                href={stock3}
                data-lightbox="gallery-vmarine"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
                </a>
              <a
                href={stock4}
                data-lightbox="gallery-vmarine"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
                </a>
              <a
                href={stock5}
                data-lightbox="gallery-vmarine"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
                </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href={stock} data-lightbox="gallery-aguadeluz">
                <div className="work-img">
                  <img src={stock1} alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Lorem Ipsum</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          HTML5 CSS3 Bootstrap Webpack SmoothScrolling
                          VanillaJS
                          </span>{" "}
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <span className="ion-ios-plus-outline"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href={stock1}
                data-lightbox="gallery-aguadeluz"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
                </a>
              <a
                href={stock2}
                data-lightbox="gallery-aguadeluz"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
                </a>
              <a
                href={stock3}
                data-lightbox="gallery-aguadeluz"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
                </a>
              <a
                href={stock4}
                data-lightbox="gallery-aguadeluz"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
                </a>
              <a
                href={stock5}
                data-lightbox="gallery-aguadeluz"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
                </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href={stock} data-lightbox="gallery-todo">
                <div className="work-img">
                  <img src={stock2} alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Lorem Ipsum</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          HTML5 CSS3 Bootstrap Webpack ReactJS
                          </span>
                        {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <span className="ion-ios-plus-outline"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href={stock1}
                data-lightbox="gallery-todo"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
                </a>
              <a
                href={stock2}
                data-lightbox="gallery-todo"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
                </a>
              <a
                href={stock3}
                data-lightbox="gallery-todo"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
                </a>
              <a
                href={stock4}
                data-lightbox="gallery-todo"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
                </a>
              <a
                href={stock5}
                data-lightbox="gallery-todo"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
                </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href={stock} data-lightbox="gallery-medlingos">
                <div className="work-img">
                  <img src={stock3
                  } alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Lorem Ipsum</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          Bootstrap ReactJS GoogleAPI
                          </span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <span className="ion-ios-plus-outline"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href={stock1}
                data-lightbox="gallery-medlingos"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
                </a>
              <a
                href={stock2}
                data-lightbox="gallery-medlingos"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
                </a>
              <a
                href={stock3}
                data-lightbox="gallery-medlingos"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
                </a>
              <a
                href={stock4}
                data-lightbox="gallery-medlingos"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
                </a>
              <a
                href={stock5}
                data-lightbox="gallery-medlingos"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
                </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href={stock} data-lightbox="gallery-smth">
                <div className="work-img">
                  <img src={stock4} alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Lorem Ipsum</h2>
                      <div className="w-more">
                        <span className="w-ctegory">MERN</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <span className="ion-ios-plus-outline"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href={stock1}
                data-lightbox="gallery-smth"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
                </a>
              <a
                href={stock2}
                data-lightbox="gallery-smth"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
                </a>
              <a
                href={stock3}
                data-lightbox="gallery-smth"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
                </a>
              <a
                href={stock4}
                data-lightbox="gallery-smth"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
                </a>
              <a
                href={stock5}
                data-lightbox="gallery-smth"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
                </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href={stock} data-lightbox="gallery-mf">
                <div className="work-img">
                  <img src={stock5} alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Lorem Ipsum</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          HTML5 CSS3 Bootstrap MERN
                          </span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <span className="ion-ios-plus-outline"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href={stock1}
                data-lightbox="gallery-mf"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
                </a>
              <a
                href={stock2}
                data-lightbox="gallery-mf"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
                </a>
              <a
                href={stock3}
                data-lightbox="gallery-mf"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
                </a>
              <a
                href={stock4}
                data-lightbox="gallery-mf"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
                </a>
              <a
                href={stock5}
                data-lightbox="gallery-mf"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
                </a>
            </div>
          </div>
        </div>
      </Box>
    </section>
  );
}

export default Portfolio;
