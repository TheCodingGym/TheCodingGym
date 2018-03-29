// REACT
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// REDUX
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

// MATERIAL UI
import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

// FILES
import Category from '../Category/Category';
import './../../css/Contributor_Form.css';

// ACTION CREATOR
import { createContribution } from './../../actions';

class ContributorForm extends Component {
  renderRadioGroup({ input, ...rest }) {
    return (
      <div>
        <RadioButtonGroup
          {...input}
          {...rest}
          valueSelected={input.value}
          onChange={(event, value) => input.onChange(value)}
        />
      </div>
    );
  }

  renderField(field) {
    const classNameDanger = `form-group ${
      field.meta.touched && field.meta.error ? 'has-danger' : ''
    }`;
    return (
      <div className={classNameDanger}>
        <label>{field.fieldTitle}</label>
        <input type="text" {...field.input} placeholder="text" className="form-control" />
        <div className="text-help">
          {field.meta.touched ? field.meta.error : ''}
          {/* this .meta.error property is automatically added to that field object from our validate function */}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    //if reduxform(handleSubmit) says that everything is valid... then call onSubmit
    console.log('onSubmit values=== ', values);
    console.log('=== CREATECONTRIBUTION === ', this.props.createContribution);

    this.props.createContribution(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const handleSubmit = this.props.handleSubmit;

    const style = {
      display: 'flex',
      flexDirection: 'column',
      width: '100%'
    };

    return (
      <div className="contributor-form-container container">
        <div className="contributor-message">
          <label>Please Select a Category</label>
        </div>
        <form
          className="form-container"
          onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div className="radiobutton-container container">
            {/*
          ///////
          /// RADIOBUTTON LEFT
          ///////
          */}
            <div className="radiobutton-left container">
              <div className="radiobutton-algorithm">
                <label>Algorithm</label>
                <Field
                  fieldTitle="Category:"
                  name="category"
                  component={this.renderRadioGroup}>
                  <RadioButton value="Algorithm" label="Algorithm" />
                  <RadioButton value="Sort" label="Sort" />
                  <RadioButton value="Recursion" label="Recursion" />
                  <RadioButton
                    value="Asymptomatic Notation"
                    label="Asymptomatic Notation"
                  />
                  <RadioButton value="Data Structures" label="Data Structures" />
                </Field>
              </div>

              <div className="radiobutton-system-design">
                <label>System Design</label>
                <Field
                  fieldTitle="Category:"
                  name="category"
                  component={this.renderRadioGroup}>
                  <RadioButton value="System Design" label="System Design" />
                  <RadioButton value="Principles" label="Principles" />
                  <RadioButton
                    value="System Design Patterns"
                    label="System Design Patterns"
                  />
                  <RadioButton value="Scalability" label="Scalability" />
                  <RadioButton value="CAP Theorem" label="CAP Theorem" />
                </Field>
              </div>
            </div>

            {/*
          ///////
          /// RADIOBUTTON RIGHT
          ///////
          */}
            <div className="radiobutton-right container">
              <div className="radiobutton-front-end">
                <label>Front-End</label>
                <Field
                  fieldTitle="Category:"
                  name="category"
                  component={this.renderRadioGroup}>
                  <RadioButton value="Front End" label="Front End" />
                  <RadioButton value="ReactJS" label="ReactJS" />
                  <RadioButton value="Angular" label="Angular" />
                  <RadioButton value="Vue" label="Vue" />
                  <RadioButton value="Ember" label="Ember" />
                  <RadioButton value="Redux" label="Redux" />
                  <RadioButton value="jQuery" label="jQuery" />
                  <RadioButton value="JavaScript" label="JavaScript" />
                </Field>
              </div>

              <div className="radiobutton-back-end">
                <label>Back-End</label>
                <Field
                  fieldTitle="Category:"
                  name="category"
                  component={this.renderRadioGroup}>
                  <RadioButton value="Back End" label="Back End" />
                  <RadioButton value="Node/Express" label="Node/Express" />
                  <RadioButton value="PHP" label="PHP" />
                  <RadioButton value=".NET" label=".NET" />
                  <RadioButton value="Ruby on Rails" label="Ruby on Rails" />
                  <RadioButton value="Java" label="Java" />
                  <RadioButton value="SQL" label="SQL" />
                  <RadioButton value="NoSQL" label="NoSQL" />
                </Field>
              </div>
            </div>
          </div>

          <div style={style} className="question-answer-container container">
            <Field fieldTitle="Question:" name="question" component={this.renderField} />
            <Field fieldTitle="Answer:" name="answer" component={this.renderField} />
          </div>

          <div className="submit-back-btn-container container">
            <Link to="/" className="contributor-back-btn btn btn-danger">
              Back
            </Link>
            <button type="submit" className="contributor-submit-btn btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.category) {
    errors.category = 'Select a category';
  }
  if (!values.question) {
    errors.question = 'Enter a question';
  }
  if (!values.answer) {
    errors.answer = 'Enter an answer';
  }
  return errors;
}

export default reduxForm({
  validate: validate,
  form: 'CreateNewQuestion'
})(connect(null, { createContribution })(ContributorForm));
