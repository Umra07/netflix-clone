import { FC } from 'react';
import { CustomButtonWrapper } from './style';

interface CustomButtonProps {
  onClick: () => void;
  children: string;
}

const CustomButton: FC<CustomButtonProps> = ({ onClick, children }) => {
  return <CustomButtonWrapper onClick={onClick}>{children}</CustomButtonWrapper>;
};

export default CustomButton;
