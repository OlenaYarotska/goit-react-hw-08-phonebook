import { Wrapper, Navigation } from "./HeaderNav.styled";

const HeaderNav = () => {
    return (
        <Wrapper>
            <Navigation to='/register'>Register</Navigation>
            <Navigation to='/login'>Login</Navigation>
        </Wrapper>
    )
};

export default HeaderNav;