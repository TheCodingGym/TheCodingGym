import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    margin: 12,
    width: 1000,
};

const GetAnswerButton = () => (
    <div>
        <RaisedButton label="Get Answer" style={style} />
    </div>
);

export default GetAnswerButton;