import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
  position: relative;
`;

export const InputSearchContainer = styled.div`
  /* margin-top: 48px; */
  width: 100%;

  input {
    width: 100%;
    background:"#fff";
    border: none;
    border-radius: 25px;
    height: 50px;
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.04));
    outline: 0;
    padding:  0 16px;

    &&::placeholder {
      color: #BCBCBC;
    }

  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
  strong {
    font-size: 24px;
    color: #222;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    padding: 8px 16px;
    border-radius: 4px;
    transition: all 0.2s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }
`;

export const ListContainer = styled.div`
  margin-top: 24px;

  header {
    .sort-button {
    background: transparent;
    margin-bottom: 8px;
    border: none;
    display: flex;
    align-items: center;

    span {
      margin-right: 12px;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
  }

`;

export const Cards = styled.div`
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 16px;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;

      small {
        background: ${({ theme }) => theme.colors.primary.lighter};
        color: ${({ theme }) => theme.colors.primary.main};
        font-weight: bold;
        text-transform: uppercase;
        padding: 4px;
        border-radius: 4px;
        margin-left: 8px;
      }
    }

    span {
      display: block;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.grey[200]};
    }

  }

  .actions {
      display: flex;
      align-items: center;
      button {
        color: aqua;
        background: transparent;
        border: none;
        margin-left: 8px;
      }
    }

`;
