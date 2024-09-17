import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  FormContainer,
  ImageElement,
  Form,
  LabelElement,
  InputElement,
  ButtonElement,
  CheckBoxContainer,
  LoginContainer,
  ErrorMsg,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    errMsg: '',
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderUserName = () => {
    const {username} = this.state
    return (
      <>
        <LabelElement htmlFor="username">USERNAME</LabelElement>
        <br />
        <InputElement
          type="text"
          id="username"
          placeholder="Username"
          onChange={this.onChangeUserName}
          value={username}
        />
        <br />
      </>
    )
  }

  toggleShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  renderPassword = () => {
    const {password, showPassword} = this.state
    return (
      <>
        <LabelElement htmlFor="password">PASSWORD</LabelElement>
        <br />
        <InputElement
          type={showPassword ? 'text' : 'password'}
          id="password"
          placeholder="Password"
          onChange={this.onChangePassword}
          value={password}
        />
        <CheckBoxContainer>
          <InputElement
            type="checkbox"
            id="myCheckBox"
            checkbox
            checked={showPassword}
            onChange={this.toggleShowPassword}
          />
          <LabelElement htmlFor="myCheckBox" checkbox>
            Show Password
          </LabelElement>
        </CheckBoxContainer>
      </>
    )
  }

  onSubmitFailure = errMsg => {
    this.setState({errMsg})
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {errMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginContainer>
        <FormContainer>
          <ImageElement
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />

          <Form onSubmit={this.onSubmitForm}>
            {this.renderUserName()}
            {this.renderPassword()}
            <ButtonElement type="submit">Login</ButtonElement>
            {errMsg && <ErrorMsg>*{errMsg}</ErrorMsg>}
          </Form>
        </FormContainer>
      </LoginContainer>
    )
  }
}

export default LoginForm
