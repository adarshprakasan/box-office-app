import { useQuery } from '@tanstack/react-query';
import { useStarredShows } from '../lib/useStarredShows';
import { getShowsByIds } from '../api/tvmaze';
import ShowGrid from '../components/shows/ShowGrid';

const Starred = () => {
  const [starredShowsIds] = useStarredShows();

  const { data: starredShows, error: starredShowsError } = useQuery({
    queryKey: ['starred', starredShowsIds],
    queryFn: async () =>
      getShowsByIds(starredShowsIds).then(result =>
        result.map(show => ({ show }))
      ),
    refetchOnWindowFocus: false
  });

  if (starredShows) {
    return <ShowGrid shows={starredShows} />;
  }

  return <div>Hello</div>;
};

export default Starred;
