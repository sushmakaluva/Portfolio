import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Send from "@material-ui/icons/Send";


const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#233",
    height: "100vh",
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

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        borderColor: "tan",
      },
    },
  },
})(TextField);


function Contact() {
  const classes = useStyles();

  return (
    <section id="contact" className="paralax-mf footer-paralax bg-image sect-mt4 route">
      <Box component="div" className={classes.contactContainer}>
        <Grid container justify="center">
          <Box component="form" className={classes.form}>
            <Typography variant="h5" className={classes.heading}>
              Hire or Contact me...
                    </Typography>
            <div className="line-mf"></div>
            <br />
            <p style={{ color: "tan" }}>
              <i>
                Whether you want to get in touch, talk about a project collaboration,
                or just say hi, I'd love to hear from you.
                Simply fill the from and send me an email.
                        </i>
            </p>

            <form action="https://formspree.io/f/mjvpwyzz" method="POST">
              <InputField
                fullWidth={true}
                label="Name"
                name="Name"
                variant="outlined"
                inputProps={{ className: classes.input }}
              />
              <InputField
                fullWidth={true}
                label="Email"
                name="Email"
                variant="outlined"
                inputProps={{ className: classes.input }}
                className={classes.field}
              />
              <InputField
                fullWidth={true}
                label="Message"
                name="Message"
                variant="outlined"
                multiline
                rows={4}
                inputProps={{ className: classes.input }}
              />
              <Button
                variant="outlined"
                fullWidth={true}
                endIcon={<Send />}
                className={classes.button}
                type="submit"
              >
                Contact Me
                   </Button>
            </form>
          </Box>
        </Grid>
      </Box >

      <footer>
        <div className="container" style={{ marginTop: "90px" }}>
          <div className="row">
            <div className="col-sm-12">
              <div className="copyright-box" style={{ color: "tan" }}>
                2020 © Copyright Sushma Kaluva. All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Contact;
