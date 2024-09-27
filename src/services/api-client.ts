import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  params: {
    api_key: import.meta.env.VITE_API_KEY,
  },
});

export default apiClient;
