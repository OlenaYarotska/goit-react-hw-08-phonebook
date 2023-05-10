import { useState } from 'react';
import toast from 'react-hot-toast';
import { FormWrapper, Form, Label, Input, Button } from './ContactForm.styled';
import { useCreateContactMutation, useGetContactsQuery } from 'redux/contacts/contacts -api';

const ContactForm = () => {
  const { data: contacts } = useGetContactsQuery();
  const [createContact] = useCreateContactMutation();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

    const reset = () => {
    setName('');
    setNumber('');
  };
  
  const addNewContact = data => {
    const normalizedContacts = contacts?.map(contact => contact.name.toLowerCase());
    const isInPhonebook = normalizedContacts?.includes(data.name.toLowerCase());
    if (!isInPhonebook) {
      createContact(data);
      reset();
      toast.success(`${name} is successfully added!`);
    } else {
      toast.error(`${name} is already in contacts.`);
    }
  };

  const handleChange = evt => {
    if (evt.target.name === 'name') {
      setName(evt.target.value)
    } else {
      setNumber(evt.target.value)
    }
  };
   

  const handleSubmit = evt => {
    evt.preventDefault();
    const contact = { name, number };
    addNewContact(contact);
  };


  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={handleChange}
            required
          />
        </Label>

        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={handleChange}
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    </FormWrapper>
  );
}
export default ContactForm;

