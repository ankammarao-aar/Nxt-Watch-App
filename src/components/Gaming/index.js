import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import Navbar from '../Navbar'
import GamingVideos from '../GamingVideos'
import SavedContext from '../../context/SavedContext'

import {
  GamingMainContainer,
  GamCard,
  GamingHeadingCard,
  GameIconCard,
  GameHead,
  GameListContainer,
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

class Gaming extends Component {
  state = {gamingVideosList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getGameVideos()
  }

  getGameVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
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
      }))
      this.setState({
        gamingVideosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderSuccessView = () => {
    const {gamingVideosList} = this.state

    return (
      <SavedContext.Consumer>
        {value => {
          const {darkTheme} = value

          return (
            <>
              <GamingHeadingCard bgColor={darkTheme}>
                <GameIconCard bgColor={darkTheme}>
                  <SiYoutubegaming color="#ff0000" size={22} />
                </GameIconCard>
                <GameHead bgColor={darkTheme}>Gaming</GameHead>
              </GamingHeadingCard>

              <GameListContainer>
                {gamingVideosList.map(each => (
                  <GamingVideos key={each.id} gameVideoDetails={each} />
                ))}
              </GameListContainer>
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
    this.getGameVideos()
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
        <GamingMainContainer>
          <Navbar />

          <SavedContext.Consumer>
            {value => {
              const {darkTheme} = value

              return (
                <GamCard bgColor={darkTheme} data-testid="gaming">
                  {this.renderSwitchView()}
                </GamCard>
              )
            }}
          </SavedContext.Consumer>
        </GamingMainContainer>
      </>
    )
  }
}

export default Gaming
