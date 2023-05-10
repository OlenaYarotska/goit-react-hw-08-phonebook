import styled from '@emotion/styled';

export const Wrapper = styled.div`

`;
export const Heading = styled.h2`
    text-align: center;
    font-size: 30px;
`

export const Form = styled.form`
margin-left: 25px;
display: flex;
flex-direction:column;
align-items: center;

`;
export const Label = styled.label`
margin-bottom: 15px;
`;
 
export const Input = styled.input`
width: 280px;
height: 25px;
padding-left: 10px;
`;

export const Button = styled.button`
margin-bottom: 20px;
  border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
  border-style: solid;
  border-width: 2px;
  box-shadow: rgba(0, 0, 0, .2) 15px 28px 25px -18px;
  box-sizing: border-box;
  color: #41403e;
  cursor: pointer;
  display: inline-block;
  font-family: Neucha, sans-serif;
  font-size: 0.8rem;
  outline: none;
  padding: 3px 14px;
  text-decoration: none;
  transition: all 235ms ease-in-out;
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:hover {
    color: #fff;
    border-color: transparent;
    background-color: #252525;
  }
`;

export const Error = styled.p`
    text-align: center;
    font-size: 20px;
    color: #d61212;
`