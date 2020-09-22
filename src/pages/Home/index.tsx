import React, {
  useState,
} from 'react';

import { FiChevronLeft, FiChevronRight, FiSend } from 'react-icons/fi';

import {
  Container,
  Left,
  Right,
  InputContainer,
  Input,
  ProfileList,
  Profile,
  Content,
  ButtonsContainer,
} from './styles';

const Home = () => {
  const [tweet, setTweet] = useState('');

  const handleSubmit = () => {
    console.log('Submit');
  };

  return (
    <Container>
      <Left>
        <h1>TweetsQl</h1>
        <h3>
          The new and the fast way to
          <br />
          {' '}
          tweet using Apollo & GraphQl
        </h3>
      </Left>
      <Right>
        <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <InputContainer>
            <Input
              placeholder="What's happening?"
              onChange={(e) => setTweet(e.target.value)}
              value={tweet}
            />
            <button type="submit">
              <FiSend size={22} color="#fff" />
              Tweet
            </button>
          </InputContainer>
        </form>

        <ProfileList>
          <Profile>
            <Content>
              <h2>Teste</h2>
              <p>Autor de teste</p>
              <p>À 10 minutos</p>
            </Content>
          </Profile>
        </ProfileList>

        <ButtonsContainer>
          <button
            type="button"
            onClick={() => {}}
          >
            <FiChevronLeft size={25} color="#55409C" />
            Previous
          </button>
          <button
            type="button"
            onClick={() => {}}
          >
            Next
            <FiChevronRight size={25} color="#55409C" />
          </button>
        </ButtonsContainer>
      </Right>
    </Container>
  );
};

export default Home;
