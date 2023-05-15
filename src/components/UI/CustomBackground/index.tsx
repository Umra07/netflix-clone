import React, { FC } from 'react';
import { CustomBackgroundImage } from './style';

interface CustomBackgroundProps {
  url: string;
}

const CustomBackground: FC<CustomBackgroundProps> = ({ url }) => {
  return (
    <CustomBackgroundImage url={url}>
      <div className="backdrop" />
    </CustomBackgroundImage>
  );
};

export default CustomBackground;
