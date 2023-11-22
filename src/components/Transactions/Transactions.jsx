import propTypes from 'prop-types';
import transactions from '../Transactions/transactions.json';
import '../Transactions/Transactions.css';

export const TransactionHistory = ({ items }) => {
  return (
    <>
      <table className="trans-history">
        <thead className="table-head">
          <tr>
            <th className="table-head-row">Type</th>
            <th className="table-head-row">Amount</th>
            <th className="table-head-row">Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.type}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

TransactionHistory.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      amount: propTypes.string.isRequired,
      currency: propTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
