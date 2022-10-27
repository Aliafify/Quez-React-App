import axios from "axios";
export const getQS = () => {
  return axios({
    method: "get",
    url: "/api/words",
    responseType: "json",
  });
};
export const quizeRank = (score) => {
  return axios({
    method: "POST",
    data: { score: score },
    withCredentials: true,
    url: "/api/rank",
  }).then((res) => res.data.rank);
};
