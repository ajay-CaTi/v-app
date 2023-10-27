import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) {
    return null;
  }

  return (
    <div className="w-48 p-5 shadow-lg">
      <h1 className="font-bold">Subscription</h1>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>Sports</li>
        <li>Music</li>
        <li>Movies</li>
      </ul>
      <h1>Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Music</li>
        <li>Movies</li>
      </ul>
      <h1>Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Music</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
