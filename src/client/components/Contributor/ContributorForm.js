import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { createContribution } from './../../actions';

class ContributorForm extends Component {
  render() {
    const handleSubmit = this.props.handleSubmit;
    return (
      <div>hello</div>
      // <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
      //   <Field fieldTitle="Category:" name="categories" component={this.renderField} />
      //   <Field fieldTitle="Question:" name="question" component={this.renderField} />
      //   <Field fieldTitle="Answer:" name="answer" component={this.renderField} />
      //   <button type='submit' className='contributor-submit-btn'>
      // </form>
    );
  }
}
export default ContributorForm;
