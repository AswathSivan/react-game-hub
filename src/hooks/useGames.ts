import useData from "./useData";
import { Genre } from "./useGenre";

export interface Platform {
  readonly id: number;
  name: string;
  slug: string;
}

export interface Game {
  readonly id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
const useGames = (selectedGenre: Genre | null) =>
  useData<Game>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);

export default useGames;
