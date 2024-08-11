import axios from "axios";
const env = import.meta.env;

export default axios.create({
  baseURL: env.VITE_BASE_URL,
  params: {
    key: env.VITE_API_KEY,
  },
});
