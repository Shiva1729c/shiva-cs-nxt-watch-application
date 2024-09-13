import {Component} from 'react'
import {
  LoginContainer,
  ImageElement,
  FormContainer,
  LabelElement,
  InputElement,
  ButtonElement,
  CheckBoxContainer,
} from './styledComponents'

class LoginForm extends Component {
  renderUserName = () => (
    <>
      <LabelElement htmlFor="username">USERNAME</LabelElement>
      <br />
      <InputElement type="text" id="username" placeholder="Username" />
      <br />
    </>
  )

  renderPassword = () => (
    <>
      <LabelElement htmlFor="password">PASSWORD</LabelElement>
      <br />
      <InputElement type="password" id="password" placeholder="Password" />
      <CheckBoxContainer>
        <InputElement type="checkbox" id="myCheckBox" checkbox />
        <LabelElement htmlFor="myCheckBox" checkbox>
          Show Password
        </LabelElement>
      </CheckBoxContainer>
    </>
  )

  render() {
    return (
      <LoginContainer>
        <ImageElement
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="website logo"
        />

        <FormContainer>
          {this.renderUserName()}
          {this.renderPassword()}
          <ButtonElement type="submit">Login</ButtonElement>
        </FormContainer>
      </LoginContainer>
    )
  }
}

export default LoginForm
