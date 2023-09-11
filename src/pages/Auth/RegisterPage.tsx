import Logo from '../../components/Logo/Logo';
import { Link, useNavigate } from 'react-router-dom';
import { ChangeEvent } from 'react';
import { useShowAlert } from '../../hooks/useShowAlert';
import useAuth from '../../hooks/useAuth';
import styles from './authStyles.module.scss';
import { useForm } from 'lcc-react-form';
import { Button, SimpleInput } from 'lcc-components-magui';

const RegisterPage = () => {
  const { showAlert, showModal } = useShowAlert();
  const { register } = useAuth();
  const navigate = useNavigate();
  const form = useForm(
    {
      name: '',
      email: '',
      password: '',
      confirmation: '',
    },
    {
      name: { required: true },
      email: { required: true, email: true },
      password: { required: true, min: 5, max: 30 },
      confirmation: { required: true, equalTo: 'password' },
    },
  );

  const submit = async (eve: ChangeEvent<HTMLFormElement>) => {
    form.checkFormErrors(eve);
    if (form.hasErrors()) return;

    const error = await register(form.formState);
    if (!error) {
      form.onResetForm();
      navigate('/');
    } else {
      showModal(error.message);
    }
  };

  return (
    <div className={styles.auth}>
      <div className={styles.auth__container}>
        <Logo margin="20px 0px 50px 0px" />
        <form className={styles.auth__form} onSubmit={submit}>
          <div className={styles.auth_inputs}>
            <SimpleInput
              type="text"
              name="name"
              label="Name"
              icon="user"
              value={form.name}
              onChange={form.onInputChange}
              onBlur={form.onBlur}
              errorMessage={form.formErrors.name}
              cleanInput={() => form.onCleanInput('name')}
            />

            <SimpleInput
              type="text"
              name="email"
              label="Email"
              icon="email"
              value={form.email}
              onChange={form.onInputChange}
              onBlur={form.onBlur}
              errorMessage={form.formErrors.email}
              cleanInput={() => form.onCleanInput('email')}
            />

            <SimpleInput
              type="password"
              name="password"
              label="Password"
              icon="lock"
              value={form.password}
              onChange={form.onInputChange}
              onBlur={form.onBlur}
              errorMessage={form.formErrors.password}
              cleanInput={() => form.onCleanInput('password')}
            />

            <SimpleInput
              type="password"
              name="confirmation"
              label="Repeat password"
              icon="lock"
              value={form.confirmation}
              onChange={form.onInputChange}
              onBlur={form.onBlur}
              errorMessage={form.formErrors.confirmation}
              cleanInput={() => form.onCleanInput('confirmation')}
            />
            {showAlert()}
          </div>
          <div className={styles.auth__actions}>
            <Button disabled={form.hasErrors()}>Sing up</Button>
            <Link to="/auth/login">Already have an account</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
