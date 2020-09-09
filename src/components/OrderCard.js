import React from 'react';
import styled, { css } from 'styled-components';

function OrderCard() {
  return (
    <Container>
      <Header>
        <h3></h3>
      </Header>
      <Orders></Orders>
      <Observations></Observations>
    </Container>
  );
}

export default OrderCard;

const Container = styled.div`
  margin: 0 auto;
  height: 350px;
  max-width: 650px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  background: white;
  border-radius: 5px;
`;

const Header = styled.div`
  h3 {
    font-family: Helvetica;
    font-size: 18px;
    color: #0b2031;
    letter-spacing: 0;
    text-align: left;
  }
`;

const Orders = styled.div``;

const Observations = styled.div``;
