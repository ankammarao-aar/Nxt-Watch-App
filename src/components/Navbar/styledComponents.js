import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavbarMainContainer = styled.div`
  background-color: ${props => (props.containerColor ? '#212121' : '#ffffff')};
  height: 89vh;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const NavContainer = styled.ul`
  padding-left: 0px;
  margin-top: 0px;
`

export const NavListItem = styled.li`
  display: flex;
  align-items: center;
  background-color: ${props => props.bgColor};
  padding-left: 12px;
`

export const NavLink = styled(Link)`
  text-decoration: none;
`

export const Heading = styled.p`
  font-family: 'Roboto';
  font-weight: normal;
  font-size: 14px;
  color: ${props => (props.text ? '#cccccc' : '#313131')};
  padding-left: 16px;
`

export const ContactCard = styled.div`
  padding-left: 12px;
`

export const ContactHead = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: bold;
  color: ${props => (props.text ? '#f9f9f9' : '#212121')};
`

export const ContactMediaCard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
  margin-top: 22px;
  margin-bottom: 22px;
`

export const MediaLogo = styled.img`
  height: 26px;
`

export const ContText = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: bold;
  color: ${props => (props.text ? '#f9f9f9' : '#424242')};
  width: 150px;
  line-height: 1.5;
`
