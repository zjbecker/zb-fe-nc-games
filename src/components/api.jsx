import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://nc-games-p9rv.onrender.com/api/",
});

export const getReviewsData = (category, sort_by, order, limit) => {
  return gamesApi
    .get("/reviews", { params: { category, sort_by, order, limit } })
    .then(({ data }) => data.reviews);
};

export const getReviewById = (review_id) => {
  return gamesApi.get(`reviews/${review_id}`).then(({ data }) => data.review);
};

export const getCommentsData = (review_id) => {
  return gamesApi
    .get(`reviews/${review_id}/comments`)
    .then(({ data }) => data.comments);
};
