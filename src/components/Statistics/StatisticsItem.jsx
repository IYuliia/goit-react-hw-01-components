import PropTypes from 'prop-types';
import { List, Item, Label, Percentage } from './StatisticsItem.styled';

export default function StatisticsItem({ data }) {
  return (
    <List className="stat-list">
      {data.map(item => (
        <Item className="item" key={item.id}>
          <Label className="label">{item.label}</Label>
          <Percentage className="percentage">{item.percentage}%</Percentage>
        </Item>
      ))}
    </List>
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
