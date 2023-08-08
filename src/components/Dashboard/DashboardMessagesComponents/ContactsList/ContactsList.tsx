import * as S from "./ContactsList.styled"
import ContactItem from "./ContactItem/ContactItem"
import ArturPhoto from "assets/photos/Messages/ArturPhoto.png"
import RemigiuszPhoto from "assets/photos/Messages/RemigiuszPhoto.png"
import KrystynaPhoto from "assets/photos/Messages/KrystynaPhoto.png"
import SecondArturPhoto from "assets/photos/Messages/SecondArturPhoto.png"
import SecondRemigiuszPhoto from "assets/photos/Messages/SecondRemigiuszPhoto.png"
import SecondKRystynaPhoto from "assets/photos/Messages/SecondKrystynaPhoto.png"

export const ContactsListDummyData = [
  {
    userName: "Artur Pączkowski",
    image: ArturPhoto,
    lastMessage: "hahahahah :D",
    path: "/messages/artur-paczkowski",
    time: "08:43",
    newMessages: "+2",
    conversation: [
      {
        user: "me",
        id: 1,
        message:
          "Cześć! Znalazłem Twojego pupila. Jest u mnie w domu zdrowy i uśmiechnięty. Kiedy mógłbyś go odebrać?",
      },
      {
        user: "Artur Pączkowski",
        id: 2,
        message:
          "TAK! Super! Ale się cieszę! Czy mogę do Pana dzisiaj podjechać?",
      },
      { user: "me", id: 3, message: "Świetnie!" },
      {
        user: "Artur Pączkowski",
        id: 4,
        message: "Proszę o podanie adresu i będę jeszcze dzisiaj.",
      },
    ],
  },
  {
    userName: "Remigiusz Wątroba",
    image: RemigiuszPhoto,
    lastMessage: "Świetnie!",
    path: "/messages/remigiusz-watroba",
    time: "08:43",
    newMessages: "+2",
    conversation: [
      {
        user: "me",
        id: 1,
        message: "Mamy twojego psa",
      },
      {
        user: "Remigiusz Wątroba",
        id: 2,
        message: "Przedstawcie swoje żądania",
      },
      { user: "me", id: 3, message: "50kg ziemaniaków" },
      {
        user: "Remigiusz Wątroba",
        id: 4,
        message: "okej",
      },
    ],
  },
  {
    userName: "Krystyna Nowak",
    image: KrystynaPhoto,
    lastMessage: "Ta kamra jest super...",
    path: "/messages/krystyna-nowak",
    time: "Pon",
    newMessages: "+2",
    conversation: [
      {
        user: "me",
        id: 1,
        message: "Piesek aktualny?",
      },
      {
        user: "Krystyna Nowak",
        id: 2,
        message: "Nie",
      },
      { user: "me", id: 3, message: "Świetnie!" },
      {
        user: "Krystyna Nowak",
        id: 4,
        message: "Mam chora córkę, da pani pieska",
      },
    ],
  },
  {
    userName: "Ziemowit Kowalski",
    image: SecondArturPhoto,
    lastMessage: "hahaha",
    path: "/messages/ziemowit-kowalski",
    time: "08:43",
    newMessages: "+2",
    conversation: [
      {
        user: "me",
        id: 1,
        message: "Można wyprowadzac psy",
      },
      {
        user: "Ziemowit Kowalski",
        id: 2,
        message: "Pewnie",
      },
      { user: "me", id: 3, message: "Świetnie!" },
      {
        user: "Ziemowit Kowalski",
        id: 4,
        message: "Pgit",
      },
    ],
  },
  {
    userName: "Zygfryd Opiela",
    image: SecondRemigiuszPhoto,
    lastMessage: "Świetnie!",
    path: "/messages/zygfryd-opiela",
    time: "08:43",
    newMessages: "+2",
    conversation: [
      {
        user: "me",
        id: 1,
        message:
          "Cześć! Znalazłem Twojego pupila. Jest u mnie w domu zdrowy i uśmiechnięty. Kiedy mógłbyś go odebrać?",
      },
      {
        user: "Zygfryd Opiela",
        id: 2,
        message:
          "TAK! Super! Ale się cieszę! Czy mogę do Pana dzisiaj podjechać?",
      },
      { user: "me", id: 3, message: "Świetnie!" },
      {
        user: "Zygfryd Opiela",
        id: 4,
        message: "Proszę o podanie adresu i będę jeszcze dzisiaj.",
      },
    ],
  },
  {
    userName: "Hanna Orzeszek",
    image: SecondKRystynaPhoto,
    lastMessage: "Ta karma jest super...",
    path: "/messages/hanna-orzeszek",
    time: "Pon",
    newMessages: "",
    conversation: [
      {
        user: "me",
        id: 1,
        message:
          "Cześć! Znalazłem Twojego pupila. Jest u mnie w domu zdrowy i uśmiechnięty. Kiedy mógłbyś go odebrać?",
      },
      {
        user: "Hanna Orzeszek",
        id: 2,
        message:
          "TAK! Super! Ale się cieszę! Czy mogę do Pana dzisiaj podjechać?",
      },
      { user: "me", id: 3, message: "Świetnie!" },
      {
        user: "Hanna Orzeszek",
        id: 4,
        message: "Proszę o podanie adresu i będę jeszcze dzisiaj.",
      },
    ],
  },
]

interface MobileNavProps {
  isMobile?: boolean
}

const ContactsList = ({ isMobile }: MobileNavProps) => {
  return (
    <S.ContactsListWrapper isMobile={isMobile}>
      {ContactsListDummyData.map((item) => (
        <ContactItem
          image={item.image}
          name={item.userName}
          conversation={item.conversation}
          time={item.time}
          messagesCounter={item.newMessages}
          path={item.path}
        />
      ))}
    </S.ContactsListWrapper>
  )
}

export default ContactsList
