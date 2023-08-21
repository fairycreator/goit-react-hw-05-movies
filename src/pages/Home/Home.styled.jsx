import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Main = styled.main`
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const StyledItem = styled.li`
  margin-bottom: 10px;
`;

export const MovieLink = styled(Link)`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
