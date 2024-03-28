import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const ListItem = styled.li`
  margin-bottom: 22px;

  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
  }
`

export const ThumbNail = styled.img`
  @media screen and (max-width: 575px) {
    flex-grow: 1;
  }

  @media screen and (max-width: 768px) {
    height: 190px;
  }

  @media screen and (min-width: 768px) {
    height: 140px;
  }
`

export const ChannelCard = styled.div`
  display: flex;
  margin-top: 12px;
  margin-left: 12px;
`

export const ChannelImg = styled.img`
  height: 36px;
  margin-right: 12px;
`

export const DetailsCard = styled.div`
  @media screen and (max-width: 575px) {
    width: 230px;
  }

  @media screen and (min-width: 576px) {
      width: 200px;
  }
}
`

export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => (props.text ? '#ffffff' : '#1e293b')};
  margin-top: 0px;
  margin-bottom: 8px;
  line-height: 1.5;
`

export const Name = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #64748b;
  margin-bottom: 0px;
  margin-top: 0px;
`

export const ViewCard = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0px;
`

export const ViewCount = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #64748b;
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
