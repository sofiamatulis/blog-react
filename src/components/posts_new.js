import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

// reduxForm is a function --> similar to the connect helper
// helper from the reducer

class PostsNew extends Component {
  renderField(field) {
    const { meta : {touched, error} } = field; // because then you dont need field.meta.touched // also destructuring touched and error
    const className = `form-group ${touched && error ? 'has-danger' : ''}`
    return (
      <div className={className}>
        <label> {field.label} </label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  // name is what connects to the validation function

  // ...field.input --> on change and on blur, on focus etc. by doing the ..., we want the object and all the things be commuunicated as props
  // instead of writing onChange={field.input.onChange} and so on

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;
    // reference this props its being passed on behalf of redux form
    // passing onSubmit as a callback function (binding it to make sure we have access to the right this)
    // redux form will run, if things are ok then it calls the function we defined!
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
        label="Title"
        name="title"
        component={this.renderField}
        />
        <Field
        label="Categories"
        name="categories"
        component={this.renderField}
        />
        <Field
        label="Post content"
        name="content"
        component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link className="btn btn-danger" to="/">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  // console.log(values) --> {title: 'egdg', categories: 'fwfw' etc}
  const errors = {};
  // validate the inputs from 'values'
  if (!values.title) {
    errors.title ="Enter a title!";
  }
  if (!values.categories) {
    errors.categories="Enter some categories!";
  }
  if (!values.content) {
    errors.content="Enter some content";
  }

  return errors;
  // empty object , it means no errors and form is ok to submit
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
  // unique string if you want to have more than one form! -- will handle different forms correctly
})(
  connect (null, { createPost }) (PostsNew)
);

// connect directly to the reducer

//options request-- safety

// component field is what keeps the data and will show whats coming from the reducer
// redux form handles the state of the form! it doesnt take care of posting
