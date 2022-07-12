export const validationSchema = {
  name(value: string): [] | string {
    return required(value);
  },
  message(value: string): [] | string {
    return required(value);
  },
  number(value: string): [] | string {
    return required(value, "Invalid number");
  },
};

const required = (value: string, msg?: string): [] | string =>
  value ? [] : msg || "Required field";
