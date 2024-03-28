import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const GameListItem = styled.li`
  margin-bottom: 42px;
`

export const GameThumbNail = styled.img`
  height: 180px;

  @media screen and (min-width: 576px) {
    height: 240px;
  }

  @media screen and (min-width: 768px) {
    height: 256px;
  }
`
export const GameDetailCard = styled.div`
  margin-top: 12px;
`

export const GameTitle = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  color: ${props => (props.text ? '#ffffff' : '#0f0f0f')};
  margin-top: 0px;
  margin-bottom: 6px;
  line-height: 1.5;
`
export const GameViewCount = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #64748b;
  margin-right: 24px;
  margin-top: 0px;
`
