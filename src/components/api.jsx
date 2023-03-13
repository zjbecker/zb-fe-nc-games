import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://nc-games-p9rv.onrender.com/api/",
});

export const getReviewsData = () => {
  return gamesApi.get("/reviews").then(({ data }) => data.reviews);
};
