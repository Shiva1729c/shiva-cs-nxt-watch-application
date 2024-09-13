import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: #f8fafc;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 40px;
  border-radius: 10px;
  padding: 50px;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`

export const ImageElement = styled.img`
  width: 110px;
  height: 30px;
  margin-bottom: 50px;
`
export const FormContainer = styled.form`
  width: 100%;
`

export const LabelElement = styled.label`
  font-family: 'Roboto';
  font-weight: ${props => (props.checkbox ? '400' : '500')};
  color: ${props => (props.checkbox ? ' #0f0f0f' : '#475569')};
  font-size: 14px;
`

export const InputElement = styled.input`
  height: 36px;
  border: 1px solid #64748b;
  border-radius: 2px;
  margin-top: 5px;
  margin-bottom: 10px;
  width: ${props => (props.checkbox ? '15px' : '100%')};
`

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ButtonElement = styled.button`
  width: 100%;
  border-radius: 8px;
  height: 30px;
  color: #f4f4f4;
  background-color: #3b82f6;
  border: none;
  outline: none;
  cursor: pointer;
`
