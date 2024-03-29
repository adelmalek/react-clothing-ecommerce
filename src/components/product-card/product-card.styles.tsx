import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
`;

export const Btn = styled.button`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
  font-size: 12px;
  padding: 0 15px 0 15px;

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    padding: 0 10px;
  }
`;

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
      ${Image} {
        opacity: 0.8;
      }
  
      ${Btn} {
        opacity: 0.85;
        display: flex;
      }

      @media screen and (max-width: 800px) {
        ${Image} {
          opacity: unset;
        }

        ${Btn} {
          opacity: unset;
        }
      }
    }

  @media screen and (max-width: 800px) {
    width: 40vw;
  }

  @media screen and (max-width: 400px) {
    width: 80vw;
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 10%;
`;