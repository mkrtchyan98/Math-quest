import React, { useState } from 'react';
import Puzzle from './Puzzle';
import helpers from '../Helpers/Question';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import Results from './Results';

const useStyles = makeStyles(theme =>({
  root: {
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    background:'black',
    width:'400px',
    height:'400px',
    backgroundImage:'linear-gradient(to right,rgba(152,90,21,.13), rgba(198, 153, 104, 0.17))',
    backgroundSize:'15px',
  [theme.breakpoints.down('sm')]: {
  maxWidth:'800px',
  width:'100%',
  margin:'0 auto',
  height:'100%',
  '& h1.Puzzle__Statement':{
    fontSize:'30px'
  }
  },
  '& span.Results__Symbol--Correct':{
    color:'green'
  },
  '& span.Results__Symbol--Incorrect':{
    color:'red'
  },
    '& div.Results': {
        display:'flex',
        flexDirection:'row',
        justifyContent:'end',
        alignItems:'center',
        position:'relative',
        right:'2px',

    },
    '& div.PuzzleContainer':{
        background:'#1e683d',
        width:'90%',
        height:'90%',
    },
    '& h2':{
        fontSize:'16px'
    },
    '& div.PuzzleResult':{
        display:'none'
    },
    '& div.QuestionNumber':{
        float:'left',
        fontSize:'calc(10px + 2vmin)',
        position:'relative',
        left:'2px',
    }
}
}));

const  Quiz = (props) =>  {
 const classes = useStyles();
const [counter,setCounter] = useState(0);
const [level,setLevel] = useState("single");
const [data,setData] = useState(helpers.Question("single",props.operator));
const [rightAnswers,setRightAnswers] = useState(0);
const [wrongAnswers,setWrongAnswers] = useState(0);
   const   choseLevel = (value) => {
        if (value > 5 && value <= 10) {
            setLevel("double")
        } else if (value > 10 && value <= 15) {
           setLevel("triple")
        } 
    }
   const  handleClick = (val) =>{
        if (val === data.correctAnswer) {
            setRightAnswers(rightAnswers+1)
        } else {
           setWrongAnswers(wrongAnswers+1)
        }
          setCounter(counter + 1);
          setData(helpers.Question(level,props.operator));
        if(counter > 5){
                  choseLevel(counter)
              }
        }    
        return (
            <div className={classes.root}>
            <Header  />
                <div className={counter === 15 ? "PuzzleResult" :"PuzzleContainer"}>
                <div className="QuestionNumber">
                {counter} of 15
                </div>
                    <div className="Results">
                        <div className="Results__Correct">
                            <span className="Results__Symbol--Correct">&#10004;</span>
                            <span className="Results__Count">{rightAnswers}</span>
                        </div>
                        <div className="Results__Incorrect">
                            <span className="Results__Symbol--Incorrect">&#x2718;</span>
                            <span className="Results__Count">{wrongAnswers}</span>
                        </div>
                    </div>
                    <Puzzle
                        handleClick={handleClick}
                        data={data} />
                </div>
                {
                    counter === 15 &&  
                    <Results rightAnswers={rightAnswers}  wrongAnswers={wrongAnswers} />
            }
            </div>
        );
 
}

export default Quiz