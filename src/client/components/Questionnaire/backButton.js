import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    margin: 12,
    width: 200,
};

const BackButton = () => (
    <div>
        <RaisedButton label="Back" style={style} />
    </div>
);

export default BackButton;