import styled from '@emotion/styled';

export const Box = styled.div`
  width: 100%;
  max-width: 480px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px;
`;

export const Descr = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Tag = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`;

export const Location = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`;

export const Stats = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const Info = styled.li`
  text-align: center;
  padding: 10px;
  border: 1px #ccc solid;
  background-color: #f3f6f9;
`;

export const Label = styled.span`
  font-size: 14px;
  color: #666;
  display: block;
`;

export const Quantity = styled.span`
  font-size: 16px;
  font-weight: bold;
  display: block;
`;
