import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';
import {
  Table,
  TableHeader,
  TableRow,
  TableHeaderCell,
} from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <>
      <Table className="transaction-history">
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Type</TableHeaderCell>
            <TableHeaderCell>Amount</TableHeaderCell>
            <TableHeaderCell>Currency</TableHeaderCell>
          </TableRow>
        </TableHeader>

        <tbody>
          {items.map(item => (
            <TransactionItem
              key={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
