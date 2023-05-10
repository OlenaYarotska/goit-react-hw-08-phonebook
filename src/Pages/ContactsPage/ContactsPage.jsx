import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { PageContainer, Section, Heading, ContactsSection } from './ContactsPage.styled';
import ContactList from 'Components/ContactList/ContactList';
import ContactForm from 'Components/ContactForm/ContactForm';
import Filter from 'Components/Filter/Filter';
import { Error } from 'Pages/RegisterPage/RegisterPage.styled';
import './ContactsPageGlobalStyle.css';



const ContactsPage = () => {
    const error = useSelector(authSelectors.getUserError);

    return (
        <PageContainer>
            <Section>
                <Heading>Phonebook</Heading>
                <ContactForm />
                <ContactsSection ></ContactsSection>
                <Filter />
                <ContactList />
                {error && <Error>{error}</Error>}
            </Section>
        </PageContainer>
    );
};
export default ContactsPage;