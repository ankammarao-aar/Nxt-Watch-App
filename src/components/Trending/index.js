import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import Navbar from '../Navbar'
import VideosTwo from '../VideosTwo'
import SavedContext from '../../context/SavedContext'

import {
  TrendingMainContainer,
  TrendCard,
  TrendingHeadingCard,
  FirIconCard,
  TrendHead,
  TrendListContainer,
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

class Trending extends Component {
  state = {trendingVideosList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getTrendVideos()
  }

  getTrendVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
        publishedAt: each.published_at,
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
      }))
      this.setState({
        trendingVideosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderSuccessView = () => {
    const {trendingVideosList} = this.state

    return (
      <SavedContext.Consumer>
        {value => {
          const {darkTheme} = value

          return (
            <>
              <TrendingHeadingCard bgColor={darkTheme}>
                <FirIconCard bgColor={darkTheme}>
                  <HiFire color="#ff0000" size={22} />
                </FirIconCard>
                <TrendHead bgColor={darkTheme}>Trending</TrendHead>
              </TrendingHeadingCard>

              <TrendListContainer>
                {trendingVideosList.map(each => (
                  <VideosTwo key={each.id} details={each} />
                ))}
              </TrendListContainer>
            </>
          )
        }}
      </SavedContext.Consumer>
    )
  }

  renderLoadingView = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoaderContainer>
  )

  onClickRetry = () => {
    this.getTrendVideos()
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
        <TrendingMainContainer>
          <Navbar />

          <SavedContext.Consumer>
            {value => {
              const {darkTheme} = value

              return (
                <TrendCard data-testid="trending" bgColor={darkTheme}>
                  {this.renderSwitchView()}
                </TrendCard>
              )
            }}
          </SavedContext.Consumer>
        </TrendingMainContainer>
      </>
    )
  }
}

export default Trending
