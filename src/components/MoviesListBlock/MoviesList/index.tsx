import MovieItem from './MovieItem';
import { LeftButton, ListWrapper, MoviesListContainer, RightButton } from './style';

import arrowSvg from '../../../assets/arrow.svg';
import { MovieTypes } from '..';
import { FC, useEffect, useRef, useState } from 'react';
import useResize from '../../../hooks/useResize';

interface MoviesListProps {
  btnIsShown: boolean;
  list: MovieTypes[];
}

const MoviesList: FC<MoviesListProps> = ({ btnIsShown, list }) => {
  // const [params, setPage] = useState<{
  //   firstItem: number;
  //   maxLength: number;
  // }>({
  //   firstItem: 0,
  //   maxLength: 6,
  // });
  // const [activeSlides, setActiveSlides] = useState<MovieTypes[]>([]);

  // const createSlidesList = () => {
  //   let slides: MovieTypes[] = [];

  //   for (let i = params.firstItem; i < params.maxLength; i++) {
  //     slides.push(list[i]);
  //   }

  //   setActiveSlides(slides);
  //   console.log(activeSlides);
  // };

  // useEffect(() => {
  //   createSlidesList();
  // }, [params]);

  const [[page, direction], setPage] = useState([0, 0]);

  const slide = (direction: number) => {
    if (myRef && myRef.current) {
      myRef.current.scrollLeft = myRef.current.scrollLeft + direction;
    }
  };
  const divRef = useRef(null);

  // const listRef = useRef(null);

  // useEffect(() => {
  //   useResize(divRef);
  // }, [divRef]);

  // function that return amount of progress bar

  const progressBar = () => {
    const num = Math.ceil(list.length / 6);

    return Array(num);
  };
  console.log('rendering');
  // Zabawa ze scrollem
  const myRef = useRef<HTMLUListElement>(null);

  // useEffect(() => {
  //   // Scroll to top of component on mount
  //   if(myRef && myRef.current) {
  //     myRef.current.scrollTo(0, 0);
  //   }
  // }, []);

  const handleScroll = () => {
    // Get current scroll position
    const scrollTop = () => {
      if (myRef && myRef.current) {
        return myRef.current.scrollLeft;
      }
    };
    console.log(scrollTop());
  };

  return (
    <MoviesListContainer>
      {progressBar().map((item) => (
        <div style={{ color: 'white' }}>sdlfsd;lfk;</div>
      ))}
      {btnIsShown && (
        <LeftButton onClick={() => slide(-1300)}>
          <img src={arrowSvg} alt="left arrow" />
        </LeftButton>
      )}
      <ListWrapper ref={myRef} onScroll={handleScroll} id="slider">
        {list.map((item) => (
          <MovieItem key={item.id} poster_path={item.poster_path} title={item.title} />
        ))}
      </ListWrapper>
      {btnIsShown && (
        <RightButton onClick={() => slide(1300)}>
          <img src={arrowSvg} alt="right arrow" />
        </RightButton>
      )}
    </MoviesListContainer>
  );
};

export default MoviesList;
