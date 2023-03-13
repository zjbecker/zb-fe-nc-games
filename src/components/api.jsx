import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://nc-games-p9rv.onrender.com/api/",
});

export const getReviewsData = () => {
  return gamesApi.get("/reviews").then(({ data }) => data.reviews);
};

export const getReviewById = (review_id) => {
  return gamesApi.get(`reviews/${review_id}`).then(({ data }) => data.review);
};
