import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      about_me: [
        {
          id: "first-p-about",
          content:
            "   Innovative Front-End Developer with a passion for solving logical problems with efficient and readable code. Skilled in building web applications with HTML, CSS, JavaScript and ReactJS. Ready to add experience and skills to a team of spirited developers. Excited to contribute meaningfully to a project and boost the value of the company."
        },
        {
          id: "second-p-about",
          content:
            "My coding journey started off with designing a few web pages for my organization. Learning Javascript was my next venture; this is the one which gave me a taste of what coding is all about. That's how I kick-started my coding journey which eventually led me into programming and web-designing."
        },
        {
          id: "third-p-about",
          content:
            " And, there was no looking back ! Now I completely enjoy coding and it has become a part of my life. I am ever-ready to learn new frameworks, libraries & technologies and continuously strive to be a better developer."
        }

      ],

      btnStyle: {
        backgroundColor: "tan",
        margin: "10px",
        padding: "5px"
      },

      headingStyle: {
        color: "tomato",
        margin: "10px"
      },

      aboutStyle: {
        color: "tan",
      }
    };
  }
  render() {
    return (
      <section id="about" className="paralax-mf footer-paralax bg-image sect-mt4 sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="container"
                style={{
                  background: "#233",
                  padding: "30px"
                }}
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      return (
                          <React.Fragment>
                        <h5 style={this.state.headingStyle}>Web Technologies :</h5>
                        <Button variant="primary" style={this.state.btnStyle}> HTML5</Button>{' '}
                        <Button variant="primary" style={this.state.btnStyle}>CSS3</Button>{' '}
                        <Button variant="primary" style={this.state.btnStyle}>Javascript</Button>{' '}
                        <Button variant="primary" style={this.state.btnStyle}>Bootstrap</Button>{' '}
                        <Button variant="primary" style={this.state.btnStyle}>React</Button>{' '}
                        <Button variant="primary" style={this.state.btnStyle}>jQuery</Button>{' '}
                        <Button variant="primary" style={this.state.btnStyle}>AJAX</Button>{' '}
                        <Button variant="primary" style={this.state.btnStyle}>Express</Button>{' '}

                        <h5 style={this.state.headingStyle}>Frameworks:</h5>
                        <Button variant="primary" style={this.state.btnStyle}>React</Button>{' '}
                        <Button variant="primary" style={this.state.btnStyle}>Node JS</Button>{' '}
                        <Button variant="primary" style={this.state.btnStyle}>RESTful API</Button>{' '}

                        <h5 style={this.state.headingStyle}>Databases:</h5>

                        <Button variant="primary" style={this.state.btnStyle}>MySQL</Button>{' '}
                        <Button variant="primary" style={this.state.btnStyle}>MongoDB</Button>{' '}
                        <Button variant="primary" style={this.state.btnStyle}>PostgreSQL</Button>{' '}

                        <h5 style={this.state.headingStyle}>Tools:</h5>

                        <Button variant="primary" style={this.state.btnStyle}>Git</Button>{' '}
                        <Button variant="primary" style={this.state.btnStyle}>Linux</Button>{' '}
                        <Button variant="primary" style={this.state.btnStyle}>Bitbucket</Button>{' '}
                        <Button variant="primary" style={this.state.btnStyle}>Postman</Button>{' '}
                        <Button variant="primary" style={this.state.btnStyle}>Linux</Button>{' '}
                        <Button variant="primary" style={this.state.btnStyle}>Heroku</Button>{' '}

                        <h5 style={this.state.headingStyle}>Package Management:</h5>

                        <Button variant="primary" style={this.state.btnStyle}>  npm</Button>{' '}

                        <h5 style={this.state.headingStyle}>Analytics & Reporting:</h5>

                        <Button variant="primary" style={this.state.btnStyle}>Tableau</Button>{' '}
                        <Button variant="primary" style={this.state.btnStyle}>Oracle BI</Button>{' '}
                        <Button variant="primary" style={this.state.btnStyle}>Power BI</Button>{' '}
                        <Button variant="primary" style={this.state.btnStyle}>Advanced Excel</Button>{' '}

                      </React.Fragment>
                      );
                      }}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box text-center">
                        <Typography variant="h5" style={{ color: "#ff4d4d", padding: "10px" }}>
                          ABOUT ME
                         </Typography>
                        <div className="line-mf"></div>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p style={this.state.aboutStyle} className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
};

export default About;
