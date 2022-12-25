import PropTypes from 'prop-types';
import css from './UserProfile.module.css';

export default function UserProfile({
  avatarSrc,
  userName,
  userTag,
  location,
}) {
  return (
    <div className={css.description}>
      <img src={avatarSrc} alt={userName} className={css.avatar} width="100" />
      <p className={css.name}>{userName}</p>
      <p className={css.tag}>@{userTag}</p>
      <p className={css.location}>{location}</p>
    </div>
  );
}

UserProfile.propTypes = {
  avatarSrc: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userTag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
