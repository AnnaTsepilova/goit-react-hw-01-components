import UserProfile from 'components/UserProfile/UserProfile';
import UserStats from 'components/UserStats/UserStats';
import user from 'user.json';
import Section from 'components/Section/Section';

export default function App() {
  return (
    <Section>
      <UserProfile
        avatarSrc={user.avatar}
        userName={user.username}
        userTag={user.tag}
        location={user.location}
      />
      <UserStats
        followersQuantity={user.stats.followers}
        viewsQuantity={user.stats.views}
        likesQuantity={user.stats.likes}
      />
    </Section>
  );
}
