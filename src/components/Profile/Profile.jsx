import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';


const Profile = ({
  avatar,
  name = 'user name',
  tag = 'tags',
  location = 'user location',
  stats: { followers, views, likes },
}) => {
  const {
    profile, description, userAvatar, userName, userTag, userLocation, stats, label, quantity,
  } = styles;
  return (
    <div className={profile}>
      <div className={description}>
        <img src={avatar} alt="user avatar" className={userAvatar} />
        <p className={userName}>{name}</p>
        <p className={userTag}>
          @
          {tag}
        </p>
        <p className={userLocation}>{location}</p>
      </div>

      <ul className={stats}>
        <li>
          <span className={label}>Followers</span>
          <span className={quantity}>{followers}</span>
        </li>
        <li>
          <span className={label}>Views</span>
          <span className={quantity}>{views}</span>
        </li>
        <li>
          <span className={label}>Likes</span>
          <span className={quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;