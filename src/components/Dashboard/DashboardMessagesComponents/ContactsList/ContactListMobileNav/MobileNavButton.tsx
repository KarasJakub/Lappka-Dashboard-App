import Typography from "components/global/Typography/Typography"
import ButtonComponent from "components/global/Button/ButtonComponent.styled"

interface NavButtonProps {
  isMobileNavOpen: boolean
  toggleNavigation: () => void
}

const NavButton = (props: NavButtonProps) => {
  return (
    <div style={{ padding: "1rem 2rem 0 0", zIndex: "11" }}>
      <ButtonComponent
        onClick={props.toggleNavigation}
        className="primary"
        size="Medium"
        margin="Medium"
      >
        <Typography tag="p">Wybierz konwersację</Typography>
      </ButtonComponent>
    </div>
    // <S.Button onClick={props.toggleNavigation} isOpen={props.isMobileNavOpen}>
    //   <S.ButtonBar isOpen={props.isMobileNavOpen} />
    // </S.Button>
  )
}

export default NavButton
