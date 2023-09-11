import { Button, CheckBox, SimpleInput } from 'lcc-components-magui';
import { useForm } from 'lcc-react-form';
import { ChangeEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import useAuth from '../../hooks/useAuth';
import { useShowAlert } from '../../hooks/useShowAlert';
import styles from './authStyles.module.scss';

const LoginPage = () => {
  const { showAlert, showModal } = useShowAlert();
  const { login } = useAuth();
  const navigate = useNavigate();
  const form = useForm(
    {
      email: '',
      password: '',
      remember: false,
    },
    {
      email: { required: true, email: true },
      password: { required: true, min: 5, max: 30 },
    },
  );

  const submit = async (eve: ChangeEvent<HTMLFormElement>) => {
    form.checkFormErrors(eve);
    if (form.hasErrors()) return;

    const error = await login(form.formState);
    if (!error) {
      form.onResetForm();
      navigate('/');
    } else {
      showModal(error.message);
    }
  };

  return (
    <>
      <div className={styles.auth}>
        <div className={styles.auth__container}>
          <Logo margin="20px 0px 50px 0px" />
          <form className={styles.auth__form} onSubmit={submit}>
            <div className={styles.auth_inputs}>
              <SimpleInput
                type="text"
                label="Email"
                name="email"
                icon="email"
                value={form.email}
                onChange={form.onInputChange}
                onBlur={form.onBlur}
                errorMessage={form.formErrors.email}
                cleanInput={() => form.onCleanInput('email')}
              />

              <SimpleInput
                type="password"
                label="Password"
                name="password"
                icon="lock"
                value={form.password}
                onChange={form.onInputChange}
                onBlur={form.onBlur}
                errorMessage={form.formErrors.password}
                cleanInput={() => form.onCleanInput('email')}
              />

              <div className={styles.auth__remember}>
                <Link to="">Forgotten password</Link>
                <CheckBox
                  label="Remember me"
                  name="remember"
                  onChange={form.onCheckBoxChange}
                />
              </div>
              <div className={styles.auth_alertContainer}>{showAlert()}</div>
            </div>
            <div className={styles.auth__actions}>
              <Button disabled={form.hasErrors()}>Sing in</Button>
              <Link to="/auth/register">Don't have an account yet?</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
