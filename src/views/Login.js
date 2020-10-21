import React from 'react';
import styled from 'styled-components';
import bg from '../assets/images/login-bg.png';
import shotPizza from '../assets/images/pizza-short.png';
import metrics from '../styles/metrics';
import AuthActions from '../store/ducks/Auth';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getToken } from '../services/auth';
import { useToasts } from 'react-toast-notifications';

function Login(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);

  function validate(target, setData) {
    if (!target.value.length) {
      setData(true);
      return false;
    } else {
      setData(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (emailError || passwordError) {
      return;
    }
    props.dispatch(
      AuthActions.loginRequest({
        email,
        password,
      })
    );
  }

  if (getToken()) return <Redirect to='/pedidos' />;
  else
    return (
      <Wrapper>
        <Container>
          <img src={shotPizza} alt='Pequena pizza' />
          <Form onSubmit={handleSubmit}>
            <Input
              type='email'
              placeholder='Seu e-mail'
              value={email}
              onChange={({ target }) => {
                validate(target, setEmailError);
                setEmail(target.value);
              }}
              onBlur={({ target }) => validate(target, setEmailError)}
            />
            {emailError && <ErrorMessage>Preencha o e-mail</ErrorMessage>}
            <Input
              type='password'
              placeholder='Senha secreta'
              value={password}
              onChange={({ target }) => {
                validate(target, setPasswordError);
                setPassword(target.value);
              }}
              onBlur={({ target }) => validate(target, setPasswordError)}
            />
            {passwordError && <ErrorMessage>Preencha a senha</ErrorMessage>}
            <button>Entrar</button>
          </Form>
        </Container>
      </Wrapper>
    );
}

const mapStateToProps = (state) => ({
  Auth: state.Auth,
});

export default connect(mapStateToProps)(Login);

const Wrapper = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1)), url(${bg});
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-size: cover;
  justify-content: center;
  align-items: center;
  img {
    width: 90px;
    height: 90px;
    margin-bottom: 10px;
  }
`;

const Container = styled.div`
  max-width: ${metrics.container};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input.attrs((props) => {
  if (props.error) {
    return {
      placeholderTextColor: '#fff',
    };
  }
})`
  font-size: 15px;
  color: #999999;
  border-radius: 5px;
  margin-bottom: 10px;
  height: 45px;
  padding-left: 10px;
  ${(props) => {
    if (props.error) {
      return `
      background:tomato;
      color:white;
      `;
    }
  }}
  &:hover,
  &:focus {
    border: 1px solid #e5293e;
    box-shadow: 0 0 0 3px rgba(229, 41, 62, 0.35);
    outline: none;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 350px;

  button {
    background: #e5293e;
    color: #fff;
    height: 45px;
    border-radius: 5px;
    &:hover {
      cursor: pointer;
      background: #ab1425;
    }
    font-size: 15px;
    color: #ffffff;
    letter-spacing: 0;
  }
`;

const ErrorMessage = styled.small`
  color: red;
  margin-top: -5px;
  margin-bottom: 15px;
`;
