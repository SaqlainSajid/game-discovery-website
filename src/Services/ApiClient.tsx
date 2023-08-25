import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8f51678d99d34aaa9a721b5efa0cbf22",
  },
});
