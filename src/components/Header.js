import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
        display:'none',
  [theme.breakpoints.down('sm')]: {
 background: 'transparent',
 display:'flex'
    },
    '& a':{
        textDecoration:'none',
        color:'#f97300',
        outline:'none'
    }
    }
}))



const Header = (props) => {
       const classes = useStyles();

    return (
            <header className={classes.root}>
            <div>
                <Link className="back-btn" to={"/"}>&larr;</Link>
                <Link to={"/"}>Arithmetic Questions</Link>
            </div>
        </header>
    )
}

export default Header