import FeatureCard from '../UI/FeatureCard';
import { featuresData } from './data';
import { FeaturesListWrapper } from './style';

const FeatureList = () => {
  return (
    <FeaturesListWrapper>
      {featuresData.map((feature) => (
        <FeatureCard image={feature.img} heading={feature.heading} text={feature.text} />
      ))}
    </FeaturesListWrapper>
  );
};

export default FeatureList;
