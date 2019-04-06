import React from "react";
import { Link } from "react-router-dom";

const FormActions = ({ backPath, pristine, submitting }) => {
  return (
    <div className="ui right floated buttons" style={{ marginTop: "10px" }}>
      <button className="ui button green" disabled={pristine || submitting}>
        <i className="save icon" /> Salvar
      </button>
      <div className="or" data-text="ou" />
      <Link to={backPath} className="ui button">
        <i className="redo icon" /> Voltar
      </Link>
    </div>
  );
};

export default FormActions;
