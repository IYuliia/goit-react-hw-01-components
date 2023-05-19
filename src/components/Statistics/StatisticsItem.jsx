import PropTypes from 'prop-types';

export default function StatisticsItem({ data }) {
  return (
    <ul className="stat-list">
      {data.map(item => (
        <li className="item" key={item.id}>
          <span className="label">{item.label}</span>
          <span className="percentage">{item.percentage}%</span>
        </li>
      ))}
    </ul>
  );
}

StatisticsItem.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
