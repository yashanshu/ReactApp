import React from "react";
import { Link } from "react-router-dom";
const NotFoundPage = () => (
  <div>
    no match for <code>{location.pathname}</code>
    <Link to="/">Go home</Link>
  </div>
);

export default NotFoundPage;