import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = ["All", "Live", "Soccer", "Food", "Travel", "Movie", "Music"];
  return (
    <div className="flex">
      {list.map((val) => {
        return <Button name={val} key={val} />;
      })}
    </div>
  );
};

export default ButtonList;
