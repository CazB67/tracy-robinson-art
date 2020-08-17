import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridItem from "components/Grid/GridItem.js";
import { container } from "assets/jss/material-kit-react.js";
import Carousel from "react-slick";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import { title } from "assets/jss/material-kit-react.js";
//import tileData from './tileData';

import TileData from "components/TileData/TileData.js";
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  description: {
    color: "#2c387e",
    textAlign: "center"
  },
  title: {
    ...title,
    color: "#2c387e",
    marginBottom: "0rem",
    marginTop: "0px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center"
  },
  slide_caption: {
    padding: "15px",
    textAlign: "center",
    color: "#2c387e",
  },
  section: {
    padding: "70px 0"
  },
  container,
  marginAuto: {
    marginLeft: "auto !important",
    marginRight: "auto !important"
  }
}));

export default function Gallery() {
    const classes = useStyles();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };
      return (
        
        
        <div className={classes.section} id="carousel">
            <GridItem id="gallery" xs={12} sm={12} md={12}><h2 className={classes.title}>GALLERY</h2></GridItem>
            <h5 className={classes.description}>
      This is a selection of the art work I have done over the years.
      </h5>
        <div className={classes.container}>
        <GridContainer>
            
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card>
              <Carousel {...settings}>
              {TileData.map((tile) => (
                  
                <div className={classes.slide} key={tile.key}>
                  <img
                    src={tile.img}
                    alt="First slide"
                    className="slick-image"
                    key={classes.key}
                  />
                  <div className={classes.slide_caption}>
                    <h4 className={classes.slide_caption}>
                      {tile.title}
                    </h4>
                  </div>
                </div>))}
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
        </div>
    </div>
      );
    }