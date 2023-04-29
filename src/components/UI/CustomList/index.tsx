import { FC } from 'react';
import { CustomListWrapper } from './style';
import { CrewmateTypes, GenreTypes, KeywordTypes } from '../../../redux/slices/mainPage/types';

interface CustomListProps {
  heading: string;
  list: CrewmateTypes[] | GenreTypes[] | KeywordTypes[];
  limit: number;
}

const CustomList: FC<CustomListProps> = ({ heading, list, limit }) => {
  return (
    <CustomListWrapper>
      <b>{heading + ': '}</b>
      {list.map((item: any, index: number) => {
        if (index === 0) return item.name;
        if (index === 3 && limit === 3) return <span>, more</span>;
        if (index > limit) return '';
        return `, ${item.name}`;
      })}
    </CustomListWrapper>
  );
};

export default CustomList;
