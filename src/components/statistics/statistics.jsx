import PropTypes from "prop-types";
import s from "./statistics.module.css";

function Statistics({ title, stats }) {
  return (
    <section className={s.section}>
      <h2 className={s.header}>{title}</h2>
      <ul className={s.container}>
        {stats.map((s) => (
          <li key={s.id} className="item">
            <span className="label">{s.label}</span>
            <span className="percentage">{s.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
