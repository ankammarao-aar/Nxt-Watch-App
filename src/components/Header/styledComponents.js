import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HeaderContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#212121' : '#ffffff')};
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding: 20px;
    padding-left: 32px;
    padding-right: 32px;
  }
`

export const MobileCard = styled.div`
  width: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ThemeIconButton = styled.button`
  background-color: transparent;
  padding: 0px;
  border: none;
  cursor: pointer;
`

export const DeskTopCard = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 160px;
`

export const Logo = styled.img`
  height: 18px;

  @media screen and (min-width: 768px) {
    height: 24px;
  }
`
export const Profile = styled.img`
  height: 24px;
`

export const LogoutButton = styled.button`
  font-family: 'Roboto';
  font-weight: bold;
  background-color: ${props => (props.text ? '#181818' : '#ffffff')};
  color: ${props => (props.text ? '#ffffff' : '#3b82f6')};
  padding: 4px;
  width: 70px;
  border: 1px solid ${props => props.textColor};
  border-radius: 3px;
  cursor: pointer;
  outline: none;
`

export const SignOutLogo = styled.button`
  background-color: transparent;
  color: ${props => (props.text ? '#ffffff' : '#000000')};
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 2px;
`
export const PopupCloseCard = styled.div`
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#ffffff')};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 52px;
  border-radius: 8px;
`

export const PopupText = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.bgColor ? '#ffffff' : '#00306e')};
  margin-top: 0px;
`

export const PopupButtonCard = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
`

export const CancelBtn = styled.button`
  font-family: 'Roboto';
  padding: 6px;
  width: 66px;
  background-color: transparent;
  color: ${props => (props.bgColor ? '#909090' : '#64748b')};
  border: 1px solid #909090;
  border-radius: 3px;
  cursor: pointer;
`

export const ConfirmBtn = styled.button`
  font-family: 'Roboto';
  padding: 6px;
  width: 66px;
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`
export const ListButton = styled.button`
  background-color: transparent;
  color: ${props => (props.text ? '#ffffff' : '#000000')};
  border: 0px;
  cursor: pointer;
`

export const ListNavMainContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#ffffff')};
  height: 100vh;
  width: 100%;
`

export const ListClosedButton = styled.button`
  background-color: transparent;
  color: ${props => (props.bgColor ? '#ffffff' : '#000000')};
  border: none;
  margin-top: 22px;
  margin-left: 80%;
  cursor: pointer;
`

export const ListNavContainer = styled.ul`
  margin-top: 50%;
  padding-left: 0px;
`

export const ListNavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding-left: 35%;
  background-color: ${props => props.bgColor};
`

export const ListNavItem = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
`

export const ListHeading = styled.p`
  font-family: 'Roboto';
  font-weight: normal;
  font-size: 14px;
  color: ${props => (props.bgColor ? '#cccccc' : '#313131')};
  padding-left: 16px;
`
