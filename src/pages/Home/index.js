import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Header, ListContainer, Cards, InputSearchContainer,
} from './styles';

import arrow from '../../assets/images/icons/arrowup.svg';
import select from '../../assets/images/icons/select.svg';
import lixeira from '../../assets/images/icons/lixeira.svg';

export default function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="search" placeholder="Pesquisar contato" />
      </InputSearchContainer>
      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo contato</Link>
      </Header>
      <ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <img src={arrow} alt="arrow" />
          </button>
        </header>
        <Cards>
          <div className="info">
            <div className="contact-name">
              <strong>Marcelo Soares</strong>
              <small>Instagram</small>
            </div>
            <span>marcelosoaresinc@gmail.com</span>
            <span>(21) 9999-99999</span>
          </div>

          <div className="actions">
            <Link to="/edit/123">
              <img src={select} alt="Edit" />
            </Link>
            <button type="button">
              <img src={lixeira} alt="Excluir" />
            </button>
          </div>
        </Cards>
      </ListContainer>
    </Container>
  );
}
