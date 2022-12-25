import UserProfile from 'components/UserProfile/UserProfile';
import Statistics from 'components/Statistics/Statistics';
import user from 'user.json';
import data from 'data.json';
import Section from 'components/Section/Section';

export default function App() {
  return (
    <Section>
      <UserProfile
        avatarSrc={user.avatar}
        userName={user.username}
        userTag={user.tag}
        location={user.location}
        followersQuantity={user.stats.followers}
        viewsQuantity={user.stats.views}
        likesQuantity={user.stats.likes}
      />
      <Statistics />
    </Section>
  );
}
