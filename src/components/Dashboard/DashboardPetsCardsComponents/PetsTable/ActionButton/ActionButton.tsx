import * as S from "./ActionButton.styled"
import { useState } from "react"
import { ReactComponent as DotsActionIcon } from "assets/icons/DotsActionIcon.svg"
import ButtonComponent from "components/global/Button/ButtonComponent.styled"
import Typography from "components/global/Typography/Typography"

const ActionButton = () => {
  const [isActionButtonOpen, setIsActionButtonOpen] = useState(false)
  return (
    <S.ActionButtonWrapper>
      <ButtonComponent
        onClick={() => setIsActionButtonOpen(!isActionButtonOpen)}
        style={{ width: "unset" }}
      >
        <DotsActionIcon />
      </ButtonComponent>
      {isActionButtonOpen && (
        <S.ActionToggleMenu>
          <ButtonComponent>
            <Typography tag="p" variant="UIText14Reg">
              Szczegóły
            </Typography>
          </ButtonComponent>
          <ButtonComponent>
            <Typography tag="p" variant="UIText14Reg">
              Usuń
            </Typography>
          </ButtonComponent>
        </S.ActionToggleMenu>
      )}
    </S.ActionButtonWrapper>
  )
}

export default ActionButton
