import React from 'react';
import styled from 'styled-components';
import bg from '../assets/images/login-bg.png';
import shotPizza from '../assets/images/pizza-short.png';
import { TextField } from '@material-ui/core';

function views() {
  return (
    <Wrapper>
      <Container>
        <img src={shotPizza} alt='Pequena pizza' />
        <Form>
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
    max-width: 70px;
    max-height: 70px;
    margin-bottom: 10px;
  }
`;

const Container = styled.div`
  max-width: 1175px;
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
  }

  button {
    background: tomato;
    color: #fff;
    height: 45px;
    border-radius: 5px;
    &:hover {
      cursor: pointer;
    }
  }
`;

export default views;
