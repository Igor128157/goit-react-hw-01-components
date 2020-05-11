import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';


const FriendListItem = ({ avatar, name, isOnline }) => {
  const { item, online, offline, userAvatar, userName } = styles;
  return (
    <li className={item}>
      <span className={isOnline ? online : offline} />
      <img className={userAvatar} src={avatar} alt="user avatar" width={48} />
      <p className={userName}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;