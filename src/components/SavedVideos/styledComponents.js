import styled from 'styled-components'

export const SavedMainContainer = styled.div`
  display: flex;
`
export const SavedContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9')};
  width: 100%;
  height: 92vh;
  overflow-y: scroll;

  @media screen and (min-width: 768px) {
    height: 89vh;
  }
`
export const SavedHeadingCard = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => (props.bgColor ? '#181818' : '#ebebeb')};
  width: 100%;
  padding: 16px;

  @media screen and (min-width: 768px) {
    padding: 22px;
  }
`
export const FirIconCard = styled.div`
  border-radius: 100%;
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#d7dfe9')};
  padding: 8px;
  margin-right: 12px;

  @media screen and (min-width: 768px) {
    padding: 16px;
    margin-left: 12px;
  }
`

export const SavedHead = styled.h1`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.bgColor ? '#ffffff' : '#0f0f0f')};

  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`

export const SavedListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;

  @media screen and (min-width: 576px) {
    padding-left: 16px;
  }

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    margin-top: 36px;
  }
`

export const NoSavedContainer = styled.div`
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

export const NoSavedImg = styled.img`
  height: 180px;

  @media screen and (min-width: 768px) {
    height: 260px;
    margin-top: 0px;
  }
`

export const NoSavedHead = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.bgColor ? '#ffffff' : '#1e293b')};
  margin-top: 52px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const NoSavedPara = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.bgColor ? '#ffffff' : '#616e7c')};
  line-height: 1.5;
  text-align: center;
  margin-top: 0px;

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`