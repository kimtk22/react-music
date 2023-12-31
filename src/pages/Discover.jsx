import { genres } from '../assets/constants';
import { SongCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const Discover = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();

  return (
    <div className="flex flex-col border-solid border-2">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-left text-white">Discover</h2>
        <select
          onChange={() => {}}
          value=""
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outlien-none sm:mt-0 mt-5"
        >
          {genres.map((genre, index) => (
            <option key={index} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((song, index) => (
          <SongCard key={index} song={song} i={index} />
        ))}
      </div>
    </div>
  );
};

export default Discover;
