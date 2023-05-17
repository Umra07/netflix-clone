import { FC } from 'react';
import { CustomButtonWrapper } from './style';

interface CustomButtonProps {
  children: string;
}

const CustomButton: FC<CustomButtonProps> = ({ children }) => {
  return <CustomButtonWrapper>{children}</CustomButtonWrapper>;
};

export default CustomButton;
