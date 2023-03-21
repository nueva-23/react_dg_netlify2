import React from "react";
import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <main className="Missing">
      <h2>Page Not Found</h2>
      <p>Please check the website address</p>
      <Link to="/">Go Home</Link>
    </main>
  );
};

export default Missing;
