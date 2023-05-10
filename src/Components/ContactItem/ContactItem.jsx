import { useDeleteContactMutation } from 'redux/contacts/contacts -api';
import { BiTrash } from "react-icons/bi";
import {  Button, Item, Contact } from './ContactItem.styled';

const ContactItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading: deletingContact }] = useDeleteContactMutation();

  const handleDelete = () => {
    deleteContact(id);
  };
  
  return (
     <Item key={id}>
      <Contact>
        {name}:{number}
      </Contact>
      <Button type="button" onClick={handleDelete} disabled={deletingContact}>
        <BiTrash />
      </Button>
    </Item>
  );
};

export default ContactItem;