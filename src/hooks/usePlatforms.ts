import useData from "./useData";

export interface Platform {
  readonly id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => useData<Platform>("/platforms/lists/parents");
export default usePlatforms;
