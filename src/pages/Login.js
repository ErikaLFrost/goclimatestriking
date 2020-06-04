import React from 'react';
import styled from 'styled-components/macro';
import ButtonLink from 'components/ButtonLink';
import { Container, ContentWrap, ContentSection } from 'components/Layout';
import { Title24 } from 'shared/theme';
import { useStore } from 'store';

const imgUrl =
  'https://cdn.sanity.io/images/fx7rjpc4/production/06f1094b5d6b55f149f6c2c9a2f1545fadf0c8e6-1380x938.png?w=800&q=80';

const Bg = styled.div`
  background-image: url(${imgUrl});
  background-position: center;
  background-size: cover;
  overflow: hidden;
  width: 100%;
`;
const LoginWrapper = styled(ContentWrap)`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-attachment: fixed;
`;

const Form = styled.div`
  padding: 0 100px;
  color: #000;
  width: 540px;
  max-width: 95%;
  flex: 1;
  h2 {
    ${Title24}
  }
  label {
    font-size: 13px;
    line-height: 1.38;
    padding-bottom: 0.36em;
    display: block;
    text-transform: uppercase;
  }
  input {
    border: solid 1px rgba(0, 0, 0, 0.2);
    background: none;
    color: #000;
    display: block;
    font-size: 20px;
    line-height: 54px;
    padding: 0 15px;
    width: 100%;
  }
  button {
    background-color: #7c6363;
    color: #fff;
    float: right;
  }
  @media (max-width: 600px) {
    padding: 0 30px;
    margin: 0 auto;
  }
`;

const Content = styled(ContentSection)`
  max-width: 95%;
`;

const Login = () => {
  const [input, setInput] = React.useState('');
  const { actions } = useStore();

  const handleInput = e => {
    setInput(e.target.value);
  };

  return (
    <Bg>
      <LoginWrapper>
        <Content>
          <Container>
            <Form>
              <h2>Login</h2>
              <label htmlFor="login">Password</label>
              <input
                id="login"
                name="password"
                onKeyDown={e => {
                  e.keyCode === 13 && actions.setPassword(input);
                }}
                onChange={handleInput}
              />
              <ButtonLink
                as="button"
                onClick={() => actions.setPassword(input)}
              >
                Login
              </ButtonLink>
            </Form>
          </Container>
        </Content>
      </LoginWrapper>
    </Bg>
  );
};

export default Login;
