import styled from "styled-components";
import background_picture from '../../Images/v748-toon-106-min.jpg';

export const AppWrapper = styled.div`
margin: 0 auto;
max-width: 900px;
height: 100 vh;
background-image: url(${background_picture}) ;
background-size: cover;
background-repeat: repeat;
box-shadow: 3px 3px 5px 6px #ccc;
`;