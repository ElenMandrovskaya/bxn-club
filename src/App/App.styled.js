import styled from '@emotion/styled';
import gloves from '../images/1638452520643.jpg'

export const Container = styled.div`
margin: 0 auto;
@media (min-width: 320px) and (max-width: 767px) {
    max-width: 320px;
    padding: 0 19px;
}
@media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 52px;
}
@media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding: 0 110px;
}
`;
export const HeroBg = styled.div`
background-image: linear-gradient(
    rgba(0,0,0,0.7), 
    rgba(0,0,0,0.7) 
      ), url(${gloves});
display: flex;
justify-content: flex-end;
align-items: center;
width: 100%;
height: 500px;
background-repeat: no-repeat;  
background-position: 100% 80%;
background-size: 100vw;
position: absolute;
z-index: -1;
padding: 40px;
`;
export const HeroTitle = styled.h1`
width: 500px;
height: 250px;
font-size: 50px;
color: #fff;
text-shadow: 0px 0px 20px var(--accent-color);
`;