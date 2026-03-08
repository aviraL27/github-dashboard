import axios from "axios";

const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
  },
});

export default githubApi;

export const getUser = async (username: string) => {
  const response = await githubApi.get(`/users/${username}`);
  return response.data;
};

export const getRepos = async (username: string) => {
  const response = await githubApi.get(`/users/${username}/repos`);
  return response.data;
};