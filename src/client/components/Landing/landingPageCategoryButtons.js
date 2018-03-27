import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    algorithms: {
        margin: 12,
        width: 300,
        height: 50,
        position: 'absolute',
        top: 180,
        left: 850,
    },
    systemDesign: {
        margin: 12,
        width: 300,
        height: 50,
        position: 'absolute',
        top: 240,
        left: 850,
    },
    frontEnd: {
        margin: 12,
        width: 300,
        height: 50,
        position: 'absolute',
        top: 300,
        left: 850,
    },
    backEnd: {
        margin: 12,
        width: 300,
        height: 50,
        position: 'absolute',
        top: 360,
        left: 850,
    }

};

const LandingPageCategoyButtons = () => (
    <div>
        <RaisedButton label="Algorithms" primary={true} style={style.algorithms} />
        <br />
        <RaisedButton label="System Design" primary={true} style={style.systemDesign} />
        <br />
        <RaisedButton label="Front End" primary={true} style={style.frontEnd} />
        <br />
        <RaisedButton label="Back End" primary={true} style={style.backEnd} />
    </div>
);

export default LandingPageCategoyButtons;