import React from 'react';
import styled from 'styled-components';
import bg from '../assets/images/login-bg.png';
import shotPizza from '../assets/images/pizza-short.png';
import metrics from '../styles/metrics';
import AuthActions from '../store/ducks/Auth';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getToken } from '../services/auth';

function Login(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  async function handleSubmit(e) {
    e.preventDefault();
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
            <input
              type='email'
              placeholder='Seu e-mail'
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <input
              type='password'
              placeholder='Senha secreta'
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 350px;
  input {
    font-size: 15px;
    color: #999999;
    border-radius: 5px;
    margin-bottom: 10px;
    height: 45px;
    padding-left: 10px;
    &:hover,
    &:focus {
      border: 1px solid #e5293e;
      box-shadow: 0 0 0 3px rgba(229, 41, 62, 0.35);
      outline: none;
    }
  }

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
