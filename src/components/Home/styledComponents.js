import styled from 'styled-components'

export const HomeMainContainer = styled.div`
  display: flex;
`
export const AllVideosMainContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
  width: 100%;
  height: 92vh;
  overflow-y: scroll;

  @media screen and (min-width: 768px) {
    height: 89vh;
  }
`

export const BannerCard = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 180px;
  display: ${props => props.banner};
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px;
`

export const BannerImgCard = styled.div`
  display: flex;
  flex-direction: column;
`

export const BannerImg = styled.img`
  height: 28px;
  width: 100px;
`

export const BannerCloseBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`

export const BannerText = styled.p`
  font-family: 'Roboto';
  color: #1e293b;
  width: 180px;
  line-height: 1.5;
  margin-top: 10px;

  @media screen and (min-width: 576px) {
    width: 330px;
  }
`

export const BannerButton = styled.button`
  font-family: 'Roboto';
  font-weight: bold;
  color: #1e293b;
  width: 100px;
  padding: 8px;
  background-color: transparent;
  border: 1px solid #181818;
  margin-top: 6px;
`

export const SearchCard = styled.div`
  display: flex;
  align-items: center;
  margin: 14px;
  margin-bottom: 12px;
  border: 1px solid ${props => (props.bgColor ? '#383838' : '#cccccc')};

  @media screen and (min-width: 576px) {
    width: 66%;
  }

  @media screen and (min-width: 768px) {
    width: 52%;
  }
`

export const Input = styled.input`
  background-color: ${props => (props.bgColor ? '#181818' : '#ffffff')};
  width: 80%;
  color: ${props => (props.bgColor ? '#ffffff' : '#1e293b')};
  padding: 8px;
  border: none;
  border-right: 1px solid ${props => (props.bgColor ? '#383838' : '#cccccc')};
  outline: none;
`

export const SearchButton = styled.button`
  width: 20%;
  height: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  outline: none;
  background-color: ${props => (props.bgColor ? '#424242' : 'transparent')};
  color: ${props => (props.bgColor ? '#909090' : '#000000')};
`

export const ListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;

  @media screen and (min-width: 576px) {
    margin: 14px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
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
export const NoSearchContainer = styled.div`
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

export const NoSearchImg = styled.img`
  height: 180px;

  @media screen and (min-width: 768px) {
    height: 260px;
    margin-top: 0px;
  }
`

export const NoSearchHead = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: ${props => (props.text ? '#ffffff' : '#1e293b')};
  margin-top: 22px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const NoSearchPara = styled.p`
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

export const NoSearchButton = styled.button`
  font-family: 'Roboto';
  background-color: #4f46e5;
  color: #ffffff;
  padding: 8px;
  width: 80px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
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
