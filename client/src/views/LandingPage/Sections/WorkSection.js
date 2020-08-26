import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TileData from "components/TileData/TileData.js";
import TabPanel from "components/TabPanel/TabPanel.js";
import GridItem from "components/Grid/GridItem.js";
import Grid from '@material-ui/core/Grid';
import { title } from "assets/jss/material-kit-react.js";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import GridContainer from "components/Grid/GridContainer.js";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: 3,
    textAlign: "center",
  },
  tabs: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
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
  },
  nav: {
    backgroundColor: "#2c387e",
  }
}));

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

export default function WorkSection() {
  const classes = useStyles();
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
      <GridContainer justify="center">
      <GridItem id="shop" xs={12} sm={12} md={12}><h2 className={classes.title}>SHOP</h2></GridItem>

      <div className={classes.tabs}>
      <AppBar className={classes.nav} position="static">
        <Tabs value={value} variant="fullWidth" onChange={handleChange} aria-label="tabs">
          <Tab
            value="one"
            label="Originals"
            wrapped
            {...a11yProps('one')}
          />
          <Tab value="two" label="Limited Edition Prints" {...a11yProps('two')} />
          <Tab value="three" label="Regular Prints" {...a11yProps('three')} />
        </Tabs>
      </AppBar>
      <TabPanel className={classes.subtitle} value={value} index="one">
      <Grid container justify="center" spacing={2}>
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
            <span>Price: </span>${tile.price}
          </Typography>
          <Typography variant="body2" className={classes.subtitle} component="p">
            <span>Medium: </span>{tile.medium}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>))}
    </Grid>
    
  
      </TabPanel>
      <TabPanel value={value} index="two">
      <Grid container justify="center" spacing={2}>
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
          <Typography variant="body2" className={classes.subtitle} component="p">
            <span>Medium: </span>{tile.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>))}
    </Grid>
      </TabPanel>
      <TabPanel value={value} index="three">
      <Grid container justify="center" spacing={2}>
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
          <Typography variant="body2" className={classes.subtitle} component="p">
            <span>Medium: </span>{tile.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>))}
    </Grid>
      </TabPanel>
    </div>

    

    </GridContainer>
   );
  }