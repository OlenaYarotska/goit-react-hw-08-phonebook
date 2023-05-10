import ContactItem from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getFilter} from 'redux/contacts/contacts-slice';
import { useGetContactsQuery } from 'redux/contacts/contacts -api';
import { Spinner } from 'Components/Spinner/Spinner';
import { Error } from 'Pages/RegisterPage/RegisterPage.styled';

const ContactList = () => {
  const { data: contacts, isLoading, error } = useGetContactsQuery();
  const filter = useSelector(getFilter);

  const filterContacts = () =>{ 
        return (
      contacts && contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())));
  };

  const contactBook = filterContacts();
  const filteredContacts = contacts && !isLoading && contactBook.length > 0;

  return (
    <ul>
      {filteredContacts && contactBook.map(({ id, name, number}) =>(
          <ContactItem
          id={id}
          key={id}
          name={name}
          number={number}
          />
      ))}
      {isLoading && <Spinner />}
      {error && <Error>You have some problems.</Error>}
      </ul>
  )
};
      
export default ContactList;