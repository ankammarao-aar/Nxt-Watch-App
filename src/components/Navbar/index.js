import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import SavedContext from '../../context/SavedContext'

import {
  NavbarMainContainer,
  NavContainer,
  NavListItem,
  NavLink,
  Heading,
  ContactCard,
  ContactHead,
  ContactMediaCard,
  MediaLogo,
  ContText,
} from './styledComponents'

const Navbar = () => (
  <SavedContext.Consumer>
    {value => {
      const {darkTheme, activeTab, changeActiveTab} = value
      const activeColor = darkTheme ? '#475569' : '#cbd5e1'

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
        <NavbarMainContainer containerColor={darkTheme}>
          <NavContainer>
            <NavLink to="/">
              <NavListItem
                key="home"
                onClick={onClickHome}
                bgColor={activeTab === 'Home' ? activeColor : 'none'}
              >
                <AiFillHome
                  color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                />
                <Heading text={darkTheme}>Home</Heading>
              </NavListItem>
            </NavLink>

            <NavLink to="/trending">
              <NavListItem
                key="trending"
                onClick={onClickTabTrending}
                bgColor={activeTab === 'Trending' ? activeColor : 'none'}
              >
                <HiFire
                  color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                />
                <Heading text={darkTheme}>Trending</Heading>
              </NavListItem>
            </NavLink>

            <NavLink to="/gaming">
              <NavListItem
                key="gaming"
                onClick={onClickGaming}
                bgColor={activeTab === 'Gaming' ? activeColor : null}
              >
                <SiYoutubegaming
                  color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                />
                <Heading text={darkTheme}>Gaming</Heading>
              </NavListItem>
            </NavLink>

            <NavLink to="/saved-videos">
              <NavListItem
                key="saved"
                onClick={onClickSaved}
                bgColor={activeTab === 'Saved' ? activeColor : null}
              >
                <MdPlaylistAdd
                  color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                />
                <Heading text={darkTheme}>Saved Videos</Heading>
              </NavListItem>
            </NavLink>
          </NavContainer>

          <ContactCard>
            <ContactHead text={darkTheme}>CONTACT US</ContactHead>
            <ContactMediaCard>
              <MediaLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <MediaLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <MediaLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </ContactMediaCard>
            <ContText text={darkTheme}>
              Enjoy! Now to see your channels and recommendations!
            </ContText>
          </ContactCard>
        </NavbarMainContainer>
      )
    }}
  </SavedContext.Consumer>
)

export default Navbar
