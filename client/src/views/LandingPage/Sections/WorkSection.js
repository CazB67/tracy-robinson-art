import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import GridItem from "components/Grid/GridItem.js";
import IconButton from '@material-ui/core/IconButton';
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
  title: {
    ...title,
    color: "#2c387e",
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center"
  },
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
export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridItem id="about" xs={12} sm={12} md={12}><h2 className={classes.title}>SHOP</h2></GridItem>
      <GridList cellHeight={180} className={classes.gridList} xs={2} m={4}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
        </GridListTile>
        {TileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>Size: {tile.size} <br></br>Price: {tile.price}</span>}
        
              
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}