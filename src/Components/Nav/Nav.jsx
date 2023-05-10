import { useSelector } from "react-redux";
import { BiHome } from "react-icons/bi";
import { authSelectors } from "redux/auth";
import {Wrapper, Navigation, HomeNav} from "./Nav.styled";

const Nav = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const style = {
        color: "black",
        fontSize: "25px"
    };
    return (
        <Wrapper>
            <HomeNav to='/'>
                <BiHome style={style} />
            </HomeNav>
            {isLoggedIn && (
                <Navigation to='/contacts'></Navigation>
                )}
        </Wrapper>
    );
};

export default Nav;