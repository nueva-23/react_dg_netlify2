import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3500/",
});
export default api;

//get example
const get = async () => {
  try {
    const response = await api.get("/posts");
    console.log(response);
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
  }
};
// get()

//put example
const put = async () => {
  const id = 7;
  const title = "put example title3";
  const datetime = "July 16, 2021 11:47:39 AM";
  const body = "put example body3";
  const newpost = { id, title, datetime, body };
  try {
    const response = await api.put(`/posts/${id}`, newpost);
    const data = await response.data;
    console.log(data);
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
  }
};
// put()

//delete example
const delete1 = async () => {
  const id = 7;
  try {
    await api.delete(`/posts/${id}`);
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
  }
};
// delete1();
