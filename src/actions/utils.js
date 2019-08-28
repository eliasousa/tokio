export const formatToFormErrors = errors => {
  const formErrors = {};
  Object.entries(errors.response.data.errors).forEach(error => {
    formErrors[error[0]] = error[1].join(", ");
  });
  return formErrors;
};

export const formatDatetime = date => {
  return new Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }).format(new Date(date));
};

export const formatCurrency = value => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(value);
};
