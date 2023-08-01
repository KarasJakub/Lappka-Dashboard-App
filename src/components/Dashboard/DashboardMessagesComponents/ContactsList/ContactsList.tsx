import * as S from "./ContactsList.styled"
import ContactItem from "./ContactItem/ContactItem"
import ArturPhoto from "assets/photos/Messages/ArturPhoto.png"
import RemigiuszPhoto from "assets/photos/Messages/RemigiuszPhoto.png"
import KrystynaPhoto from "assets/photos/Messages/KrystynaPhoto.png"
import SecondArturPhoto from "assets/photos/Messages/SecondArturPhoto.png"
import SecondRemigiuszPhoto from "assets/photos/Messages/SecondRemigiuszPhoto.png"
import SecondKRystynaPhoto from "assets/photos/Messages/SecondKrystynaPhoto.png"

const ContactsListDummyData = [
  {
    name: "Artur Pączkowski",
    image: ArturPhoto,
    message: "Hahahaha 😜😜",
    time: "08:43",
    newMessages: "+2",
  },
  {
    name: "Remigiusz Wątroba",
    image: RemigiuszPhoto,
    message: "Świetnie!",
    time: "08:43",
    newMessages: "+5",
  },
  {
    name: "Krystyna Nowak",
    image: KrystynaPhoto,
    message: "Ta karma jest super...",
    time: "Pon",
    newMessages: "+2",
  },
  {
    name: "Artur Pączkowski",
    image: SecondArturPhoto,
    message: "Hahahaha 😜😜",
    time: "08:43",
    newMessages: "+2",
  },
  {
    name: "Remigiusz Wątroba",
    image: SecondRemigiuszPhoto,
    message: "Świetnie!",
    time: "08:43",
    newMessages: "+5",
  },
  {
    name: "Krystyna Nowak",
    image: SecondKRystynaPhoto,
    message: "Ta karma jest super...",
    time: "Pon",
    newMessages: "",
  },
]

const ContactsList = () => {
  return (
    <S.ContactsListWrapper>
      {ContactsListDummyData.map((item) => (
        <ContactItem
          image={item.image}
          name={item.name}
          message={item.message}
          time={item.time}
          messagesCounter={item.newMessages}
        />
      ))}
    </S.ContactsListWrapper>
  )
}

export default ContactsList
