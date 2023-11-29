import { Formik } from "formik";
import * as Yup from "yup";
import {
  FormStyle,
  Label,
  Input,
  ErrorMessageStyle,
} from "./FormComp.styled";
import { Button } from "../Button/Button";

const schema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string().required("Required"),
  message: Yup.string(),
});

const getStyles = (error) => {
  if (error) {
    return {
      borderBottomColor: '#D28B8B',
    };
  }
  return {};
};

export const FormComp = () => {
  return (
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          phone: "",
          message: "",
        }}
        validationSchema={schema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {(formProps) => (
          <FormStyle>
              <Label htmlFor="fullName">* Full name:</Label>
              <Input
                id="fullName"
                name="fullName"
                placeholder="John Rosie"
                required
                style={getStyles(formProps.errors.fullName)}
              />
              <ErrorMessageStyle name="fullName" component="div" />

              <Label htmlFor="email">* E-mail:</Label>
              <Input
                id="email"
                name="email"
                placeholder="johnrosie@gmail.com"
                type="email"
                required
                style={getStyles(formProps.errors.email)}
              />
              <ErrorMessageStyle name="email" component="div" />

              <Label htmlFor="phone">* Phone:</Label>
              <Input
                id="phone"
                name="phone"
                placeholder="380961234567"
                type="phone"
                required
                style={getStyles(formProps.errors.phone)}
              />
              <ErrorMessageStyle name="phone" component="div" />

            <Label htmlFor="message">Message:</Label>
            <Input
              as="textarea"
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Your message"
            />
            <ErrorMessageStyle name="message" component="div" />
            <Button
              text="Send"
              marginTop={16}
              marginLeft="auto"
              type="submit"
              width={99}
            />
          </FormStyle>
        )}
      </Formik>
  );
};


