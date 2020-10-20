import React from 'react';
import styled, { css } from 'styled-components';
import metrics from '../styles/metrics';
import * as util from '../styles/util';
import pizzaImage from '../assets/images/pizza-short.png';
import shoppingBag from '../assets/images/shopping-bag.png';

function Header() {
  const [mobile, setMobile] = React.useState(false);

  React.useEffect(() => {
    function isMobile() {
      const { matches } = window.matchMedia('(max-width:40rem)');
      setMobile(matches);
    }
    window.addEventListener('resize', isMobile);
    isMobile();
  }, []);
  function logout() {
    localStorage.removeItem('persist:rootPizzaDelivery');
    /*eslint-disable*/
    location.reload(); 
  }
  return (
    <HeaderLayout>
      <Container>
        <Logo>
          <img src={pizzaImage} alt='pizza logo' />
          <h1>Pizza delivery</h1>
        </Logo>
        <UserInfo>
          <div>
            <span>Duane Faria</span>
            <Logout onClick={logout}>Sair do app</Logout>
          </div>
          {!mobile && (
            <>
              <LitleBar />
              <CicleBuy />
            </>
          )}
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
  padding: 0 1rem;
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
    font-size: 1rem;
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
