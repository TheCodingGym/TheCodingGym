import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import '../../css/Landing.css';

const style = {

    algorithms: {
        margin: 12,
        width: 300,
        height: 50,
        // display: 'inline-block',
        // float: 'right',
        position: 'relative',
        top: '160%',
        left: '70%',
    },
    systemDesign: {
        margin: 12,
        width: 300,
        height: 50,
        // display: 'inline-block',
        // float: 'right',
        position: 'relative',
        top: '160%',
        left: '70%',
    },
    frontEnd: {
        margin: 12,
        width: 300,
        height: 50,
        // display: 'inline-block',
        // float: 'right',
        position: 'relative',
        top: '160%',
        left: '70%',
    },
    backEnd: {
        margin: 12,
        width: 300,
        height: 50,
        // display: 'inline-block',
        // float: 'right',
        position: 'relative',
        top: '160%',
        left: '70%',
    }

};

const LandingPageCategoyButtons = () => (
    <div className='landing-page-buttons'>
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