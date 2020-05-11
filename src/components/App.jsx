import React from 'react';


import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import user from '../db/user.json';
import statData from '../db/statistical-data.json';
import friends from '../db/friends.json';
import transactions from '../db/transactions.json';

const App = () => {
  const { name, tag, location, avatar, stats } = user;
  return (
    <>
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload Statistics" stats={statData}/>
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions}/>
    </>
  );
};
export default App;