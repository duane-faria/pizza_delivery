import React from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import Header from '../components/Header';
import OrderCard from '../components/OrderCard';
import OrderActions from '../store/ducks/Order';
import socketIOClient from 'socket.io-client';
import { baseURL } from '../services/api';

function Orders({ dispatch, order }) {
  React.useEffect(() => {
    async function data() {
      await dispatch(OrderActions.loadRequest());
    }
    data();
  }, [dispatch]);

  React.useEffect(() => {
    const socket = socketIOClient(baseURL);
    socket.on('message', async (data) => {
      console.log(data);
      await dispatch(OrderActions.loadRequest());
    });
  }, [dispatch]);

  return (
    <>
      <Header />
      <Container>
        <Content>
          <Title>
            <h2>Últimos pedidos</h2>
          </Title>
          {order.data.docs &&
            order.data.docs.map((orderr, index) => {
              return (
                <OrderCard
                  order={orderr}
                  index={orderr.orderNumber}
                  key={orderr._id}
                />
              );
            })}
        </Content>
      </Container>
    </>
  );
}

const mapStateToProps = (state) => ({
  order: state.Order,
});

export default connect(mapStateToProps)(Orders);

const Container = styled.div`
  height: 100%;
  padding: 1rem;
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
