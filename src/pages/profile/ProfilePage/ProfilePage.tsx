import User from '@entities/user/interface/User';
import PageWrapper from '@UI/MainUI/PageWrapper/PageWrapper';

const ProfilePage = () => {
  return (
    <PageWrapper>
      <User />
    </PageWrapper>
  );
};

export default ProfilePage;
