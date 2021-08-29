import PropTypes from "prop-types";
import "./transaction-history.css";

function TransactionHistory({ items }) {
  return (
    <section className="transaction-section">
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((i) => (
            <tr key={i.id}>
              <td>{i.type}</td>
              <td>{i.amount}</td>
              <td>{i.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      currency: PropTypes.string,
      amount: PropTypes.string,
      type: PropTypes.string,
      id: PropTypes.string,
    })
  ).isRequired,
};

export default TransactionHistory;
