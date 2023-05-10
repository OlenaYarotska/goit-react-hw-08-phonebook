import  HeaderNav  from "Components/HeaderNav/HeaderNav";
import UserMenu  from "Components/UserMenu/UserMenu";
import { useSelector } from "react-redux";
import  Nav  from "Components/Nav/Nav";
import { authSelectors } from "redux/auth";
import { Wrapper } from "./AppBar.styled";

const AppBar = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <Wrapper>
            <Nav />
            {isLoggedIn ? <UserMenu /> : <HeaderNav />}
        </Wrapper>
    );
};

export default AppBar;