import React from 'react';
import styled, { css } from 'styled-components';
import metrics from '../styles/metrics';
import * as util from '../styles/util';
import pizzaImage from '../assets/images/pizza-short.png';
import shoppingBag from '../assets/images/shopping-bag.png';

function Header() {
  return (
    <HeaderLayout>
      <Container>
        <Logo>
          <img src={pizzaImage} alt='pizza logo' />
          <h1>Pizzaria do Dudu</h1>
        </Logo>
        <UserInfo>
          <div>
            <span>Duane Faria</span>
            <Logout>Sair do app</Logout>
          </div>
          <LitleBar />
          <CicleBuy />
        </UserInfo>
      </Container>
    </HeaderLayout>
  );
}

export default Header;

const HeaderLayout = styled.header`
  height: 80px;
  ${util.flexRowCenter}
  flex: 1;
  flex-grow: 0;
  background: #0b2031;
`;

const Container = styled.div`
  width: ${metrics.container};
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  img {
    height: 45px;
    width: 45px;
    margin-right: 10px;
  }
  ${util.flexColCenter}
  h1 {
    color: #ffffff;
    font-size: 18px;
  }
`;

const UserInfo = styled.div`
  color: #ffffff;
  ${util.flexCenterAll}
  div {
    display: flex;
    flex-direction: column;
  }
`;

const Logout = styled.span`
  opacity: 0.6;
  font-family: Helvetica;
  font-size: 14px;
  color: #ffffff;
  text-align: right;
  margin-top: 5px;
  &:hover {
    ${util.hand}
  }
`;

const LitleBar = styled.div`
  height: 45px;
  width: 1px;
  background: #ffffff;
  margin-left: 25px;
  opacity: 0.2;
`;

const CicleBuy = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #e5293e url(${shoppingBag}) no-repeat 10px 10px;
  background-size: 18px;
  margin-left: 20px;
  ${util.hand}
`;
