import { ChangeEvent, useState } from "react";
import { FormValidator } from "../helpers/Validators/FormValidators";
import { IFormValidateData, IFormState } from "../interfaces/Forms.interface";
import { IFormValidationsErrors } from "../interfaces/Validator.interface";

export const useForm = <T extends IFormState>(
  initialForm: T,
  validations: IFormValidateData
) => {
  const [formState, setFormState] = useState<T>(initialForm);
  const [formErrors, setFormErrors] = useState<IFormValidationsErrors>({});

  const onInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onCheckErrors = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    onInputChange(event);
    setFormErrors(FormValidator(formErrors, validations, name, value));
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    formErrors,
    onInputChange,
    onCheckErrors,
    onResetForm,
  };
};
