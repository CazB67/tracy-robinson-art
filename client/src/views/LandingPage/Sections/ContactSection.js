import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/contactStyle.js";

const useStyles = makeStyles(styles);

export default function ContactSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 id="contact" className={classes.title}>CONTACT ME</h2>
          <h4 className={classes.description}>
            I'd love to hear from you. Please don't hesitate to contact me if you have any questions. I can also be contacted directly by phone: <span style={{fontWeight:"bold"}}>0433903488</span> or email: <span style={{fontWeight:"bold"}}>bear.111@bigpond.com</span> 
          </h4>
          <form action="https://formspree.io/mbjzyvba" method="POST">
          <div className="form-group">
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  required="required"
                  labelText="Your Name"
                  id="name"
                  name="name"
                  type="text"
                  formControlProps={{
                    fullWidth: true,
                    name:"name",
                    required:"required"
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  required="required"
                  labelText="Your Email"
                  id="email"
                  type="text"
                  name="_replyto"
                  formControlProps={{
                    fullWidth: true,
                    name:"_replyto",
                    required:"required"
                  }}
                />
              </GridItem>
              <CustomInput
                
                labelText="Your Message"
                id="message"
                name="message"
                type="text"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                inputProps={{
                  multiline: true,
                  rows: 5,
                  name:"message",
                  required:"required"
                }}
              />
              <GridItem xs={12} sm={12} md={4}>
                <Button color="primary" type="submit" value="Submit">Send Message</Button>
              </GridItem>
            </GridContainer></div>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}