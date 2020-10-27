import React from "react";
import "../components/Particles";
import Grid from "@material-ui/core/Grid";
import Typed from "react-typed";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import avatar from "../avatar.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

function Intro() {
  const classes = useStyles();

  return (
    <div id="home" className="intro route">
      <div className="intro-content display-table">
        <div className="table-cell">
          <div className="container">
            <Grid container justify="center">
              <Avatar className={classes.avatar} src={avatar} alt="Sushma Kaluva" />
            </Grid>
            <Typography className={classes.title} variant="h3">
              <Typed strings={["Sushma Kaluva"]} typeSpeed={40} />
            </Typography>
            <Typography className={classes.subtitle} variant="h6">
              <Typed
                strings={[
                  "Front-end Developer",
                  "Web Developer",
                  "Full-stack Developer",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </Typography>
            <p className="pt-3">
              <a
                className="btn btn-primary btn js-scroll px-4"
                href="/resume"
                role="button"
              >
                View my Resume
                </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
