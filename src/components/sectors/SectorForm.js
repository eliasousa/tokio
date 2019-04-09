import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

import { required } from "../formValidations";
import { renderInput } from "../formHelpers";
import FormActions from "../layout/FormActions";

class SectorForm extends Component {
  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name="name"
          component={renderInput}
          label="Nome"
          type="text"
          fieldWidth="sixteen"
          validate={[required]}
        />

        <FormActions
          backPath="/sectors"
          pristine={this.props.pristine}
          submitting={this.props.submitting}
        />
      </form>
    );
  }
}

export default reduxForm({
  form: "sectorForm"
})(SectorForm);
