import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    margin: 12,
    width: 200,
};

const NextQuestionButton = () => (
    <div>
        <RaisedButton label="Next Question" style={style} />
    </div>
);

export default NextQuestionButton;