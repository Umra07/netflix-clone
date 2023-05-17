import { FC } from 'react';
import CustomButton from './CustomButton';
import CustomInput from './CustomInput';
import { CustomInputBlockWrapper, InputWrapper } from './style';

interface CustomInputBlockProps {
  margin?: string;
}

const CustomInputBlock: FC<CustomInputBlockProps> = ({ margin }) => {
  return (
    <CustomInputBlockWrapper margin={margin}>
      <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
      <InputWrapper>
        <CustomInput />
        <CustomButton>Get Started</CustomButton>
      </InputWrapper>
    </CustomInputBlockWrapper>
  );
};

export default CustomInputBlock;
