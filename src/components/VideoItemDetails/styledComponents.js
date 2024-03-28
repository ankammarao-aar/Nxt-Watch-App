import styled from 'styled-components'

export const VideoItemMainContainer = styled.div`
  display: flex;
`

export const VideoItemCard = styled.div`
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9')};
  width: 100%;
  height: 92vh;
  overflow-y: scroll;

  @media screen and (min-width: 768px) {
    height: 89vh;
  }
`

export const VideoItemListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;

  @media screen and (min-width: 768px) {
    margin: 18px;
  }
`
//
//---------------------------------------------------------------------------------
export const VideoItemListItem = styled.li`
  margin-bottom: 22px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 576px) {
    margin-bottom: 52px;
  }
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.text ? '#ffffff' : '#0f0f0f')};
  margin-top: 16px;
  margin-left: 16px;
  margin-right: 16px;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    font-size: 12px;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 10px;
  }
`
export const VideoViewAndLikesCard = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-left: 16px;
  margin-right: 16px;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    margin-left: 0px;
    margin-right: 0px;
  }
`

export const VideoViewCard = styled.div`
  display: flex;
  align-items: center;
  width: 400px;

  @media screen and (min-width: 768px) {
    width: 200px;
  }
`
export const ViewCount = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #616e7c;
  margin-right: 20px;
`

export const Dot = styled.li`
  list-style-type: disc;
  color: #64748b;
  margin-left: 12px;
`

export const PublishText = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #64748b;
  margin-top: 6px;
`

export const VideoLikesCard = styled.div`
  display: flex;
`

export const LikeButton = styled.button`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: bold;
  width: 62px;
  color: ${props => (props.text ? '#2563eb' : '#64748b')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-right: 12px;
`

export const DislikeBtn = styled.button`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: bold;
  width: 78px;
  color: ${props => (props.text ? '#2563eb' : '#64748b')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-right: 12px;
`

export const SaveBtn = styled.button`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: bold;
  color: ${props => props.color};
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-right: 12px;
`

export const LikeText = styled.span`
  margin-left: 8px;
`

export const Line = styled.hr`
  width: 100%;
  border: 1px solid ${props => (props.text ? '#475569' : '#cccccc')};
  margin: 16px;

  @media screen and (min-width: 768px) {
    margin-right: 0px;
    margin-left: 0px;
  }
`

export const ProfileCard = styled.div`
  display: flex;
  margin: 16px;

  @media screen and (min-width: 768px) {
    margin: 0px;
  }
`
export const ProfileImg = styled.img`
  height: 38px;
  margin-right: 12px;
`
export const DescriptionCard = styled.div``

export const DescName = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => (props.text ? '#ffffff' : '#1e293b')};
  font-weight: 500px;
  margin-top: 0px;
  margin-bottom: 0px;
`
export const SubCount = styled.p`
  font-family: 'Roboto';
  font-size: 10px;
  color: #616e7c;
  margin-top: 8px;
`
export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => (props.text ? '#ffffff' : '#1e293b')};
  line-height: 1.5;
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
