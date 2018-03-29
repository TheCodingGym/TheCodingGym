import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
    height: 410,
    width: 1000,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
    color: 'black'
};

const QuestionBox = () => (
    <div>
        <Paper style={style} zDepth={2}>Random Question</Paper>
    </div>
);

export default QuestionBox;