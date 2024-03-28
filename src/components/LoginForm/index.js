import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import SavedContext from '../../context/SavedContext'

import {
  MainContainer,
  LoginCard,
  ChannelImg,
  Form,
  InputCard,
  Label,
  Input,
  CheckboxCard,
  InputCheckbox,
  CheckboxLabel,
  LoginButton,
  ErrorText,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    isActive: false,
    errorActive: false,
    errorMsg: '',
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 5})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({errorActive: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeCheckbox = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  render() {
    const {username, password, isActive, errorMsg, errorActive} = this.state
    const changeType = isActive ? 'text' : 'password'

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <SavedContext.Consumer>
        {value => {
          const {darkTheme} = value
          const changeLogo = darkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <MainContainer bgColor={darkTheme}>
              <LoginCard bgColor={darkTheme}>
                <ChannelImg src={changeLogo} alt="website logo" />

                <Form onSubmit={this.onSubmitForm}>
                  <InputCard>
                    <Label htmlFor="username" text={darkTheme}>
                      USERNAME
                    </Label>
                    <Input
                      type="text"
                      id="username"
                      placeholder="Username"
                      value={username}
                      onChange={this.onChangeUsername}
                      bgColor={darkTheme}
                    />
                  </InputCard>

                  <InputCard>
                    <Label htmlFor="password" text={darkTheme}>
                      PASSWORD
                    </Label>
                    <Input
                      type={changeType}
                      id="password"
                      placeholder="Password"
                      value={password}
                      onChange={this.onChangePassword}
                      bgColor={darkTheme}
                    />
                  </InputCard>

                  <CheckboxCard>
                    <InputCheckbox
                      type="checkbox"
                      id="showPassword"
                      onChange={this.onChangeCheckbox}
                    />
                    <CheckboxLabel htmlFor="showPassword" text={darkTheme}>
                      Show Password
                    </CheckboxLabel>
                  </CheckboxCard>

                  <LoginButton type="submit">Login</LoginButton>
                  {errorActive ? <ErrorText>*{errorMsg}</ErrorText> : null}
                </Form>
              </LoginCard>
            </MainContainer>
          )
        }}
      </SavedContext.Consumer>
    )
  }
}

export default LoginForm
