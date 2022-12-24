import PropTypes from 'prop-types';

export default function UserProfile({ avatarSrc, userName, userTag, location, followersQuantity, viewsQuantity, likesQuantity }) {
  return (
    <div className="profile">
      <div className="description">
        <img
          src={avatarSrc}
          alt={userName}
          className="avatar"
        />
        <p className="name">{userName}</p>
        <p className="tag">@{userTag}</p>
        <p className="location">{location}</p>
      </div>

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
    </div>
  )
};

UserProfile.propTypes = {
    avatarSrc: PropTypes.string,
    userName: PropTypes.string,
    userTag: PropTypes.string,
    location: PropTypes.string,
    followersQuantity: PropTypes.number,
    viewsQuantity: PropTypes.number,
    likesQuantity: PropTypes.number
};
