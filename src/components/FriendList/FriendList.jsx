import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import styles from './FriendList.module.css';


const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map((elem) => {
      const {
        avatar, name, isOnline, id,
      } = elem;
      return (
        <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          key={id}
        />
      );
    })}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  })),
};

export default FriendList;