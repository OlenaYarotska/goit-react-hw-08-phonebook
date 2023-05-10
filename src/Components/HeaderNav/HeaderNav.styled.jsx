import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.nav`   
`;
export const Navigation = styled(NavLink)`
font-weight: 500;
text-transform: uppercase;
color: #000;
text-decoration: none;
&.active{
font-weight: 700;
};
&:hover {
    font-weight: 700;
};
:not(:last-child) {
    margin-right: 10px;
}

`;