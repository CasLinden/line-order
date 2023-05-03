import React, { createContext, useState } from "react";
import yamanote from "/src/lines/tokyo/jr/Yamanote Line";
import chuo from "/src/lines/tokyo/jr/Chuo Line";

export const CurrentLineContext = createContext();

export const CurrentLineProvider = (props) => {
  const [currentLine, setCurrentLine] = useState(yamanote);

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
