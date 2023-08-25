import * as S from "./UserCard.styled"
import ShelterSmallPhoto from "assets/photos/ShelterSmallPhoto.png"
import Typography from "components/global/Typography/Typography"
import ButtonComponent from "components/global/Button/ButtonComponent.styled"
import { ReactComponent as ArrowDownIcon } from "assets/icons/ArrowDownIcon.svg"
import theme from "layout/theme"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ROUTES from "helpers/utils/routes"

const UserCard = () => {
  const navigate = useNavigate()
  const [isUserCardOpen, setIsUserCardOpen] = useState(false)
  return (
    <S.UserCardWrapper>
      <S.UserCardImage src={ShelterSmallPhoto} alt="Shelter Logo" />
      <S.UserCardTypographyWrapper>
        <S.UserCardNameButtonWrapper>
          <Typography tag="p" variant="UIText14Med">
            Jan Kowalski
          </Typography>
          <ButtonComponent
            onClick={() => setIsUserCardOpen(!isUserCardOpen)}
            style={{ width: "unset" }}
          >
            <ArrowDownIcon
              style={{
                rotate: isUserCardOpen ? "180deg" : "",
                transition: "rotate .2s",
              }}
            />
          </ButtonComponent>
        </S.UserCardNameButtonWrapper>
        <Typography
          tag="p"
          variant="UIText12Reg"
          color={theme.colors.primaryPr600}
        >
          Psiaki Adopciaki z Psiej Wioski
        </Typography>
        {isUserCardOpen && (
          <S.ToggleMenu>
            <ButtonComponent onClick={() => navigate(ROUTES.settings)}>
              <Typography tag="p" variant="UIText14Reg">
                Ustawienia konta
              </Typography>
            </ButtonComponent>
            <ButtonComponent style={{ width: "unset" }}>
              <Typography tag="p" variant="UIText14Reg">
                Wyloguj się
              </Typography>
            </ButtonComponent>
          </S.ToggleMenu>
        )}
      </S.UserCardTypographyWrapper>
    </S.UserCardWrapper>
  )
}

export default UserCard
