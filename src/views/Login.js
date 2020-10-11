import React from 'react';
import styled from 'styled-components';
import bg from '../assets/images/login-bg.png';
import shotPizza from '../assets/images/pizza-short.png';
import metrics from '../styles/metrics';
function views() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Wrapper>
      <Container>
        <img src={shotPizza} alt='Pequena pizza' />
        <Form onSubmit={handleSubmit}>
          <input type='email' placeholder='Seu e-mail' />
          <input type='password' placeholder='Senha secreta' />
          <button>Entrar</button>
        </Form>
      </Container>
    </Wrapper>
  );
}

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
      box-shadow: 0 0 0 3px rgba(229, 41, 62,.35);
      outline:none;
    }
  }

  button {
    background: #e5293e;
    color: #fff;
    height: 45px;
    border-radius: 5px;
    &:hover {
      cursor: pointer;
      background:#ab1425;
    }
    font-size: 15px;
    color: #ffffff;
    letter-spacing: 0;
  }
`;

export default views;
