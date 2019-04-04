export const formatToFormErrors = errors => {
  const formErrors = {};
  Object.entries(errors.response.data.errors).forEach(error => {
    formErrors[error[0]] = error[1].join(", ");
  });
  return formErrors;
};
