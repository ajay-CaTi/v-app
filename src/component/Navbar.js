import React, { useEffect, useState } from "react";
import logo from "./image/menu.png";
import hamburger from "./image/hamburger.png";
import userIcon from "./image/userIcon.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import { YOUTUBE_SEARCH_API } from "./utils/constant";
import { cacheResults } from "./utils/searchSlice";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    // make api call after each key press
    // diff between 2 api call is < 200ms
    // decline api call
    console.log("Api calls", searchQuery);
    let timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /**
   * key -i
   * render the comp
   * useeffect()
   * start timer => make api call after 200 ms
   *
   * key -ip
   * destroy the comp(useeffect return method)
   * re-render the comp
   * useeffect()
   * start timer > make api call after 200ms
   *
   * settimeout(200) - makeapi call ms
   *
   */

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    setSuggestions(json[1]);

    // update cache
    dispatch(cacheResults({ [setSearchQuery]: json[1] }));
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  console.log(searchQuery);

  return (
    <div className="grid grid-flow-col p-3 m-2 rounded-lg shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => {
            toggleMenuHandler();
          }}
          className="w-10 cursor-pointer"
          src={hamburger}
          alt="logo-v"
        />
        <a href={"/"}>
          <img className="w-28 mx-2" src={logo} alt="logo-v" />
        </a>
      </div>
      <div className=" col-span-10 text-center">
        <div>
          <input
            className="w-4/6 rounded-l-full bg-gray-200"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="rounded-r-full bg-gray-200">&#128269;</button>
        </div>
        {setShowSuggestions && (
          <div className="fixed bg-white py-1 px-2 w-80 rounded-xl">
            <ul>
              {suggestions.map((s) => {
                return (
                  <li key={s} className="px-5 py-1 text-left hover:bg-gray-100">
                    {" "}
                    &#128269; {s}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <div className=" col-span-1">
        <img className="w-7" src={userIcon} alt="userIcon" />
      </div>
    </div>
  );
};

export default Navbar;
