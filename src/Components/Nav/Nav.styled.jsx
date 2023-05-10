import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.nav`
       
`;
export const HomeNav = styled(NavLink)`

`;
export const Navigation = styled(NavLink)`
font-weight: 500;
text-transform: uppercase;
color: #000;
&.active{
font-weight: 700;
};
&:hover {
    font-weight: 700;
};
`;