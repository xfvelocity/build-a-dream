export const validationSchema = {
  email(value: string): [] | string {
    const isValid: boolean = !!value
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

    return isValid ? [] : "Invalid email";
  },
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
