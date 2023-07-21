import InputComponent from "components/global/Input/InputComponent";
import Typography from "components/global/Typography/Typography";

type UserFormData = {
  fullName: string;
  email: string;
  password: string;
  repeatPassword: string;
};

type UserFormProps = UserFormData & {
  updateFields: (fields: Partial<UserFormData>) => void;
};

const RegisterUser = ({
  fullName,
  email,
  password,
  repeatPassword,
  updateFields,
}: UserFormProps) => {
  return (
    <>
      <Typography tag="p" variant="UIText13Med" margin="Medium">
        Imie i Nazwisko
      </Typography>
      <InputComponent
        variant="XLarge"
        placeholder="Wpisz"
        type="text"
        margin="Medium"
        value={fullName}
        onChange={(e) => updateFields({ fullName: e.target.value })}
      />
      <Typography tag="p" variant="UIText13Med" margin="Medium">
        Adres e-mail
      </Typography>
      <InputComponent
        variant="XLarge"
        placeholder="Wpisz"
        type="text"
        margin="Medium"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <Typography tag="p" variant="UIText13Med" margin="Medium">
        Hasło
      </Typography>
      <InputComponent
        variant="XLarge"
        placeholder="Wpisz"
        type="password"
        margin="Medium"
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
      <Typography tag="p" variant="UIText13Med" margin="Medium">
        Powtórz hasło
      </Typography>
      <InputComponent
        variant="XLarge"
        placeholder="Wpisz"
        type="password"
        margin="Medium"
        value={repeatPassword}
        onChange={(e) => updateFields({ repeatPassword: e.target.value })}
      />
    </>
  );
};

export default RegisterUser;
