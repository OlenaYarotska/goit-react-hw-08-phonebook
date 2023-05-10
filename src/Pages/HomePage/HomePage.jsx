import { PageWrapper, Heading, Text, ListItems } from "./HomePage.styled";

const HomePage = () => {
    return (
        <PageWrapper>
            <Heading>Welcome to Phonebook</Heading>
            <Text>Create your own Contact Book</Text>
            <ul>
                <ListItems>Unlimited number of contacts</ListItems>
                <ListItems>Ability to search by name</ListItems>
                <ListItems>Total privacy</ListItems>
                <ListItems>Easy to use</ListItems>
            </ul>
         </PageWrapper>
    );
};

export default HomePage;