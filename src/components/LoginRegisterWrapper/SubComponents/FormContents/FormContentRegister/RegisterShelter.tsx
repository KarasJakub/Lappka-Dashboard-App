import InputComponent from "components/global/Input/InputComponent";
import Typography from "components/global/Typography/Typography";

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

const RegisterShelter = ({
  organizationName,
  street,
  postalCode,
  city,
  nip,
  krs,
  updateFields,
}: ShelterFormProps) => {
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
      <Typography tag="p" variant="UIText13Med" margin="Medium">
        Kod pocztowy
      </Typography>
      <InputComponent
        variant="XLarge"
        placeholder="Wpisz"
        type="text"
        margin="Medium"
        value={postalCode}
        onChange={(e) => updateFields({ postalCode: e.target.value })}
      />
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
