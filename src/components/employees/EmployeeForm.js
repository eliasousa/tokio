import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

import { required, email } from "../formValidations";
import { renderInput } from "../formHelpers";
import FormActions from "../layout/FormActions";
import SectorsSelect from "./SectorsSelect";

class EmployeeForm extends Component {
  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <div className="fields">
          <Field
            name="name"
            component={renderInput}
            label="Nome"
            type="text"
            fieldWidth="ten"
            validate={[required]}
          />
          <Field
            name="internal_id"
            component={renderInput}
            label="Matricula"
            type="text"
            fieldWidth="six"
          />
        </div>
        <div className="fields">
          <Field
            name="email"
            component={renderInput}
            label="E-mail"
            type="email"
            fieldWidth="ten"
            validate={[required, email]}
          />
          <div className="six wide field">
            <SectorsSelect />
          </div>
        </div>
        <div className="fields">
          <Field
            name="encrypted_password"
            component={renderInput}
            label="Senha"
            type="text"
            fieldWidth="ten"
            validate={this.props.validatePassword && required}
          />
          <div className="six wide field">
            <label>Status</label>
            <Field name="active" className="ui dropdown" component="select">
              <option value="true">Ativo</option>
              <option value="false">Inativo</option>
            </Field>
          </div>
        </div>
        <FormActions
          backPath="/employees"
          pristine={this.props.pristine}
          submitting={this.props.submitting}
        />
      </form>
    );
  }
}

export default reduxForm({
  form: "employeeForm"
})(EmployeeForm);
