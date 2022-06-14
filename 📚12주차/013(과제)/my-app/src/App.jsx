import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Nav from "./Components/Nav";
import ContentsContainer from "./Components/ContentsContainer";

const GlobalStyle = createGlobalStyle`
  ${reset}; 
  a{
    text-decoration : none;
    color : inherit;
  }

  button{
    border : none;
    cursor : pointer;
  }

 * {
  box-sizing: border-box;
  }
`;

const App = () => {
  const [listName, setListName] = useState("detail");
  const checkId = (e) => {
    setListName(e.target.id);
    console.log(e.target.id);
  };
  return (
    <>
      <GlobalStyle />
      <Nav changeState={checkId} stateValue={listName} />
      <ContentsContainer listName={listName} />
    </>
  );
};

export default App;