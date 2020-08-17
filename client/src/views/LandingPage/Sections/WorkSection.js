import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TileData from "components/TileData/TileData.js";
import GridItem from "components/Grid/GridItem.js";
import { title } from "assets/jss/material-kit-react.js";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import GridContainer from "components/Grid/GridContainer.js";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: 3,
    textAlign: "center",
  },
  title: {
    ...title,
    color: "#2c387e",
    marginBottom: "0rem",
    marginTop: "0px",
    minHeight: "20px",
    textDecoration: "none",
    textAlign: "center"
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  subtitle: {
    color: "#2c387e",
  }
}));

export default function WorkSection() {
  const classes = useStyles();

  return (
    
      <GridContainer justify="center">
      <GridItem id="shop" xs={12} sm={12} md={12}><h2 className={classes.title}>SHOP</h2></GridItem>
      {TileData.map((tile) => (
      <Card className={classes.root} key={tile.key}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={tile.title}
       
          image={tile.img}
          title={tile.title}
        />
        <CardContent>
          <Typography className={classes.title} gutterBottom variant="h5" component="h2">
            {tile.title}
          </Typography>
          <Typography variant="body2" className={classes.subtitle} component="p">
            <span>Size: </span>{tile.size}
          </Typography>
          <Typography variant="body2" className={classes.subtitle} component="p">
            <span>Price: </span>{tile.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>))}
    </GridContainer>
    
  );
}