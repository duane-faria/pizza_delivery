import React from 'react';
import styled, { css } from 'styled-components';
import Header from '../components/Header';
import OrderCard from '../components/OrderCard';
import metrics from '../styles/metrics';
import * as util from '../styles/util';

function Orders() {
  const [orders, setOrders] = React.useState([
    {
      client: 'Duane Faria',
      time: 'há 2 minutos',
      observations: 'Colocar tomate extra',
      price: 50,
      orders: [
        {
          type: 'pizza',
          name: 'Pizza de queijo',
          imageUrl: '1.png',
          size: 'Média',
        },
      ],
    },
  ]);

  return (
    <>
      <Container>
        <Header />
        <Content>
          <Title>
            <h2>Últimos pedidos</h2>
          </Title>
          {orders.map((order, index) => {
            return <OrderCard order={order} index={index} key={index} />;
          })}
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
`;

const Title = styled.div`
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
`;
