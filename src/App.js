import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import SavedContext from './context/SavedContext'

import './App.css'

// Replace your code here
class App extends Component {
  state = {savedList: [], darkTheme: false, activeTab: 'Home'}

  changeActiveTab = tab => {
    this.setState({activeTab: tab})
  }

  toggleDarkTheme = () => {
    this.setState(prevState => ({
      darkTheme: !prevState.darkTheme,
    }))
  }

  addSavedItem = videos => {
    const {savedList} = this.state
    const index = savedList.findIndex(each => each.id === videos.id)
    if (index === -1) {
      this.setState({savedList: [...savedList, videos]})
    } else {
      savedList.splice(index, 1)
      this.setState({savedList})
    }
  }

  deleteSavedItem = id => {
    const {savedList} = this.state
    const remove = savedList.filter(each => each.id !== id)
    this.setState({
      savedList: remove,
    })
  }

  render() {
    const {savedList, darkTheme, activeTab} = this.state

    return (
      <SavedContext.Provider
        value={{
          savedList,
          addSavedItem: this.addSavedItem,
          deleteSavedItem: this.deleteSavedItem,
          darkTheme,
          toggleDarkTheme: this.toggleDarkTheme,
          activeTab,
          changeActiveTab: this.changeActiveTab,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </SavedContext.Provider>
    )
  }
}

export default App
