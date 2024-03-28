import {Component} from 'react'
import Cookies from 'js-cookie'
import {MdSearch, MdClose} from 'react-icons/md'
import Loader from 'react-loader-spinner'

import SavedContext from '../../context/SavedContext'

import Header from '../Header'
import Navbar from '../Navbar'
import Videos from '../Videos'

import {
  HomeMainContainer,
  AllVideosMainContainer,
  BannerCard,
  BannerImgCard,
  BannerImg,
  BannerCloseBtn,
  BannerText,
  BannerButton,
  SearchCard,
  Input,
  SearchButton,
  ListContainer,
  LoaderContainer,
  NoSearchContainer,
  NoSearchImg,
  NoSearchHead,
  NoSearchPara,
  NoSearchButton,
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

class Home extends Component {
  state = {
    videosList: [],
    search: '',
    apiStatus: apiStatusConstants.initial,
    banner: 'flex',
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    const {search} = this.state
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${search}`
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
        videosList: updatedData,
        isResponse: true,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onClickNoSearch = () => {
    this.setState({search: ''}, this.getVideos)
  }

  renderSuccessView = () => {
    const {videosList, isResponse} = this.state

    if (isResponse) {
      const noResult = videosList.length === 0

      return noResult ? (
        <SavedContext.Consumer>
          {value => {
            const {darkTheme} = value

            return (
              <NoSearchContainer>
                <NoSearchImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                  alt="no videos"
                />
                <NoSearchHead text={darkTheme}>
                  No Search results found
                </NoSearchHead>
                <NoSearchPara>
                  Try different key words or remove search filter
                </NoSearchPara>
                <NoSearchButton type="button" onClick={this.onClickNoSearch}>
                  Retry
                </NoSearchButton>
              </NoSearchContainer>
            )
          }}
        </SavedContext.Consumer>
      ) : (
        <>
          <ListContainer>
            {videosList.map(each => (
              <Videos videoDetails={each} key={each.id} />
            ))}
          </ListContainer>
        </>
      )
    }
    return null
  }

  renderLoadingView = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoaderContainer>
  )

  onClickRetry = () => {
    this.getVideos()
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

  onClickCloseBanner = () => {
    this.setState({banner: 'none'})
  }

  onChangeSearchInput = event => {
    this.setState({search: event.target.value})
  }

  getSearchResult = () => {
    this.getVideos()
  }

  renderHomeRout = () => {
    const {search, banner} = this.state

    return (
      <SavedContext.Consumer>
        {value => {
          const {darkTheme} = value
          const searchIcon = <MdSearch size={20} />
          const close = <MdClose size={18} />

          return (
            <>
              <BannerCard data-testid="banner" banner={banner}>
                <BannerImgCard>
                  <BannerImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="nxt watch logo"
                  />
                  <BannerText>
                    Buy Nxt Watch Premium prepaid plans with UPI
                  </BannerText>
                  <BannerButton type="button">GET IT NOW</BannerButton>
                </BannerImgCard>
                <BannerCloseBtn
                  type="button"
                  onClick={this.onClickCloseBanner}
                  data-testid="close"
                >
                  {close}
                </BannerCloseBtn>
              </BannerCard>

              <SearchCard bgColor={darkTheme}>
                <Input
                  type="search"
                  value={search}
                  placeholder="Search"
                  onChange={this.onChangeSearchInput}
                  bgColor={darkTheme}
                />
                <SearchButton
                  type="button"
                  data-testid="searchButton"
                  onClick={this.getSearchResult}
                  bgColor={darkTheme}
                >
                  {searchIcon}
                </SearchButton>
              </SearchCard>

              {this.renderSwitchView()}
            </>
          )
        }}
      </SavedContext.Consumer>
    )
  }

  render() {
    return (
      <>
        <Header />
        <HomeMainContainer>
          <Navbar />

          <SavedContext.Consumer>
            {value => {
              const {darkTheme} = value

              return (
                <AllVideosMainContainer bgColor={darkTheme} data-testid="home">
                  {this.renderHomeRout()}
                </AllVideosMainContainer>
              )
            }}
          </SavedContext.Consumer>
        </HomeMainContainer>
      </>
    )
  }
}

export default Home
