import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
   flex:'1 1 50%'
    }
})

const  Answer = (props) => {
 const classes = useStyles();

const   handleClick = () => {
    return props.handleClick(props.value)
  }

    const { value } = props;
    return (
      <div className={classes.root}>
        <Button  variant="contained" color="secondary" onClick={handleClick}>
           {value}
        </Button>
      </div>
    )
  
}

export default Answer;