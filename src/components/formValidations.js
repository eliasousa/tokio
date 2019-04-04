export const required = value =>
  value || typeof value === "number" ? undefined : "campo obrigatório";
export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "e-mail invalido"
    : undefined;
export const number = value =>
  value && isNaN(Number(value)) ? "deve ser um número" : undefined;
