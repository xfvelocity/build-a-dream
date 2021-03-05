import { extend } from "vee-validate";
import { required, min, email, integer } from "vee-validate/dist/rules.umd.js";

extend("min", {
  ...min,
  message: "Invalid number",
});
extend("email", {
  ...email,
  message: "Invalid email",
});
extend("integer", {
  ...integer,
  message: "Invalid number",
});
extend("required", {
  ...required,
  message: "This field is required",
});
