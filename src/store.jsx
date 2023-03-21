import { createStore, action, thunk, computed } from "easy-peasy";
import api from "./api/posts";

const store = createStore({
  // todos: [],
  // addTodo: action((state, payload) => {
  //   state.todos.push({ text: payload, done: false });
  // }),

  // saveTodo: thunk(async (actions, payload) => {
  //   const saved = await todoService.save(payload);
  //   actions.addTodo(saved);

  posts: [],
  setPosts: action((state, payload) => {
    state.posts = payload;
  }),

  search: "",
  setSearch: action((state, payload) => {
    state.search = payload;
  }),

  postTitle: "",
  setPostTitle: action((state, payload) => {
    state.postTitle = payload;
  }),

  postBody: "",
  setPostBody: action((state, payload) => {
    state.postBody = payload;
  }),

  postNew: thunk(async (actions, newPost, helpers) => {
    try {
      const response = await api.post("/posts", newPost);
      const { posts } = helpers.getState();
      const newPosts = [...posts, response.data];
      actions.setPosts(newPosts);
      actions.setPostTitle("");
      actions.setPostBody("");
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    }
  }),

  deletePost: thunk(async (actions, id, helpers) => {
    const { posts } = helpers.getState();
    const filteredPosts = posts.filter((post) => post.id !== id);
    try {
      await api.delete(`/posts/${id}`);
      actions.setPosts(filteredPosts);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    }
  }),

  getPostsLength: computed((state) => state.posts.length),

  getPostById: computed((state) => {
    return (id) => state.posts.find((post) => post.id.toString() === id);
  }),

  editTitle: "",
  setEditTitle: action((state, payload) => {
    state.editTitle = payload;
  }),

  editBody: "",
  setEditBody: action((state, payload) => {
    state.editBody = payload;
  }),

  putPost: thunk(async (actions, editedPost, helpers) => {
    const { id } = editedPost;
    const posts = helpers.getState();

    try {
      const response = await api.put(`/posts/${id}`, editedPost);
      const editedPosts = posts.map((post) =>
        post.id.toString() === id ? response.data : post
      );
      actions.setPosts(editedPosts);
      actions.setEditBody("");
      actions.setEditTitle("");
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    }
  }),
});

export default store;
