import CustomButton from '../../UI/CustomButton';
import CustomInput from '../../UI/CustomInput';
import { CustomInputBlock, StartMembershipWrapper } from './style';

const StartMembership = () => {
  return (
    <StartMembershipWrapper>
      <h1>Unlimited movies, TV shows, and more</h1>
      <p>Watch anywhere. Cancel anytime.</p>
      <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
      <CustomInputBlock>
        <CustomInput />
        <CustomButton>Get started</CustomButton>
      </CustomInputBlock>
    </StartMembershipWrapper>
  );
};

export default StartMembership;
