import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="container-fluid">
      <Link to="/">Home</Link>
      <div>
        <p>Sorry Requested page does not exists</p>
      </div>
    </div>
  );
}

export default PageNotFound;
