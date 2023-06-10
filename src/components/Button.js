import styled, { css } from "styled-components";

export default styled.button`
  margin-top: 15px;
  color: #fff;
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.primary.dark};
  border: 2px solid #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  height: 52px;
  border-radius: 6px;
  outline: none;
  font-size: 16px;
  transition: background 0.2s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    background: #ccc;
    cursor: default;
  }

  ${({ theme, danger }) => danger
    && css`
      background: ${theme.colors.danger.main};

      &:hover {
        background: ${theme.colors.danger.light};
      }

      &:active {
        background: ${theme.colors.primary.dark};
      }
    `}
`;
