import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
    height: 200,
    width: 1000,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
    color: 'black'
};

const AnswerBox = () => (
    <div>
        <Paper style={style} zDepth={2}>Random Answer</Paper>
    </div>
);

export default AnswerBox;