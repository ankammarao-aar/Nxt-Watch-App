import {formatDistanceToNow} from 'date-fns'
import SavedContext from '../../context/SavedContext'

import {
  LinkItem,
  TrendListItem,
  TrendThumbNail,
  TrendChannelCard,
  TrendProfile,
  TrendDetailCard,
  TrendTitle,
  TrendName,
  TrendViewCard,
  TrendViewCount,
  PublishText,
  Dot,
} from './styledComponents'

const VideosTwo = props => (
  <SavedContext.Consumer>
    {value => {
      const {darkTheme, changeActiveTab} = value

      const {details} = props
      const {
        id,
        title,
        thumbnailUrl,
        name,
        profileImageUrl,
        viewCount,
        publishedAt,
      } = details

      const onClickItem = () => {
        changeActiveTab('')
      }

      const publishDate = formatDistanceToNow(new Date(publishedAt))

      return (
        <LinkItem to={`/videos/${id}`} onClick={onClickItem}>
          <TrendListItem>
            <TrendThumbNail src={thumbnailUrl} alt="video thumbnail" />
            <TrendChannelCard>
              <TrendProfile src={profileImageUrl} alt="channel logo" />
              <TrendDetailCard>
                <TrendTitle text={darkTheme}>{title}</TrendTitle>
                <TrendName>{name}</TrendName>
                <TrendViewCard>
                  <TrendViewCount>{viewCount} views</TrendViewCount>
                  <Dot>
                    <PublishText>{publishDate}</PublishText>
                  </Dot>
                </TrendViewCard>
              </TrendDetailCard>
            </TrendChannelCard>
          </TrendListItem>
        </LinkItem>
      )
    }}
  </SavedContext.Consumer>
)

export default VideosTwo
