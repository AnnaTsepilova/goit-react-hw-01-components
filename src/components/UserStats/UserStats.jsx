import PropTypes from 'prop-types';

export default function UserStats({
  followersQuantity,
  viewsQuantity,
  likesQuantity,
}) {
  return (
    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity">{followersQuantity}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{viewsQuantity}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{likesQuantity}</span>
      </li>
    </ul>
  );
}

UserStats.propTypes = {
  followersQuantity: PropTypes.number.isRequired,
  viewsQuantity: PropTypes.number.isRequired,
  likesQuantity: PropTypes.number.isRequired,
};
