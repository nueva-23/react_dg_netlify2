import axios from "axios";
import { format } from "date-fns";

const api = axios.create({
  baseURL: "http://localhost:3500",
});
export default api;

//get example
const get1 = async () => {
  try {
    const response = await api.get("/posts");
    console.log(response);
  } catch (err) {
    if (err.response) {
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    }
  }
};
// get1()

//put example
const put1 = async () => {
  const id = 6;
  const title = "put example title2";
  const datetime = "July 16, 2021 11:47:39 AM";
  const body = "put example body2";
  const updatedPost = { id, title, datetime, body };
  try {
    const response = await api.put(`/posts/${id}`, updatedPost);
    const data = await response.data;
    console.log(data);
  } catch (err) {
    if (err.response) {
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    }
  }
};
// put1();

//delete example
const del1 = async () => {
  const id = 8;
  try {
    await api.delete(`/posts/${id}`);
  } catch (err) {
    if (err.response) {
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    }
  }
};
// del1();
