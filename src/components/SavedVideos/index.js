import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import Navbar from '../Navbar'
import VideosTwo from '../VideosTwo'
import SavedContext from '../../context/SavedContext'

import {
  SavedMainContainer,
  SavedContainer,
  SavedHeadingCard,
  FirIconCard,
  SavedHead,
  SavedListContainer,
  NoSavedContainer,
  NoSavedImg,
  NoSavedHead,
  NoSavedPara,
} from './styledComponents'

const SavedVideos = () => (
  <>
    <Header />
    <SavedMainContainer>
      <Navbar />

      <SavedContext.Consumer>
        {value => {
          const {savedList, darkTheme} = value
          const savedResult = savedList.length === 0

          return savedResult ? (
            <SavedContainer bgColor={darkTheme} data-testid="savedVideos">
              <NoSavedContainer>
                <NoSavedImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <NoSavedHead bgColor={darkTheme}>
                  No saved videos found
                </NoSavedHead>
                <NoSavedPara bgColor={darkTheme}>
                  You can save your videos while watching them
                </NoSavedPara>
              </NoSavedContainer>
            </SavedContainer>
          ) : (
            <>
              <SavedContainer bgColor={darkTheme} data-testid="savedVideos">
                <SavedHeadingCard bgColor={darkTheme}>
                  <FirIconCard bgColor={darkTheme}>
                    <HiFire color="#ff0000" size={22} />
                  </FirIconCard>
                  <SavedHead bgColor={darkTheme}>Saved Videos</SavedHead>
                </SavedHeadingCard>

                <SavedListContainer>
                  {savedList.map(each => (
                    <VideosTwo key={each.id} details={each} />
                  ))}
                </SavedListContainer>
              </SavedContainer>
            </>
          )
        }}
      </SavedContext.Consumer>
    </SavedMainContainer>
  </>
)

export default SavedVideos
