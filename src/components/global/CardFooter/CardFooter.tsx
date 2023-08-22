import * as S from "./CardFooter.styled"

interface CardFooterProps {
  children?: React.ReactNode
}

const CardFooter = ({ children }: CardFooterProps) => {
  return <S.CardFooterWrapper>{children}</S.CardFooterWrapper>
}

export default CardFooter
