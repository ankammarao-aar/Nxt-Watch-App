import styled from 'styled-components'

export const GamingMainContainer = styled.div`
  display: flex;
`

export const GamCard = styled.div`
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9')};
  width: 100%;
  height: 92vh;
  overflow-y: scroll;

  @media screen and (min-width: 768px) {
    height: 89vh;
  }
`

export const GamingHeadingCard = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => (props.bgColor ? '#181818' : '#ebebeb')};
  width: 100%;
  padding: 16px;

  @media screen and (min-width: 768px) {
    padding: 22px;
  }
`
export const GameIconCard = styled.div`
  border-radius: 100%;
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#d7dfe9')};
  display: flex;
  align-items: center;
  padding: 8px;
  margin-right: 12px;

  @media screen and (min-width: 768px) {
    padding: 16px;
  }
`

export const GameHead = styled.h1`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.bgColor ? '#ffffff' : '#0f0f0f')};

  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`

export const GameListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 16px;
`
export const LoaderContainer = styled.div`
  height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    height: 88vh;
  }
`
export const FailureContainer = styled.div`
  height: 83vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  margin-top: 0px;

  @media screen and (min-width: 768px) {
    height: 80vh;
    padding: 140px;
  }
`

export const FailureImg = styled.img`
  height: 180px;

  @media screen and (min-width: 768px) {
    height: 260px;
    margin-top: 0px;
  }
`

export const FailureHead = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.text ? '#ffffff' : '#1e293b')};
  margin-top: 22px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const FailurePara = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #616e7c;
  line-height: 1.5;
  text-align: center;
  margin-top: 0px;
  width: 300px;

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`

export const FailureButton = styled.button`
  font-family: 'Roboto';
  background-color: #4f46e5;
  color: #ffffff;
  padding: 8px;
  width: 80px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`
