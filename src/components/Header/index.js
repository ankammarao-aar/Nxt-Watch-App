import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import {FaMoon} from 'react-icons/fa'
import {IoSunnyOutline} from 'react-icons/io5'
import {BsList} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd, MdClose} from 'react-icons/md'

import SavedContext from '../../context/SavedContext'

import {
  HeaderContainer,
  MobileCard,
  DeskTopCard,
  ThemeIconButton,
  Logo,
  Profile,
  LogoutButton,
  ListButton,
  SignOutLogo,
  PopupCloseCard,
  PopupText,
  PopupButtonCard,
  CancelBtn,
  ConfirmBtn,
  ListNavMainContainer,
  ListClosedButton,
  ListNavContainer,
  ListNavItem,
  ListNavLink,
  ListHeading,
} from './styledComponents'

import './index.css'

const Header = props => (
  <SavedContext.Consumer>
    {value => {
      const {darkTheme, toggleDarkTheme, activeTab, changeActiveTab} = value

      const moon = <FaMoon size={18} />
      const sunny = <IoSunnyOutline color="#ffffff" size={22} />
      const list = <BsList size={20} />
      const logout = <FiLogOut size={22} />
      const closed = <MdClose size={28} />

      const icon = darkTheme ? sunny : moon
      const activeColor = darkTheme ? '#231f20' : '#cbd5e1'
      const changeLogo = darkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const onClickTheme = () => {
        toggleDarkTheme()
      }

      const onClickHome = () => {
        changeActiveTab('Home')
      }

      const onClickTabTrending = () => {
        changeActiveTab('Trending')
      }

      const onClickGaming = () => {
        changeActiveTab('Gaming')
      }

      const onClickSaved = () => {
        changeActiveTab('Saved')
      }

      return (
        <HeaderContainer bgColor={darkTheme}>
          <Link to="/" onClick={onClickHome}>
            <Logo src={changeLogo} alt="website logo" />
          </Link>

          <MobileCard>
            <ThemeIconButton
              type="button"
              onClick={onClickTheme}
              data-testid="theme"
            >
              {icon}
            </ThemeIconButton>

            <Popup
              modal
              trigger={
                <ListButton type="button" text={darkTheme}>
                  {list}
                </ListButton>
              }
            >
              {close => (
                <ListNavMainContainer bgColor={darkTheme}>
                  <ListClosedButton
                    type="button"
                    bgColor={darkTheme}
                    onClick={() => close()}
                  >
                    {closed}
                  </ListClosedButton>

                  <ListNavContainer>
                    <ListNavLink
                      to="/"
                      bgColor={activeTab === 'Home' ? activeColor : 'none'}
                    >
                      <ListNavItem key="home" onClick={onClickHome}>
                        <AiFillHome
                          color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                        />
                        <ListHeading bgColor={darkTheme}>Home</ListHeading>
                      </ListNavItem>
                    </ListNavLink>

                    <ListNavLink
                      to="/trending"
                      bgColor={activeTab === 'Trending' ? activeColor : 'none'}
                    >
                      <ListNavItem key="trending" onClick={onClickTabTrending}>
                        <HiFire
                          color={
                            activeTab === 'Trending' ? '#ff0b37' : '#909090'
                          }
                        />
                        <ListHeading bgColor={darkTheme}>Trending</ListHeading>
                      </ListNavItem>
                    </ListNavLink>

                    <ListNavLink
                      to="/gaming"
                      bgColor={activeTab === 'Gaming' ? activeColor : 'none'}
                    >
                      <ListNavItem key="gaming" onClick={onClickGaming}>
                        <SiYoutubegaming
                          color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                        />
                        <ListHeading bgColor={darkTheme}>Gaming</ListHeading>
                      </ListNavItem>
                    </ListNavLink>

                    <ListNavLink
                      to="/saved-videos"
                      bgColor={activeTab === 'Saved' ? activeColor : 'none'}
                    >
                      <ListNavItem key="saved" onClick={onClickSaved}>
                        <MdPlaylistAdd
                          color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                        />
                        <ListHeading bgColor={darkTheme}>
                          Saved Videos
                        </ListHeading>
                      </ListNavItem>
                    </ListNavLink>
                  </ListNavContainer>
                </ListNavMainContainer>
              )}
            </Popup>

            <Popup
              modal
              trigger={
                <SignOutLogo type="button" text={darkTheme}>
                  {logout}
                </SignOutLogo>
              }
              className="popup-content"
            >
              {close => (
                <PopupCloseCard bgColor={darkTheme}>
                  <PopupText bgColor={darkTheme}>
                    Are you sure, you want to logout?
                  </PopupText>
                  <PopupButtonCard>
                    <CancelBtn
                      type="button"
                      onClick={() => close()}
                      bgColor={darkTheme}
                    >
                      Cancel
                    </CancelBtn>
                    <ConfirmBtn
                      type="button"
                      onClick={onClickLogout}
                      bgColor={darkTheme}
                    >
                      Confirm
                    </ConfirmBtn>
                  </PopupButtonCard>
                </PopupCloseCard>
              )}
            </Popup>
          </MobileCard>

          <DeskTopCard>
            <ThemeIconButton
              type="button"
              onClick={onClickTheme}
              data-testid="theme"
            >
              {icon}
            </ThemeIconButton>
            <Profile
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />

            <Popup
              modal
              trigger={
                <LogoutButton type="button" text={darkTheme}>
                  Logout
                </LogoutButton>
              }
              className="popup-content"
            >
              {close => (
                <PopupCloseCard bgColor={darkTheme}>
                  <PopupText bgColor={darkTheme}>
                    Are you sure, you want to logout?
                  </PopupText>
                  <PopupButtonCard>
                    <CancelBtn
                      type="button"
                      onClick={() => close()}
                      bgColor={darkTheme}
                    >
                      Cancel
                    </CancelBtn>
                    <ConfirmBtn
                      type="button"
                      onClick={onClickLogout}
                      bgColor={darkTheme}
                    >
                      Confirm
                    </ConfirmBtn>
                  </PopupButtonCard>
                </PopupCloseCard>
              )}
            </Popup>
          </DeskTopCard>
        </HeaderContainer>
      )
    }}
  </SavedContext.Consumer>
)

export default withRouter(Header)
