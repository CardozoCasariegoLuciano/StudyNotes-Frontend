import { ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import SimpleCheckBox from "../../components/FormsElements/CheckBox/SimpleCheckBox";
import SimpleInput from "../../components/FormsElements/Input/SimpleInput";
import Logo from "../../components/Logo/Logo";
import { SimpleButton } from "../../components/StyledComponents/Button/SimpleButton";
import useAuth from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import { useShowAlert } from "../../hooks/useShowAlert";

const LoginPage = () => {
  const { showAlert, showModal } = useShowAlert();
  const { login } = useAuth();
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
          <form className="auth__form" onSubmit={submit}>
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

              <div className="auth__remember">
                <Link to="">Forgotten password</Link>
                <SimpleCheckBox label="Remember me" />
              </div>
              <div className="auth_alertContainer">{showAlert()}</div>
            </div>
            <div className="auth__actions">
              <SimpleButton disabled={form.hasErrors()}>Sing in</SimpleButton>
              <Link to="/auth/register">Don't have an account yet?</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
