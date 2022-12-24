import UserProfile from '../components/UserProfile';
import user from 'user.json';

export default function App() {
  return <div>
    <UserProfile
      avatarSrc={user.avatar}
      userName={user.username}
      userTag={user.tag}
      location={user.location}
      followersQuantity={user.stats.followers}
      viewsQuantity={user.stats.views}
      likesQuantity={user.stats.likes}
    />
  </div>;
  
}
  

