import React from 'react';
import Answer from './Answer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    '& div.Puzzle__Answers': {
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        lineHeight:'4rem',
    },
    '& div.answer':{
        flex:'1 1 50%'
    },
     '& h1.Puzzle__Statement':{
        fontSize:'40px',
        color:'white'
    },
    
    }
})


const Puzzle = (props) => {
   const classes = useStyles();
    const { data, handleClick } = props
    return (
      <div className={classes.root}>
        <h1 className="Puzzle__Statement">
          {data.questionString}
        </h1>
        <div className="Puzzle__Answers">
          {data.answers.map((answer, i) => {
            return (
              <Answer
                key={answer}
                value={answer}
                handleClick={handleClick}
              />
            )
          })}
        </div>
      </div>
    )

}

export default Puzzle;