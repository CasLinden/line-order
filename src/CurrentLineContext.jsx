import React, { createContext, useState } from "react";
import yamanote from "/src/lines/yamanote";

export const CurrentLineContext = createContext();

export const CurrentLineProvider = (props) => {
  const [currentLine, setCurrentLine] = useState(yamanote);

  return (
    <CurrentLineContext.Provider value={{ currentLine, setCurrentLine }}>
      {props.children}
    </CurrentLineContext.Provider>
  );
};
