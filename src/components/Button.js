import styled from 'styled-components';

export default styled.button`
  margin-top: 15px;
  color: #fff;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary.dark};
  border: 2px solid #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  height: 52px;
  border-radius: 4px;
  outline: none;
  font-size: 16px;
  transition: background 0.2s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background:  ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    background: #ccc;
    cursor: default;
  }
`;
