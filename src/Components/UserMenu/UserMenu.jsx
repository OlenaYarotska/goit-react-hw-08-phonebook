import { useSelector, useDispatch } from "react-redux";
import { authSelectors, authOperations } from "redux/auth";
import { Wrapper, Text, Button } from "./UserMenu.styled";
const UserMenu = () => {
    const name = useSelector(authSelectors.getUsername);
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <Text>Hello, {name}!</Text>
            <Button type='button' onClick={() => dispatch(authOperations.logOut())}>Log out</Button>
        </Wrapper>
    )
};

export default UserMenu;
