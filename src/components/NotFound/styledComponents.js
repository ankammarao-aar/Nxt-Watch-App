import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
`

export const NotFoundCard = styled.div`
  background-color: ${props => (props.bgColor ? '#000000' : '#f4f4f4')};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 82px;

  @media screen and (min-width: 768px) {
    padding: 50px;
  }
`

export const NotFoundImg = styled.img`
  height: 300px;

  @media screen and (min-width: 768px) {
    height: 350px;
  }
`

export const NotFoundHead = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.bgColor ? '#ffffff' : '#181818')};
  margin-top: 42px;
  margin-bottom: 0px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-top: 22px;
    margin-bottom: 12px;
  }
`

export const NotFoundPara = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #616e7c;
  width: 250px;
  text-align: center;
  margin-bottom: 36px;

  @media screen and (min-width: 768px) {
    width: 100%;
    font-size: 14px;
  }
`
