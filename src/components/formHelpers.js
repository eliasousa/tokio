import React from "react";

export const renderInput = ({
  input,
  label,
  type,
  fieldWidth,
  meta: { touched, error }
}) => {
  return (
    <div
      className={`${fieldWidth} wide field ${touched && (error && "error")}`}
    >
      <label>{label}</label>
      <input {...input} autoComplete="off" placeholder={label} type={type} />
      {touched && (error && <span style={{ color: "#9f3a38" }}>{error}</span>)}
    </div>
  );
};
