import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const TrendListItem = styled.li`
  margin-bottom: 22px;

  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 576px) {
    display: flex;
    margin-bottom: 52px;
  }
`

export const TrendThumbNail = styled.img`
  @media screen and (max-width: 575px) {
    flex-grow: 1;
  }

  @media screen and (max-width: 768px) {
    height: 196px;
  }

  @media screen and (min-width: 768px) {
    height: 140px;
    width: 250px;
  }
`

export const TrendChannelCard = styled.div`
  display: flex;
  margin-top: 12px;
  margin-left: 12px;
`

export const TrendProfile = styled.img`
  height: 36px;
  margin-right: 12px;

  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const TrendDetailCard = styled.div``

export const TrendTitle = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  color: ${props => (props.text ? '#ffffff' : '#1e293b')};
  margin-top: 0px;
  margin-bottom: 10px;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const TrendName = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #64748b;
  margin-bottom: 0px;
  margin-top: 0px;
`

export const TrendViewCard = styled.div`
  display: flex;
  align-items: center;
`

export const TrendViewCount = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #64748b;
  margin-right: 14px;
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
