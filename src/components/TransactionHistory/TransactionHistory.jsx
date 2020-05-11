import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  const { transactionHistory, tableHead, tableBody, transaction } = styles;
  return (
    <table className={transactionHistory}>
      <thead className={tableHead}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
      </thead>

      <tbody className={tableBody}>
      {items.map((elem) => {
        const {
          id, type, amount, currency,
        } = elem;
        return (
          <tr key={id} className={transaction}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        );
      })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
  })),
};

export default TransactionHistory;