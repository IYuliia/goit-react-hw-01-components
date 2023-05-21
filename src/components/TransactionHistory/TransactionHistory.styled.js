import styled from '@emotion/styled';

export const Table = styled.table`
  width: 400px;
  margin-bottom: 50px;
`;

export const TableHeader = styled.thead`
  background-color: #01bdd5;
`;

export const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #eaf8e6;
  }
`;

export const TableHeaderCell = styled.th`
  padding: 10px;
  font-weight: bold;
  text-align: left;
  font-size: 25px;
`;
