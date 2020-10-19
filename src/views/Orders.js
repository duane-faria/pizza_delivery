import React from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import Header from '../components/Header';
import OrderCard from '../components/OrderCard';
import Creators from '../store/ducks/Order';

function Orders({ dispatch, order }) {
  React.useEffect(() => {
    async function data() {
      await dispatch(Creators.loadRequest());
    }
    data();
  }, [dispatch]);

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
    {
      client: 'Gabriel Souza',
      time: 'há 6 minutos',
      observations: 'Favor remover azeitonas',
      price: 25.69,
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
      <Header />
      <Container>
        <Content>
          <Title>
            <h2>Últimos pedidos</h2>
          </Title>
          {order.data &&
            order.data.map((orderr, index) => {
              return (
                <OrderCard order={orderr} index={index} key={orderr._id} />
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
