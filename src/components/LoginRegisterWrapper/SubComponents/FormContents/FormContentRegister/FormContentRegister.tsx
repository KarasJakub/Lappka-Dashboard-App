import { useState, useCallback, useEffect } from "react"
import RegisterShelter from "./RegisterShelter"
import RegisterUser from "./RegisterUser"
import axios from "axios"
import RegisterSuccess from "./RegisterSuccess"
import { productionClient } from "api/client"

const defaultMultiFormValues = {
  shelter: {
    organizationName: "",
    street: "",
    postalCode: "",
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
}

export type defaultMultiFormValuesTypes = typeof defaultMultiFormValues

export const RegisterForm = () => {
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

  // const onFinalSubmit = () => {
  //   sendFormData()
  // }

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
      const response = await productionClient.post("Auth/shelterRegister", {
        ...multiFormValues,
      })

      if (response.status === 200) {
        setIsSuccess(true)
      }
    } catch (error) {
      console.log(error)
    }
  }, [multiFormValues])

  const onFinalSubmit = useCallback(() => {
    sendFormData()
  }, [sendFormData])

  useEffect(() => {
    const isShelterRequestEmpty = Object.values(multiFormValues.shelter).some(
      (value) => value === ""
    )

    const isUserRequestEmpty = Object.values(multiFormValues.user).some(
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
        />
      )}
    </>
  )
}
