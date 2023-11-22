import propTypes from 'prop-types';
import '../Friends/FriendListItem.css';
// import friends from '../Friends/friends.json';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClass = isOnline
    ? 'status status-online'
    : 'status status-offline';
  return (
    <li className="friend-item">
      <span className={statusClass}></span>

      <img
        className="friend-avatar"
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  isOnline: propTypes.bool.isRequired,
};

export default FriendListItem;
