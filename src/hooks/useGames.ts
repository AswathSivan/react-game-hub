import useData from "./useData";

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
const useGames = () => useData<Game>("/games");

export default useGames;
