import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 10px;
`;

export const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 4px;
  margin-right: 10px;
`;

export const Name = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`;
