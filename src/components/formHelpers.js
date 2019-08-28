import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import br from "date-fns/locale/pt-BR";
registerLocale("br", br);

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

export const renderDatePicker = ({ input: { onChange, value } }) => (
  <DatePicker
    onChange={onChange}
    dateFormat="dd/MM/yyyy"
    locale="br"
    selected={!value ? null : new Date(value)}
    isClearable
  />
);
