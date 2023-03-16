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

export const patchReviewVotes = (review_id, inc_votes) => {
  return gamesApi
    .patch(`/reviews/${review_id}`, { inc_votes })
    .then(({ data: { updatedReview } }) => updatedReview.votes);
};

export const postComment = (review_id, username, body) => {
  return gamesApi
    .post(`/reviews/${review_id}/comments`, { username, body })
    .then(({ data }) => data.postedComment.comment_id);
};

export const getCategories = () => {
  return gamesApi.get(`/categories`).then(({ data }) => data.categories);
};

export const getUsers = () => {
  return gamesApi.get(`/users`).then(({ data }) => data.users);
};

export const deleteCommentbyId = (comment_id) => {
  return gamesApi
    .delete(`/comments/${comment_id}`)
    .then(({ status }) => status);
};
