import styled from "@emotion/styled";
import logo from "../../images/logo.svg";
import { pulse } from 'react-animations';
import { keyframes } from '@emotion/react'

export const HeaderContainer = styled.header`
padding: 0 30px;
height: 80px;
display: flex;
align-items: center;
justify-content: space-between;
box-shadow: 0px 2px 20px 2px var(--accent-color);
`;

export const Logo = styled.a`
display: block;
background-image: url(${logo});
width: 50px;
height: 50px;
background-repeat: no-repeat;  
background-size: contain;
margin-right: 50px;
`;
export const List = styled.ul`
display: flex;
justify-content: space-between;

`;

export const Item = styled.li`
display: flex;
align-items: center;
color: var(--accent-color);
&:not(:last-child) {
      margin-right: 40px;
    }
`;

const pulseAnimation = keyframes`${pulse}`;

export const Btn = styled.button`
width: 200px;
height: 40px;
border-radius: 4px;
border: transparent;
background-color: var(--accent-color);
text-transform: uppercase;
animation: 1s ${pulseAnimation} infinite;
box-shadow: 0px 2px 20px 2px var(--accent-color);

&:hover, :focus {
border: 2px solid var(--accent-color);
color: var(--accent-color);
background-color: transparent;
}
`;
