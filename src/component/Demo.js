import React, { useMemo, useState } from "react";
import { findPrime } from "./utils/helper";

// useMemo :: -- useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
// cache the result of a calculation between re-renders

// useCallback ::-- useCallback is a React Hook that lets you cache a function definition between re-renders.
// cache a function definition between re-renders

// useRef ::-- useRef is a React Hook that lets you reference a value that’s not needed for rendering.

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  //   console.log("rendering");

  const prime = useMemo(() => findPrime(text), [text]);
  return (
    <div
      className={`border border-black m-2 p-2 w-96 h-96 ${
        isDarkTheme && "bg-gray-900 text-white"
      }`}
    >
      <div>
        <button
          className="m-10 p-2 bg-green-200"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Toggle theme
        </button>
      </div>
      <div>
        <input
          className="rounded-lg border border-black w-72 px-2"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <h1>nth prime: {prime}</h1>
      </div>
    </div>
  );
};

export default Demo;
