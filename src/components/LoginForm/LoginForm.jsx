import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import s from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(login(values));

    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={s.form}>
        <label className={s.label}>
          <span>Email</span>
          <Field name="email"></Field>
        </label>
        <label className={s.label}>
          <span>Password</span>
          <Field name="password"></Field>
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
