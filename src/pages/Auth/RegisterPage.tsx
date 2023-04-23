import Logo from "../../components/Logo/Logo";
import "./authStyles.scss";
import "../../styles.scss";
import { SimpleButton } from "../../components/StyledComponents/Button/SimpleButton";
import { useForm } from "../../hooks/useForm";
import { Link, useNavigate } from "react-router-dom";
import { ChangeEvent } from "react";
import { useShowAlert } from "../../hooks/useShowAlert";
import SimpleInput from "../../components/FormsElements/Input/SimpleInput";
import useAuth from "../../hooks/useAuth";

const RegisterPage = () => {
  const { showAlert, showModal } = useShowAlert();
  const { register } = useAuth();
  const navigate = useNavigate();
  const form = useForm(
    {
      name: "",
      email: "",
      password: "",
      confirmation: "",
    },
    {
      name: { required: true },
      email: { required: true, email: true },
      password: { required: true, min: 5, max: 30 },
      confirmation: { required: true, equalTo: "password" },
    }
  );

  const submit = async (eve: ChangeEvent<HTMLFormElement>) => {
    form.checkFormErrors(eve);
    if (form.hasErrors()) return;

    const error = await register(form.formState);
    if (!error) {
      form.onResetForm();
      navigate("/home");
    } else {
      showModal(error.message);
    }
  };

  return (
    <div className="auth">
      <div className="auth__container">
        <Logo margin="20px 0px 50px 0px" />
        <form className="register_form" onSubmit={submit}>
          <div className="auth_inputs">
            <SimpleInput
              type="text"
              name="name"
              icon="user"
              value={form.name}
              onChange={form.onInputChange}
              onBlur={form.onBlur}
              errorMessage={form.formErrors.name}
              onCleanInput={form.onCleanInput}
            />

            <SimpleInput
              type="text"
              name="email"
              icon="email"
              value={form.email}
              onChange={form.onInputChange}
              onBlur={form.onBlur}
              errorMessage={form.formErrors.email}
              onCleanInput={form.onCleanInput}
            />

            <SimpleInput
              type="password"
              name="password"
              icon="lock"
              value={form.password}
              onChange={form.onInputChange}
              onBlur={form.onBlur}
              errorMessage={form.formErrors.password}
              onCleanInput={form.onCleanInput}
            />

            <SimpleInput
              type="password"
              name="confirmation"
              icon="lock"
              value={form.confirmation}
              onChange={form.onInputChange}
              onBlur={form.onBlur}
              errorMessage={form.formErrors.confirmation}
              onCleanInput={form.onCleanInput}
            />
            {showAlert()}
          </div>
          <div className="auth-register__actions">
            <SimpleButton disabled={form.hasErrors()}>Sing In</SimpleButton>
            <Link to="/auth/login">Have an account yet?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
