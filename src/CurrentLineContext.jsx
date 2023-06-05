import React, { createContext, useState, useEffect } from "react";
import yamanote from "/src/lines/tokyo/jr/Yamanote Line";

export const CurrentLineContext = createContext();

export const CurrentLineProvider = ({ children }) => {
  const [currentCity, setCurrentCity] = useState("Tokyo");
  const [currentGroup, setCurrentGroup] = useState("JR");
  const [currentLine, setCurrentLine] = useState(() => {
    const savedLine = localStorage.getItem('currentLine');
    return savedLine 
      ? JSON.parse(savedLine)
      : yamanote;
  });

  useEffect(() => {
    localStorage.setItem('currentLine', JSON.stringify(currentLine));
  }, [currentLine]);

  const useLineColor = () => {
    document.documentElement.style.setProperty(
      "--currentline-color",
      `${currentLine.color}`
    );
  };
  useLineColor();

  return (
    <CurrentLineContext.Provider
      value={{
        currentCity,
        setCurrentCity,
        currentGroup,
        setCurrentGroup,
        currentLine,
        setCurrentLine,
      }}
    >
      {children}
    </CurrentLineContext.Provider>
  );
};
