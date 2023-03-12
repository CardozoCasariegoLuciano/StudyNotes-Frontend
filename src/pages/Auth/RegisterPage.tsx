import Logo from "../../components/Logo/Logo";
import "./authStyles.scss";
import "../../styles.scss";
import { SimpleButton } from "../../components/StyledComponents/Button/SimpleButton";
import SimpleInput from "../../components/Input/SimpleInput/SimpleInput";
import { useForm } from "../../hooks/useForm";
import { Link } from "react-router-dom";
import { ChangeEvent } from "react";

const RegisterPage = () => {
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

  const submit = (eve: ChangeEvent<HTMLFormElement>) => {
    form.onSubmit(eve);
  };

  {/* TODO: Haver la vista para tablet y escritorio dom 12 mar 2023 14:17:21  */}
  {/* TODO: Conectar con el backend dom 12 mar 2023 14:17:35  */}

  return (
    <div className="auth">
      <Logo margin="0px 0px 50px 0px" />
      <form onSubmit={submit}>
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
        <div className="auth__actions">
          <SimpleButton disabled={form.hasErrors()}>Sing In</SimpleButton>
          <Link to="/auth/login">Have an account yet?</Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
