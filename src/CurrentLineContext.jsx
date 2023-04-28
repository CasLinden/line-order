import React, { createContext, useState } from "react";
import yamanote from "/src/lines/tokyo/jr/yamanote";
import chuo from "/src/lines/tokyo/jr/chuo";

export const CurrentLineContext = createContext();

export const CurrentLineProvider = (props) => {
  const [currentLine, setCurrentLine] = useState(chuo);

  const useLineColor = () => {
    document.documentElement.style.setProperty('--currentline-color', `${currentLine.color}`);
  }
  useLineColor()

  return (
    <CurrentLineContext.Provider value={{ currentLine, setCurrentLine }}>
      {props.children}
    </CurrentLineContext.Provider>
  );
};
