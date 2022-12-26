import PropTypes from 'prop-types';
import { StatisticsContainer, StatTitle, StatList } from './Statistics.styled';
import StatItem from './StatItem';

export default function Statistics({ dataSet }) {
  return (
    <StatisticsContainer>
      <StatTitle>Upload stats</StatTitle>
      <StatList>
        {dataSet.map(item => (
          <StatItem
            key={item.id}
            statLabel={item.label}
            statPercentage={item.percentage}
          />
        ))}
      </StatList>
    </StatisticsContainer>
  );
}

Statistics.propTypes = {
  dataSet: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};
