import Logo from "../../components/Logo/Logo";
import "./authStyles.scss";
import "../../styles.scss";
import { SimpleButton } from "../../components/StyledComponents/Button/SimpleButton";
import SimpleInput from "../../components/Input/SimpleInput/SimpleInput";
import { useForm } from "../../hooks/useForm";
import { ChangeEvent } from "react";

const RegisterPage = () => {
  const {
    onCheckErrors,
    onResetForm,
    formErrors,
    onInputChange,
    email,
    password,
  } = useForm(
    {
      email: "",
      password: "",
    },
    {
      email: { required: true, email: true },
      password: { required: true, min: 7, max: 30 },
    }
  );

  {
    /* TODO: extender el validator para que pueda tomar respuestas personalizadas dom 26 feb 2023 23:27:27  */
  }

  const onSubmit = (ev: ChangeEvent<HTMLFormElement>) => {
    ev.preventDefault();

    onResetForm();
  };

  return (
    <div className="auth">
      <Logo margin="0px 0px 70px 0px" />
      <form onSubmit={onSubmit}>
        <SimpleInput
          type="text"
          name="email"
          icon="user"
          value={email}
          onChange={onInputChange}
          onBlur={onCheckErrors}
          errorMessage={formErrors.email}
        />
        <SimpleInput
          type="password"
          name="password"
          icon="lock"
          value={password}
          onChange={onInputChange}
          onBlur={onCheckErrors}
          errorMessage={formErrors.password}
        />
        <SimpleButton>Sing In</SimpleButton>
        {/* TODO: marcar como disabled el boton si hay algun error con el formulario lun 27 feb 2023 00:08:46  */}
      </form>
    </div>
  );
};

export default RegisterPage;
