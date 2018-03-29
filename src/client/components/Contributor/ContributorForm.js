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
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        {/* <label>Category:</label> */}
        <Field fieldTitle="Category:" name="category" component={this.renderRadioGroup}>
          <RadioButton value="Algorithm" label="Algorithm" />
          <RadioButton value="System Design" label="System Design" />
          <RadioButton value="Front End" label="Front End" />
          <RadioButton value="Back End" label="Back End" />
        </Field>
        {/* <Field fieldTitle="Category:" name="category" component={this.renderField} /> */}
        <Field fieldTitle="Question:" name="question" component={this.renderField} />
        <Field fieldTitle="Answer:" name="answer" component={this.renderField} />
        <button type="submit" className="contributor-submit-btn btn btn-primary">
          Submit
        </button>
        <Link to="/" className="contributor-back-btn btn btn-danger">
          Back
        </Link>
      </form>
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
