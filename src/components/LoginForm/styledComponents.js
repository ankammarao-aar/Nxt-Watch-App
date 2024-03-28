import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.bgColor ? '#181818' : null)};
`

export const LoginCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 4px 18px 4px ${props => (props.bgColor ? null : '#f1f1f1')};
  padding: 22px;
  border-radius: 10px;
`

export const ChannelImg = styled.img`
  height: 28px;
  margin-top: 12px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    height: 36px;
    margin-top: 16px;
    margin-bottom: 40px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
`

export const InputCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
`

export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: bold;
  color: ${props => (props.text ? '#ffffff' : '#7e858e')};
  margin-bottom: 6px;

  @media screen and (min-width: 768px) {
    font-size: 10px;
  }
`

export const Input = styled.input`
  font-family: 'Roboto';
  width: 260px;
  padding: 8px;
  padding-left: 14px;
  border-radius: 4px;
  border: 1px solid ${props => (props.bgColor ? '#475569' : '#e2e8f0')};
  background-color: ${props => (props.bgColor ? '#181818' : null)};
  color: ${props => (props.bgColor ? '#ffffff' : null)};
  outline: none;

  @media screen and (min-width: 768px) {
    width: 300px;
  }
`
export const CheckboxCard = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 28px;
`

export const InputCheckbox = styled.input`
  font-family: 'Roboto';
  margin-right: 10px;
  outline: none;
`

export const CheckboxLabel = styled.label`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => (props.text ? '#ffffff' : '#0f0f0f')};
`

export const LoginButton = styled.button`
  font-family: 'Roboto';
  font-weight: bold;
  background-color: #3b82f6;
  color: #ffffff;
  padding: 8px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  outline: none;
`
export const ErrorText = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #ff0b37;
  margin-bottom: 0px;
`
