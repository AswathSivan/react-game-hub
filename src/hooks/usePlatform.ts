import usePlarforms from "./usePlatforms";

const usePlarform = (id?: number) => {
  const { data: platforms } = usePlarforms();
  return platforms?.results.find((platform) => platform.id === id);
};

export default usePlarform;
