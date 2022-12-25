import PropTypes from 'prop-types';
import { StatisticsContainer } from './Statistics.styled';

export default function Statistics({}) {
  return (
    <StatisticsContainer>
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        <li className="item">
          <span className="label">.docx</span>
          <span className="percentage">4%</span>
        </li>
        <li className="item">
          <span className="label">.mp3</span>
          <span className="percentage">14%</span>
        </li>
        <li className="item">
          <span className="label">.pdf</span>
          <span className="percentage">41%</span>
        </li>
        <li className="item">
          <span className="label">.mp4</span>
          <span className="percentage">12%</span>
        </li>
      </ul>
    </StatisticsContainer>
  );
}

// UserProfile.propTypes = {
//   avatarSrc: PropTypes.string.isRequired,
//   userName: PropTypes.string.isRequired,
//   userTag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   followersQuantity: PropTypes.number.isRequired,
//   viewsQuantity: PropTypes.number.isRequired,
//   likesQuantity: PropTypes.number.isRequired,
// };
