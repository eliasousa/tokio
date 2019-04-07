import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

import { required, email } from "../formValidations";
import { phoneMask, cnpjMask } from "../formMasks";
import { renderInput } from "../formHelpers";
import FormActions from "../layout/FormActions";

class CompanyForm extends Component {
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
            name="cnpj"
            component={renderInput}
            label="CNPJ"
            type="text"
            fieldWidth="six"
            validate={[required]}
            {...cnpjMask}
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
          <Field
            name="phone"
            component={renderInput}
            label="Telefone"
            type="tel"
            fieldWidth="six"
            {...phoneMask}
          />
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
          backPath="/companies"
          pristine={this.props.pristine}
          submitting={this.props.submitting}
        />
      </form>
    );
  }
}

export default reduxForm({
  form: "companyForm"
})(CompanyForm);
