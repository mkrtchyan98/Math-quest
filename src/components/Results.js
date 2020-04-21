import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  root: {
"& a": {
    outline:'none',
    color:'white',
    textDecoration:'none'
    }
}
}))



const Results = (props) => {
       const classes = useStyles();

    return (
            <div className={classes.root}>
             <h2>Right Answers: {props.rightAnswers} <hr/> Wrong Answers: {props.wrongAnswers}</h2>
             <Button  variant="contained" color="secondary"><Link to="/">Return Home</Link></Button>
                    
        </div>
    )
}

export default Results