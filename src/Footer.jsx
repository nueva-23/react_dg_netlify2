import React from "react";
import { useStoreState } from "easy-peasy";

// function AddTodoForm() {
//   const [value, setValue] = React.useState('');
//   return (
//     <>
//       <input onChange={(e) => setValue(e.target.value)} value={value} />
//       <button onClick={() => addTodo(value)}>Add Todo</button>
//     </>
//   );
// }

const Footer = () => {
  const getPostsLength = useStoreState((state) => state.getPostsLength);
  return <footer className="Footer">{`blog posts: ${getPostsLength}`}</footer>;
};

export default Footer;
