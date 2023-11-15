import Profile from './Profile/Profile.jsx';
import user from './Profile/user.json';

import Stats from './Data/Statistics.jsx';
import data from './Data/data.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.ocation}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Stats stats={data.stats} />
    </div>
  );
};
