import styled from 'styled-components';
import Slider from 'react-slick';

import { Text } from '../../components';

export const Wrapper = styled.div`
  display: flex;

`;

export const Container = styled.div`
  background-color: ${({ theme: { colors } }) => colors.background};
  width: 25vw;
  height: 100vh;
  overflow-y:scroll;
  z-index:2;

  @media(max-width: 1400px) {
    min-width: 30vw;
    height: 100vh;
    overflow-y:scroll;
  }

  @media(max-width: 1024px) {
    min-width: 40vw;
    height: 100vh;
    overflow-y:scroll;
  }

  @media(max-width: 800px) {
    flex-direction: column;
    position: relative;
    width: 100vw;
    height: 50vh;
    overflow:hidden;
    overflow-y:scroll;
  }
`;

  export const Search = styled.section`
    display: flex;
    flex-direction:column;
    background-color: #ffffff;
    padding: 16px;
  `;

  export const Logo = styled.img`
    margin: 15px;
    max-height:100px;
    height: auto;
    width:250px;
    align-self:center;
  `;

  export const Title = styled(Text)`
    margin: 16px ;
  `;

  export const Carousel = styled(Slider)`
    .slick-slide {
      margin-right: 16px;
    }
  `;



export const MapArea = styled.div`
position:absolute;
padding-left: 25vw;
width: 50vw;
max-width:50vw;
height: 100vh;

  @media(max-width: 1024px) {
    position:absolute;
    padding-left: 40vw;
    margin-right:10vw;
    max-width:200px;
    width: 20vw;
    height: 100vh;
  }

  @media(max-width: 800px) {
    flex-direction: column;
    position:absolute;
    margin-top: 50vh;
    padding: 0 2vw 2vw 2vw;
    width: 100vw;
    max-width:90vw;
    height: 50vh;
    max-height: 50vh;

  }
`;
