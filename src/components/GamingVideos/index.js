import SavedContext from '../../context/SavedContext'

import {
  LinkItem,
  GameListItem,
  GameThumbNail,
  GameDetailCard,
  GameTitle,
  GameViewCount,
} from './styledComponents'

const GamingVideos = props => (
  <SavedContext.Consumer>
    {value => {
      const {darkTheme, changeActiveTab} = value

      const {gameVideoDetails} = props
      const {id, title, thumbnailUrl, viewCount} = gameVideoDetails

      const onClickItem = () => {
        changeActiveTab('')
      }

      return (
        <LinkItem to={`/videos/${id}`} onClick={onClickItem}>
          <GameListItem>
            <GameThumbNail src={thumbnailUrl} alt="video thumbnail" />
            <GameDetailCard>
              <GameTitle text={darkTheme}>{title}</GameTitle>
              <GameViewCount>{viewCount} Watching Worldwide</GameViewCount>
            </GameDetailCard>
          </GameListItem>
        </LinkItem>
      )
    }}
  </SavedContext.Consumer>
)

export default GamingVideos
