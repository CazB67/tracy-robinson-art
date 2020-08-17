import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import GridItem from "components/Grid/GridItem.js";
import IconButton from '@material-ui/core/IconButton';
import { container } from "assets/jss/material-kit-react.js";
import Carousel from "react-slick";
// material-ui components
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import InfoIcon from '@material-ui/icons/Info';
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
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
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
  section: {
    padding: "70px 0"
  },
  container,
  marginAuto: {
    marginLeft: "auto !important",
    marginRight: "auto !important"
  }
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
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
            <GridItem id="about" xs={12} sm={12} md={12}><h2 className={classes.title}>GALLERY</h2></GridItem>
            <h5 className={classes.description}>
      This is a selection of the art work I have done over the years.
      </h5>
        <div className={classes.container}>
        <GridContainer>
            
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card>
              <Carousel {...settings}>
              {TileData.map((tile) => (
                <div>
                  <img
                    src={tile.img}
                    alt="First slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />{tile.title}
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