import { useState, useCallback } from "react";
import RegisterShelter from "./RegisterShelter";
import RegisterUser from "./RegisterUser";
import axios from "axios";
import RegisterSuccess from "./RegisterSuccess";

const defaultMultiFormValues = {
  shelter: {
    organizationName: "",
    street: "",
    postalCode: "xx-xxx",
    city: "",
    nip: "",
    krs: "",
  },
  user: {
    fullName: "",
    email: "",
    password: "",
    repeatPassword: "",
  },
};

export type defaultMultiFormValuesTypes = typeof defaultMultiFormValues;

export const RegisterForm = () => {
  const [multiFormValues, setMultiFormValues] =
    useState<defaultMultiFormValuesTypes>(defaultMultiFormValues);

  const [isSuccess, setIsSuccess] = useState(false);
  const [step, setStep] = useState(1);

  const nextStepHandler = () => {
    setStep((prevState) => prevState + 1);
  };

  const prevStepHandler = () => {
    setStep((prevState) => prevState - 1);
  };

  const onFinalSubmit = () => {
    sendFormData();
  };

  const handleMultiFormValues = useCallback(
    (values: Partial<defaultMultiFormValuesTypes>) => {
      setMultiFormValues({
        ...multiFormValues,
        ...values,
      });
    },
    [multiFormValues]
  );

  const sendFormData = useCallback(async () => {
    try {
      const response = await axios.post("/Auth/shelterRegister", {
        multiFormValues,
      });

      if (response.status === 200) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.log(error);
    }
  }, [multiFormValues]);

  if (isSuccess) {
    return <RegisterSuccess />;
  }

  return (
    <>
      {step === 1 ? (
        <RegisterShelter
          onNextStep={nextStepHandler}
          onMultiFormSubmit={handleMultiFormValues}
        />
      ) : (
        <RegisterUser
          onPrevStep={prevStepHandler}
          onMultiFormSubmit={handleMultiFormValues}
          onFinalSubmit={onFinalSubmit}
        />
      )}
    </>
  );
};
