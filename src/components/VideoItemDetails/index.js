import {Component} from 'react'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'

import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from 'react-icons/ai'
import {RiPlayListAddFill} from 'react-icons/ri'

import Header from '../Header'
import Navbar from '../Navbar'
import SavedContext from '../../context/SavedContext'

import {
  VideoItemMainContainer,
  VideoItemCard,
  VideoItemListContainer,
  VideoItemListItem,
  VideoTitle,
  VideoViewAndLikesCard,
  VideoViewCard,
  ViewCount,
  PublishText,
  Dot,
  VideoLikesCard,
  LikeButton,
  DislikeBtn,
  SaveBtn,
  LikeText,
  Line,
  ProfileCard,
  ProfileImg,
  DescriptionCard,
  DescName,
  SubCount,
  Description,
  LoaderContainer,
  FailureContainer,
  FailureImg,
  FailureHead,
  FailurePara,
  FailureButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    videoItemDataList: [],
    apiStatus: apiStatusConstants.initial,
    isLike: false,
    isDislike: false,
  }

  componentDidMount() {
    this.getVideoItems()
  }

  getVideoItems = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const data = await response.json()
      const updatedData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
        name: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
      }
      this.setState({
        videoItemDataList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  getListItem = () => (
    <SavedContext.Consumer>
      {value => {
        const {addSavedItem, darkTheme, deleteSavedItem, savedList} = value

        const {videoItemDataList, isLike, isDislike} = this.state

        const {
          id,
          title,
          videoUrl,
          viewCount,
          publishedAt,
          description,
          name,
          profileImageUrl,
          subscriberCount,
        } = videoItemDataList

        const onClickAddToSavedVideos = () => {
          addSavedItem({...videoItemDataList})
        }

        const onClickDelete = () => {
          deleteSavedItem(id)
        }

        const onClickLike = () => {
          this.setState(prevState => ({
            isLike: !prevState.isLike,
            isDislike: false,
          }))
        }

        const onClickDislike = () => {
          this.setState(prevState => ({
            isDislike: !prevState.isDislike,
            isLike: false,
          }))
        }

        const publish = formatDistanceToNow(new Date(publishedAt))
        const Like = isLike ? (
          <AiFillLike size={16} />
        ) : (
          <AiOutlineLike size={16} />
        )
        const DisLike = isDislike ? (
          <AiFillDislike size={16} />
        ) : (
          <AiOutlineDislike size={16} />
        )
        const Save = <RiPlayListAddFill size={16} />

        let isSaved
        const index = savedList.findIndex(
          each => each.id === videoItemDataList.id,
        )
        if (index === -1) {
          isSaved = false
        } else {
          isSaved = true
        }
        const SavedColor = isSaved ? '#2563eb' : '#64748b'

        return (
          <VideoItemListItem>
            <ReactPlayer url={videoUrl} controls width="100%" height={400} />
            <VideoTitle text={darkTheme}>{title}</VideoTitle>

            <VideoViewAndLikesCard>
              <VideoViewCard>
                <ViewCount>{viewCount} views</ViewCount>
                <Dot>
                  <PublishText>{publish}</PublishText>
                </Dot>
              </VideoViewCard>

              <VideoLikesCard>
                <LikeButton type="button" onClick={onClickLike} text={isLike}>
                  {Like} Like
                </LikeButton>

                <DislikeBtn
                  type="button"
                  onClick={onClickDislike}
                  text={isDislike}
                >
                  {DisLike} Dislike
                </DislikeBtn>

                {isSaved ? (
                  <SaveBtn
                    type="button"
                    onClick={onClickDelete}
                    color={SavedColor}
                  >
                    {Save} <LikeText>Saved</LikeText>
                  </SaveBtn>
                ) : (
                  <SaveBtn
                    type="button"
                    onClick={onClickAddToSavedVideos}
                    color={SavedColor}
                  >
                    {Save} <LikeText>Save</LikeText>
                  </SaveBtn>
                )}
              </VideoLikesCard>
            </VideoViewAndLikesCard>

            <Line text={darkTheme} />

            <ProfileCard>
              <ProfileImg src={profileImageUrl} alt="channel logo" />

              <DescriptionCard>
                <DescName text={darkTheme}>{name}</DescName>
                <SubCount>{subscriberCount} subscribers</SubCount>
                <Description text={darkTheme}>{description}</Description>
              </DescriptionCard>
            </ProfileCard>
          </VideoItemListItem>
        )
      }}
    </SavedContext.Consumer>
  )

  renderSuccessView = () => (
    <VideoItemListContainer>{this.getListItem()}</VideoItemListContainer>
  )

  renderLoadingView = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoaderContainer>
  )

  onClickRetry = () => {
    this.getVideoItems()
  }

  renderFailureView = () => (
    <SavedContext.Consumer>
      {value => {
        const {darkTheme} = value
        const failedImg = darkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureContainer>
            <FailureImg src={failedImg} alt="failure view" />
            <FailureHead text={darkTheme}>
              Oops! Something Went Wrong
            </FailureHead>
            <FailurePara>
              We are having some trouble to complete your request. Please try
              again.
            </FailurePara>
            <FailureButton type="button" onClick={this.onClickRetry}>
              Retry
            </FailureButton>
          </FailureContainer>
        )
      }}
    </SavedContext.Consumer>
  )

  renderSwitchView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <VideoItemMainContainer>
          <Navbar />

          <SavedContext.Consumer>
            {value => {
              const {darkTheme} = value

              return (
                <VideoItemCard
                  bgColor={darkTheme}
                  data-testid="videoItemDetails"
                >
                  {this.renderSwitchView()}
                </VideoItemCard>
              )
            }}
          </SavedContext.Consumer>
        </VideoItemMainContainer>
      </>
    )
  }
}

export default VideoItemDetails
