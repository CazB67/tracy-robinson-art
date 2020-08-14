import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import profilepic from "assets/img/profilepic.jpg";
import EmailIcon from '@material-ui/icons/Email';
const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer>
      <GridItem xs={12} sm={12} md={12}><h2 className={classes.title}>ABOUT ME</h2></GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <img className={classes.image} src={profilepic} alt="artist" width="90%"/>
        </GridItem>
      
        <GridItem xs={12} sm={12} md={6}>
          <h5 className={classes.description}>
          I am an artist based in Fremantle, Western Australia and I have always had a love for bright, beautiful colours. My work is inspired by nature and I like to call it “Imaginary Botanicals.” I am amazed by the shape and colours presented in nature, however I don’t wish to be confined by a realistic palette or pattern and instead I like to explore shape and colour wherever it leads me. I am interested in exploring positive and negative space and my art is very vibrant and striking. At present I am enjoying exploring Australian Native Plants in my own unique way without being true to botanical artworks.

          Through my Art I express myself and bring joy to the simple things in life such as flowers and plants. The mediums I have been using have ranged from acrylic (Golden paints and Posca pens) and inks on canvas as well as alcohol inks on Yupo paper. I like the fluidity and richness of these mediums.

          If you are interested in any of my work please contact me for more details. If you can’t find what you are looking for, I am open to creating commissions especially for your home or business and you can also contact me by phone, email or social media. I look forward to hearing from you and I hope you enjoy my art.
          </h5>
          <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://www.instagram.com/tracyrobinsoncreate"
                  target="_blank"
                >
                  <i className={classes.socials + " fab fa-instagram"}/>
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://www.facebook.com/TracyRobinsoncreate"
                  target="_blank"
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="mailto:bear.111@bigpond.com"
                  target="_blank"
                >
                  <EmailIcon className={classes.socials}/>
                </Button>
        </GridItem>
      </GridContainer>
    </div>
  );
}
