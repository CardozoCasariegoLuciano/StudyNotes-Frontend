import { ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import SimpleCheckBox from "../../components/FormsElements/CheckBox/SimpleCheckBox";
import SimpleInput from "../../components/FormsElements/Input/SimpleInput";
import Logo from "../../components/Logo/Logo";
import { SimpleButton } from "../../components/StyledComponents/Button/SimpleButton";
import { useForm } from "../../hooks/useForm";
import useLogin from "../../hooks/useLogin";
import { useShowAlert } from "../../hooks/useShowAlert";

const LoginPage = () => {
  const { showAlert, showModal } = useShowAlert();
  const { login } = useLogin();
  const navigate = useNavigate();
  const form = useForm(
    {
      email: "",
      password: "",
    },
    {
      email: { required: true, email: true },
      password: { required: true, min: 5, max: 30 },
    }
  );

  const submit = async (eve: ChangeEvent<HTMLFormElement>) => {
    form.checkFormErrors(eve);
    if (form.hasErrors()) return;

    const error = await login(form.formState);
    if (!error) {
      form.onResetForm();
      navigate("/home");
    } else {
      showModal(error.message);
    }
  };
  return (
    <>
      <div className="auth">
        <div className="auth__container">
          <Logo margin="20px 0px 50px 0px" />
          <form className="login_form" onSubmit={submit}>
            <div className="auth_inputs">
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
              <div className="auth_alertContainer">{showAlert()}</div>
            </div>
            <div className="auth-login__actions">
              <div className="auth-login__actions--buttons">
                <SimpleButton disabled={form.hasErrors()}>Login</SimpleButton>
                <SimpleCheckBox label="Remember me" />
              </div>
              <div className="auth-login__actions--links">
                <Link to="/auth/register">Don't have an account yet?</Link>
                <Link to="/auth/register">Have you forgot your password?</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
