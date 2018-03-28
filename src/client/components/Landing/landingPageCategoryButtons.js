import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import '../../css/Landing.css';
import CategoryList from '../Category/CategoryList'
import { Link } from 'react-router-dom';

const style = {

    algorithm: {
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

class LandingPageCategoryButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: '',
            results: ''
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        let category = e.currentTarget.value;
        console.log(category);
        axios({
            method: 'post',
            url:'api/questions/',
            data: { category }
        })
        .then(res => {
            this.setState({ 
                category: category,
                results: res.data.results
            });
            console.log('this is the data sent back from post', res.data.results); //check back here, why di dthis not console
        })
    }
    // componentDidMount() {
    //     /////////
    // }
    render() {
        const { category, results } = this.state;
        return (
            <div>
            <div id="categoryContainer">
            <Link to = "/category" params= {{category: "category"}}>
                <RaisedButton label="Algorithm" value="Algorithm" primary={true} style={style.algorithm} onClick={this.handleClick} />
                </Link>
                <br />
                <RaisedButton label="System Design" value="System Design" primary={true} style={style.systemDesign} onClick={this.handleClick} />
                <br />
                <RaisedButton label="Front End" value="Front End" primary={true} style={style.frontEnd} onClick={this.handleClick} />
                <br />
                <RaisedButton label="Back End" value="Back End" primary={true} style={style.backEnd} onClick={this.handleClick} />
            </div>
            <div id="categoryList">
                <CategoryList category={category} results={results} />
            </div>
            </div>
        )
    }
}


export default LandingPageCategoryButtons;