import InputComponent from "components/global/Input/InputComponent";
import Typography from "components/global/Typography/Typography";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type UserFormData = {
  fullName: string;
  email: string;
  password: string;
  repeatPassword: string;
};

type UserFormProps = UserFormData & {
  updateFields: (fields: Partial<UserFormData>) => void;
};

const schema = yup.object({
  fullName: yup.string().required("Nazwa organizacji jest wymagana"),
  email: yup.string().required("Nazwa ulicy jest wymagana"),
  password: yup.string().required("Kod pocztowy jest wymagany"),
  repeatPassword: yup.string().required("Miasto jest wymagane"),
});

const RegisterUser = ({
  fullName,
  email,
  password,
  repeatPassword,
  updateFields,
}: UserFormProps) => {
  const {
    setError,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    resolver: yupResolver(schema),
  });
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
        {...register("fullName")}
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
        {...register("email")}
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
        {...register("password")}
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
        {...register("repeatPassword")}
        onChange={(e) => updateFields({ repeatPassword: e.target.value })}
      />
    </>
  );
};

export default RegisterUser;
