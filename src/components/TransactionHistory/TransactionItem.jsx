import PropTypes from 'prop-types';
import { TableRow, TableDataCell } from './TransactionItem.styled';

export default function TransactionItem({ type, amount, currency }) {
  return (
    <>
      <TableRow>
        <TableDataCell>{type}</TableDataCell>
        <TableDataCell>{amount}</TableDataCell>
        <TableDataCell>{currency}</TableDataCell>
      </TableRow>
    </>
  );
}

TransactionItem.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
