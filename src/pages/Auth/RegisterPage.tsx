import Logo from "../../components/Logo/Logo";
import "./authStyles.scss";
import "../../styles.scss";
import { SimpleButton } from "../../components/StyledComponents/Button/SimpleButton";
import SimpleInput from "../../components/Input/SimpleInput/SimpleInput";
import { useForm } from "../../hooks/useForm";

const RegisterPage = () => {
  const form = useForm(
    {
      email: "",
      password: "",
    },
    {
      email: { required: true, email: true },
      password: { required: true, min: 7, max: 30 },
    }
  );

  return (
    <div className="auth">
      <Logo margin="0px 0px 70px 0px" />
      <form onSubmit={form.onSubmit}>
        <SimpleInput
          type="text"
          name="email"
          icon="user"
          value={form.email}
          onChange={form.onInputChange}
          onBlur={form.onBlur}
          errorMessage={form.formErrors.email}
        />
        <SimpleInput
          type="password"
          name="password"
          icon="lock"
          value={form.password}
          onChange={form.onInputChange}
          onBlur={form.onBlur}
          errorMessage={form.formErrors.password}
        />
        <SimpleButton disabled={form.hasErrors()}>Sing In</SimpleButton>
      </form>
    </div>
  );
};

export default RegisterPage;
