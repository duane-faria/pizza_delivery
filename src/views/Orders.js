import React from 'react';
import styled, { css } from 'styled-components';
import Header from '../components/Header';
import OrderCard from '../components/OrderCard';
import metrics from '../styles/metrics';
import * as util from '../styles/util';

function Orders() {
  return (
    <>
      <Container>
        <Header />
        <Content>
          <div>
            <h2>Últimos pedidos</h2>
          </div>
          <OrderCard />
        </Content>
      </Container>
    </>
  );
}

export default Orders;

const Container = styled.div`
  height: 100%;
`;
const Content = styled.div`
  height: 100%;
  padding-top: 35px;
  div {
    display: block;
    margin: 0 auto;
    max-width: 650px;
    margin-bottom: 15px;
    h2 {
      font-family: 'Helvetica';
      font-size: 18px;
      color: #333333;
      text-align: left;
    }
  }
`;
