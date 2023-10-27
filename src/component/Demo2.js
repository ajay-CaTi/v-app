import React, { useRef, useState } from "react";

const Demo2 = () => {
  const [y, setY] = useState(0);
  let x = 0;
  console.log("Rendering...");

  const ref = useRef(0);
  //   console.log(ref);

  /** not like => ref=0
   * ref={urrent:0}
   *
   *
   */

  return (
    <div className="m-2 p-2 bg-slate-50 w-64 border border-black h-96">
      <button
        className="bg-green-200 m-2"
        onClick={() => {
          x = x + 1;
          console.log(x);
        }}
      >
        Increase x
      </button>
      <br />
      <button
        className="bg-green-200 m-2"
        onClick={() => {
          setY(y + 1);
        }}
      >
        Increase Y
      </button>
      Let - {y}
      <br />
      <button
        className="bg-green-200 m-2"
        onClick={() => {
          ref.current = ref.current + 1;
          console.log("ref= ", ref.current);
        }}
      >
        Increase z
      </button>
      REF - {ref.current}
    </div>
  );
};

// let a normal let x =10 variable  and other usestate variable button to change both value by button individually press x  ang then state vala button then again x vala button its value again start increase from initial value because sttae varible refresh x RERENDERING
// But I DONOT want to be RESET this is known as useRef

export default Demo2;
