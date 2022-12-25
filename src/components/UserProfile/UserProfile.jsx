import PropTypes from 'prop-types';
import { Description, Avatar, Name, Tag, Location } from './UserProfile.styled';

export default function UserProfile({
  avatarSrc,
  userName,
  userTag,
  location,
}) {
  return (
    <Description>
      <Avatar src={avatarSrc} alt={userName} width="100" />
      <Name>{userName}</Name>
      <Tag>@{userTag}</Tag>
      <Location>{location}</Location>
    </Description>
  );
}

UserProfile.propTypes = {
  avatarSrc: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userTag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
