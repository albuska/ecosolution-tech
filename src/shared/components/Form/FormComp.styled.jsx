import { styled } from "styled-components";
import { Field, Form, ErrorMessage } from "formik";

export const FormStyle = styled(Form)`
  margin-top: 36px;
  padding: 36px 12px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondBackgroundColor};
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin-bottom: 8px;

  &:not(:first-child) {
    margin-top: 28px;
  }
`;

export const Input = styled(Field)`
  font-size: ${({ theme }) => theme.fontSizes.ml};
  letter-spacing: -0.72px;
  border-color: transparent;
  border-bottom-color: ${({ theme }) => theme.colors.accentColor};
  background-color: transparent;

  &:focus {
    outline: 2px solid #173d33;
  }

  &::placeholder {
    color: #bdbdbd;
  }
`;

export const ErrorMessageStyle = styled(ErrorMessage)`
  margin-left: auto;
  color: ${({ theme }) => theme.colors.errorColor};
  margin-top: 8px;

  &.input {
    border-bottom-color: red;  
  }
`;

