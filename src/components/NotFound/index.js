import Header from '../Header'
import Navbar from '../Navbar'
import SavedContext from '../../context/SavedContext'

import {
  NotFoundContainer,
  NotFoundCard,
  NotFoundImg,
  NotFoundHead,
  NotFoundPara,
} from './styledComponents'

const NotFound = () => (
  <>
    <Header />
    <NotFoundContainer>
      <Navbar />

      <SavedContext.Consumer>
        {value => {
          const {darkTheme} = value
          const notFoundImg = darkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

          return (
            <NotFoundCard bgColor={darkTheme}>
              <NotFoundImg src={notFoundImg} alt="not found" />
              <NotFoundHead bgColor={darkTheme}>Page Not Found</NotFoundHead>
              <NotFoundPara>
                we are sorry, the page you requested could not be found.
              </NotFoundPara>
            </NotFoundCard>
          )
        }}
      </SavedContext.Consumer>
    </NotFoundContainer>
  </>
)

export default NotFound
