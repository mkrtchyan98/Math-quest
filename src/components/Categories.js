import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent:'center',
    minHeight:'100vh',
    alignItems:'center',
    flexDirection:'column',
    backgroundColor:'black',
    '& > *': {
      margin: theme.spacing(1),
    },
    '& a': {
     textDecoration:'none',
     color:'white',
     outline:'none'
    },
    '& h1': {
    	color:'#f97300',
    	transition:'all .3s ease-in',
    	textShadow:' 0 0 #f97300',
    '&:hover':{
    	textShadow:'10px 10px black',
    	transition:'all .5s ease-out'
    }
    }
  },
}));
const  Categories = () => {
	  const classes = useStyles();
  return (
    <div className={classes.root}>
        <h1> Arithmetic  Questions </h1>
       <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical contained primary button group"
        variant="contained"
        size="large"
      >
        <Button> <Link to="/add" >Addition</Link> </Button>
        <Button> <Link to="/sub">Subtraction</Link> </Button>
        <Button> <Link to="/multiply">Multipy</Link> </Button>
      </ButtonGroup>

    </div>
  );
}

export default Categories;
