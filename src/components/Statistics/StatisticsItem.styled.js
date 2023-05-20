import styled from '@emotion/styled';

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  list-style-type: none;
  padding: 0;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 8px;
`;

export const Label = styled.div`
  font-size: 14px;
  color: #666;
`;

export const Percentage = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;
