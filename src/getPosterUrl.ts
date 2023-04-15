const getPosterUrl = (width: string, path: string): string => {
  return `https://image.tmdb.org/t/p/${width + path}`;
};

export default getPosterUrl;
