import Random from './Number/Random'
import RandomAnswers from './Number/RandomAnswers'
const obj = {
    "single": [1, 9],
    "double": [10, 99],
    "triple": [100, 999]
}


const getCorrectAnswer = (operator, nums) => {
    let correctAnswer;
    switch (operator) {
        case "+":
            correctAnswer = nums.reduce((acc, curr) => curr = acc + curr, 0)
            break;
        case "x":
            correctAnswer = nums.reduce((acc, curr) => curr = acc * curr, 1)
            break;
        case "-":
            correctAnswer = nums.reduce((acc, curr) =>Math.abs(curr = curr - acc), 0)
            break;
           default:break;

    }
    return correctAnswer
}

const Question = (level, operator) => {
    let answers;
    let operands = Random(...obj[level], 2, operator)
    const correctAnswerPostion = Math.round(Math.random() * 4);
    const correctAndLength =  getCorrectAnswer(operator, operands).toString().length;
    answers = RandomAnswers(correctAndLength, 3,  getCorrectAnswer(operator, operands));
    answers.splice(correctAnswerPostion, 0,  getCorrectAnswer(operator, operands))
 if(operands[0]>=operands[1]) {
    return {
        questionString:`${operands[0]} ${operator} ${operands[1]} = ___ ?`,
        correctAnswer: getCorrectAnswer(operator, operands),
        answers: answers,
}
}
else if(operands[0]<operands[1]){
        return {
        questionString:`${operands[1]} ${operator} ${operands[0]} = ___ ?`,
        correctAnswer:getCorrectAnswer(operator, operands),
        answers:answers,
}
}
    
}

export default Question