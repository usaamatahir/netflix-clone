export type Props = {
  title: string;
  fetchURL: string;
  isLargeRow: boolean;
};

export type movieType = {
  title: string;
  original_name: string;
  genre_ids: number[];
  name: string;
  backdrop_path: string;
  id: number;
  overview: string;
  poster_path: string;
};
