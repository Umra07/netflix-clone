import Invite from '../components/Invite';
import CustomBackground from '../components/UI/CustomBackground';

import background from '../assets/main-bg.jpg';
import FeaturesList from '../components/FeaturesList';
import QuestionsList from '../components/QuestionsList';
import CustomInputBlock from '../components/UI/CustomInputBlock';
import Footer from '../components/Footer';

const StartMembership = () => {
  return (
    <>
      <CustomBackground url={background} />
      <Invite />
      <FeaturesList />
      <QuestionsList />
      <CustomInputBlock margin="4%" />
    </>
  );
};

export default StartMembership;
