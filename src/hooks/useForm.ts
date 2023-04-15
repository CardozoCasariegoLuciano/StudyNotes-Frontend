import { ChangeEvent, useState } from "react";
import { FormValidator } from "../helpers/Validators/FormValidators";
import { IFormValidateData, IFormState } from "../interfaces/Forms.interface";
import { IFormValidationsErrors } from "../interfaces/Validator.interface";

const initialErrors = (form: IFormState) => {
  const result: IFormValidationsErrors = {};

  const formKeys = Object.keys(form);
  formKeys.forEach((name) => {
    result[name] = {};
  });

  return result;
};

export const useForm = <T extends IFormState>(
  initialForm: T,
  validations?: IFormValidateData,
  customMessagges?: IFormValidationsErrors
) => {
  const [formState, setFormState] = useState<T>(initialForm);
  const [formErrors, setFormErrors] = useState<IFormValidationsErrors>(
    initialErrors(formState)
  );
  const [_, setForceChange] = useState(false);

  const onInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });

    if (value.length <= 0) {
      setFormErrors((actual) => ({ ...actual, [name]: {} }));
    } else {
      const optional = validations && formState[validations![name]?.equalTo!];
      setFormErrors(
        FormValidator(
          formErrors,
          name,
          value,
          validations!,
          optional,
          customMessagges
        )
      );
    }
  };

  const onBlur = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    const optional = validations && formState[validations[name]?.equalTo!];
    onInputChange(event);
    setFormErrors(
      FormValidator(
        formErrors,
        name,
        value,
        validations!,
        optional,
        customMessagges
      )
    );
  };

  const hasErrors = (): boolean => {
    let result = false;
    const formErrorsNames = Object.keys(formErrors);

    formErrorsNames.forEach((name) => {
      const value = Object.keys(formErrors[name]);
      if (value.length > 0) result = true;
    });

    return result;
  };

  const _findFormErrors = () => {
    const formStateNames = Object.keys(formState);

    formStateNames.forEach((name) => {
      {/* TODO: Ver como manejar eso del equalTo, esta raro asi dom 09 abr 2023 12:54:52  */}
      const optional = validations && formState[validations![name]?.equalTo!];
      const value = formState[name];
      setFormErrors(
        FormValidator(
          formErrors,
          name,
          value,
          validations!,
          optional,
          customMessagges
        )
      );
    });
  };

  const checkFormErrors = (ev: ChangeEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setForceChange((actual) => !actual);
    _findFormErrors();
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const onCleanInput = (name: string) => {
    setFormState((actual) => ({ ...actual, [name]: "" }));
    setFormErrors((actual) => ({ ...actual, [name]: {} }));
  };

  return {
    checkFormErrors,
    ...formState,
    formState,
    formErrors,
    hasErrors,
    onInputChange,
    onBlur,
    onResetForm,
    onCleanInput,
  };
};
