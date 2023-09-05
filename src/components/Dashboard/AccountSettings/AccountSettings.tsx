import * as S from "./AccountSettings.styled"
import CardFooter from "components/global/CardFooter/CardFooter"
import ButtonComponent from "components/global/Button/ButtonComponent.styled"
import Typography from "components/global/Typography/Typography"
import theme from "layout/theme"
import ROUTES from "helpers/utils/routes"
import { useNavigate } from "react-router-dom"
import InputComponent from "components/global/Input/InputComponent"
import AccountSettingDummyPhoto from "assets/photos/AccountSettingDummyPhoto.png"
import { ReactComponent as RemoveUserIcon } from "assets/icons/RemoveUserIcon.svg"

const AccountSettingsPage = () => {
  const navigate = useNavigate()
  return (
    <S.AccountSettingsRootWrapper>
      <S.AccountSettingsComponent>
        <S.InnerWrapper>
          <div style={{ marginBottom: "1.6rem" }}>
            <Typography tag="h6" variant="Heading18SemiBold">
              Ustawienia organizacji
            </Typography>
          </div>
          <Typography tag="p" variant="UIText13Med" margin="Medium">
            Pełna nazwa organizacji
          </Typography>
          <InputComponent
            variant="XLarge"
            placeholder="Wpisz"
            type="text"
            margin="Medium"
            // {...register("email")}
            // error={errors.email?.message}
          />
          <Typography tag="p" variant="UIText13Med" margin="Medium">
            Ulica
          </Typography>
          <InputComponent
            variant="XLarge"
            placeholder="Wpisz"
            type="text"
            margin="Medium"
            // {...register("email")}
            // error={errors.email?.message}
          />
          <S.InputsWrapper>
            <div>
              <Typography tag="p" variant="UIText13Med" margin="Medium">
                Kod pocztowy
              </Typography>
              <InputComponent
                variant="XLarge"
                placeholder="00-000"
                type="text"
                margin="Medium"
                // {...register("email")}
                // error={errors.email?.message}
              />
            </div>
            <div>
              <Typography tag="p" variant="UIText13Med" margin="Medium">
                Miasto
              </Typography>
              <InputComponent
                variant="XLarge"
                placeholder="Wpisz"
                type="text"
                margin="Medium"
                // {...register("email")}
                // error={errors.email?.message}
              />
            </div>
          </S.InputsWrapper>
          <Typography tag="p" variant="UIText13Med" margin="Medium">
            Numer NIP
          </Typography>
          <InputComponent
            variant="XLarge"
            placeholder="Wpisz"
            type="text"
            margin="Medium"
            // {...register("email")}
            // error={errors.email?.message}
          />
          <Typography tag="p" variant="UIText13Med" margin="Medium">
            Numer KRS
          </Typography>
          <InputComponent
            variant="XLarge"
            placeholder="Wpisz"
            type="text"
            margin="Medium"
            // {...register("email")}
            // error={errors.email?.message}
          />

          <Typography tag="h6" variant="Heading18SemiBold">
            Ustawienia użytkownika
          </Typography>
          <S.UserPhotoWrapper>
            <img src={AccountSettingDummyPhoto} alt="Logo schroniska" />
            <ButtonComponent
              className="secondary"
              size="Medium"
              maxWidth="8rem"
            >
              <Typography
                tag="p"
                variant="UIText16MediumButton"
                color={theme.colors.black}
              >
                Edytuj
              </Typography>
            </ButtonComponent>
          </S.UserPhotoWrapper>
          <Typography tag="p" variant="UIText13Med" margin="Medium">
            Imię i nazwisko
          </Typography>
          <InputComponent
            variant="XLarge"
            placeholder="Wpisz"
            type="text"
            margin="Medium"
            // {...register("email")}
            // error={errors.email?.message}
          />
          <Typography tag="p" variant="UIText13Med" margin="Medium">
            Adres e-mail
          </Typography>
          <InputComponent
            variant="XLarge"
            placeholder="Wpisz"
            type="text"
            margin="Medium"
            // {...register("email")}
            // error={errors.email?.message}
          />
          <Typography tag="p" variant="UIText13Med" margin="Medium">
            Hasło
          </Typography>
          <InputComponent
            variant="XLarge"
            placeholder="Wpisz"
            type="password"
            margin="Medium"
            // {...register("email")}
            // error={errors.email?.message}
          />
          <ButtonComponent className="delete" size="Large" maxWidth="17.6rem">
            <Typography
              tag="p"
              variant="UIText16MediumButton"
              color={theme.colors.white}
            >
              Delete account
            </Typography>
            <RemoveUserIcon />
          </ButtonComponent>
        </S.InnerWrapper>
        <CardFooter>
          <ButtonComponent
            className="secondary"
            size="Large"
            maxWidth="8rem"
            onClick={() => navigate(ROUTES.workers)}
          >
            <Typography
              tag="p"
              variant="UIText16MediumButton"
              color={theme.colors.black}
            >
              Anuluj
            </Typography>
          </ButtonComponent>
          <ButtonComponent
            className="primary"
            size="Large"
            maxWidth="8rem"
            type="submit"
            // onClick={methods.handleSubmit(onSubmit)}
          >
            <Typography
              tag="p"
              variant="UIText16MediumButton"
              color={theme.colors.white}
            >
              Zapisz
            </Typography>
          </ButtonComponent>
        </CardFooter>
      </S.AccountSettingsComponent>
    </S.AccountSettingsRootWrapper>
  )
}

export default AccountSettingsPage
