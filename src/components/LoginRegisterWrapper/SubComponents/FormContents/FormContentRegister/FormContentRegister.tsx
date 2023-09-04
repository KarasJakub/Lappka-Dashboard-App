import { useState, useCallback, useEffect } from "react"
import RegisterShelter from "./RegisterShelter"
import RegisterUser from "./RegisterUser"
import RegisterSuccess from "./RegisterSuccess"
import { productionClient } from "api/client"

const defaultMultiFormValues = {
  shelterRequest: {
    organizationName: "",
    longitude: 0,
    latitude: 0,
    city: "",
    street: "",
    zipCode: "",
    nip: "",
    krs: "",
    phoneNumber: "",
  },
  userRequest: {
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
    confirmPassword: "",
  },
}

export type defaultMultiFormValuesTypes = typeof defaultMultiFormValues

export const RegisterForm = () => {
  const [emailError, setEmailError] = useState("")
  const [multiFormValues, setMultiFormValues] =
    useState<defaultMultiFormValuesTypes>(defaultMultiFormValues)

  const [isSuccess, setIsSuccess] = useState(false)
  const [step, setStep] = useState(1)

  const nextStepHandler = () => {
    setStep((prevState) => prevState + 1)
  }

  const prevStepHandler = () => {
    setStep((prevState) => prevState - 1)
  }

  const handleMultiFormValues = (
    values: Partial<defaultMultiFormValuesTypes>
  ) => {
    setMultiFormValues({
      ...multiFormValues,
      ...values,
    })
  }

  const sendFormData = useCallback(async () => {
    try {
      await productionClient.post("Auth/shelterRegister", {
        ...multiFormValues,
      })
      setIsSuccess(true)
    } catch (error: any) {
      const { Code } = error.response.data
      if (Code === "invalid_email") {
        setEmailError("Użytkownik o podanym mailu już istnieje")
      }
    }
  }, [multiFormValues])

  const onFinalSubmit = useCallback(() => {
    sendFormData()
  }, [sendFormData])

  useEffect(() => {
    const isShelterRequestEmpty = Object.values(
      multiFormValues.shelterRequest
    ).some((value) => value === "")

    const isUserRequestEmpty = Object.values(multiFormValues.userRequest).some(
      (value) => value === ""
    )

    if (!isShelterRequestEmpty && !isUserRequestEmpty) {
      onFinalSubmit()
    }
  }, [multiFormValues, onFinalSubmit])

  if (isSuccess) {
    return <RegisterSuccess />
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
          emailError={emailError}
        />
      )}
    </>
  )
}
