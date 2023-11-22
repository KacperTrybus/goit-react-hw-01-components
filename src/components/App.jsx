import Profile from './Profile/Profile.jsx';
import user from './Profile/user.json';

import Statistics from './Data/Statistics.jsx';
import data from './Data/data.json';

import FriendList from './Friends/FriendList.jsx';
import friends from './Friends/friends.json';

import Transactions from './Transactions/Transactions.jsx';
import transactions from './Transactions/transactions.json';

import '../components/App.css';

export const App = () => {
  return (
    <div className="wrapper">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="UPLOAD STATS" statistics={data} />
      <FriendList friends={friends} />
      <Transactions items={transactions} />;
    </div>
  );
};
