import React, { useEffect, useLayoutEffect, useContext } from "react";
import { Context } from "../context/appContext";

const Home = () => {
  const { state, addData } = useContext(Context);
  useEffect(() => {
    console.log("[In home] Use Effect");
    // return console.clear();
  });

  useEffect(() => {
    console.log(state);
  }, [state]);

  useLayoutEffect(() => {
    console.log("[In home] Use Layout Effect");
    // return console.clear();
  });

  console.log(state);
  return (
    <div>
      <h2>This is the homepage</h2>
      <button onClick={() => addData({ location: "App.js", devMode: true })}>
        Add data
      </button>
    </div>
  );
};

export default Home;
