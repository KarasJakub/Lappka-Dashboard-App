import * as S from "./ContactsList.styled"
import ContactItem from "./ContactItem/ContactItem"
import ArturPhoto from "assets/photos/Messages/ArturPhoto.png"

const ContactsListDummyData = [
  {
    name: "Artur Pączkowski",
    image: ArturPhoto,
    message: "hahahahah",
    time: "08:43",
    messagesCounter: "+2",
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
          messagesCounter={item.messagesCounter}
        />
      ))}
    </S.ContactsListWrapper>
  )
}

export default ContactsList
