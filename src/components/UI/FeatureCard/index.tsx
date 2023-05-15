import React, { FC } from 'react';
import { FeatureCardItem } from './style';

interface FeatureCardProps {
  image?: string;
  heading?: string;
  text?: string;
}

const FeatureCard: FC<FeatureCardProps> = ({ image, heading, text }) => {
  return (
    <FeatureCardItem>
      <img src={image} alt="feature" />
      <h2>{heading}</h2>
      <p>{text}</p>
    </FeatureCardItem>
  );
};

export default FeatureCard;
