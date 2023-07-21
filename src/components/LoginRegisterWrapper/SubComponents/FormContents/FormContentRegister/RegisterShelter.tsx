import InputComponent from "components/global/Input/InputComponent";
import Typography from "components/global/Typography/Typography";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import * as S from "./FormContentRegister.styled";

type ShelterFormData = {
  organizationName: string;
  street: string;
  postalCode: string;
  city: string;
  nip: string;
  krs: string;
};

type ShelterFormProps = ShelterFormData & {
  updateFields: (fields: Partial<ShelterFormData>) => void;
};

const schema = yup.object({
  organizationName: yup.string().required("Nazwa organizacji jest wymagana"),
  street: yup.string().required("Nazwa ulicy jest wymagana"),
  postalCode: yup.string().required("Kod pocztowy jest wymagany"),
  city: yup.string().required("Miasto jest wymagane"),
  nip: yup.string().required("NIP jest wymagany"),
  krs: yup.string().required("KRS jest wymagany"),
});

const RegisterShelter = ({
  organizationName,
  street,
  postalCode,
  city,
  nip,
  krs,
  updateFields,
}: ShelterFormProps) => {
  //   const {
  //     setError,
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm<Partial<ShelterFormData>>({
  //     defaultValues: {
  //       organizationName: "",
  //       street: "",
  //       postalCode: "",
  //       city: "",
  //       nip: "",
  //       krs: "",
  //     },
  //     resolver: yupResolver(schema),
  //   });

  return (
    <>
      <Typography tag="p" variant="UIText13Med" margin="Medium">
        Pełna nazwa Organizacji
      </Typography>
      <InputComponent
        variant="XLarge"
        placeholder="Wpisz"
        type="text"
        margin="Medium"
        value={organizationName}
        onChange={(e) => updateFields({ organizationName: e.target.value })}
      />
      <Typography tag="p" variant="UIText13Med" margin="Medium">
        Ulica
      </Typography>
      <InputComponent
        variant="XLarge"
        placeholder="Wpisz"
        type="text"
        margin="Medium"
        value={street}
        onChange={(e) => updateFields({ street: e.target.value })}
      />
      <S.PostalCodeCityWrapper>
        <S.InputTypographyVerticalWrapper style={{ maxWidth: "35%" }}>
          <Typography tag="p" variant="UIText13Med" margin="Medium">
            Kod pocztowy
          </Typography>
          <InputComponent
            variant="XLarge"
            placeholder="00-000"
            type="text"
            margin="Medium"
            value={postalCode}
            onChange={(e) => updateFields({ postalCode: e.target.value })}
          />
        </S.InputTypographyVerticalWrapper>
        <S.InputTypographyVerticalWrapper>
          <Typography tag="p" variant="UIText13Med" margin="Medium">
            Miasto
          </Typography>
          <InputComponent
            variant="XLarge"
            placeholder="Wpisz"
            type="text"
            margin="Medium"
            value={city}
            onChange={(e) => updateFields({ city: e.target.value })}
          />
        </S.InputTypographyVerticalWrapper>
      </S.PostalCodeCityWrapper>
      <Typography tag="p" variant="UIText13Med" margin="Medium">
        Numer NIP
      </Typography>
      <InputComponent
        variant="XLarge"
        placeholder="Wpisz"
        type="text"
        margin="Medium"
        value={nip}
        onChange={(e) => updateFields({ nip: e.target.value })}
      />
      <Typography tag="p" variant="UIText13Med" margin="Medium">
        Numer KRS
      </Typography>
      <InputComponent
        variant="XLarge"
        placeholder="Wpisz"
        type="text"
        margin="Medium"
        value={krs}
        onChange={(e) => updateFields({ krs: e.target.value })}
      />
    </>
  );
};

export default RegisterShelter;
