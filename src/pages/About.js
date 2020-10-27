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
            "Front-End Developer graduated from UofT, adept at building responsive web applications utilizing agile development. Passionate about learning new technologies, bringing ideas to life, and working with dedicated teams to build efficient and robust applications suited to the user’s needs."
        },
        {
          id: "second-p-about",
          content:
            "Full Stack Developer and recent graduate of the UofT Coding Bootcamp with a passion for solving logic problems with efficient and readable code. Skilled in building web applications with object-oriented JavaScript and Node.js.  Leverages experience as a professional actor to communicate effectively, and perform well under pressure and with tight deadlines. Ready to add experience and skills to a team of spirited developers. Excited to contribute meaningfully to a project and boost the value of the company."
        },
        {
          id: "third-p-about",
          content:
            "Innovative and Experienced Front-End Developer, adept in all stages of web development, knowledgeable in User Interface, testing and debugging process. Equipped with a diverse and promising skill set, proficient in in technologies HTML, CSS, JavaScript libraries and frameworks, who can efficiently self-manage given projects and can collaborate with the team. "
        }
      ],

      btnStyle: {
        backgroundColor: "tan",
        margin: "10px",
        padding: "5px"
      },

      headingStyle: {
        color: "tomato",
        margin:"10px"
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
                            <Button variant="primary" style={this.state.btnStyle}> HTML</Button>{' '}
                            <Button variant="primary" style={this.state.btnStyle}>CSS</Button>{' '}
                            <Button variant="primary" style={this.state.btnStyle}>JS</Button>{' '}
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
                            <Button variant="primary" style={this.state.btnStyle}>Bitbucket</Button>{' '}
                          
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
