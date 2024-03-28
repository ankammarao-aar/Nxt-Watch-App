import {formatDistanceToNow} from 'date-fns'

import SavedContext from '../../context/SavedContext'

import {
  LinkItem,
  ListItem,
  ThumbNail,
  ChannelCard,
  ChannelImg,
  DetailsCard,
  Name,
  ViewCard,
  ViewCount,
  Title,
  PublishText,
  Dot,
} from './styledComponents'

const Videos = props => (
  <SavedContext.Consumer>
    {value => {
      const {darkTheme, changeActiveTab} = value

      const {videoDetails} = props
      const {
        id,
        title,
        thumbnailUrl,
        name,
        profileImageUrl,
        viewCount,
        publishedAt,
      } = videoDetails

      const onClickItem = () => {
        changeActiveTab('')
      }

      const publishDate = formatDistanceToNow(new Date(publishedAt))

      return (
        <LinkItem to={`/videos/${id}`} onClick={onClickItem}>
          <ListItem>
            <ThumbNail src={thumbnailUrl} alt="video thumbnail" />
            <ChannelCard>
              <ChannelImg src={profileImageUrl} alt="channel logo" />
              <DetailsCard>
                <Title text={darkTheme}>{title}</Title>
                <Name>{name}</Name>
                <ViewCard>
                  <ViewCount>{viewCount} views</ViewCount>
                  <Dot>
                    <PublishText>{publishDate}</PublishText>
                  </Dot>
                </ViewCard>
              </DetailsCard>
            </ChannelCard>
          </ListItem>
        </LinkItem>
      )
    }}
  </SavedContext.Consumer>
)

export default Videos
