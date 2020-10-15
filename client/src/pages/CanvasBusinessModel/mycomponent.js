import React from "react";

import { CompoContainer, HeaderContainer, HeaderText } from "./styles.js";

const MyComponent = (props) => {
  return (
    <CompoContainer>
      <HeaderContainer>
        {props.icon} 
        <HeaderText>{props.title}</HeaderText>
      </HeaderContainer>
      <div style={{ flex: 1, width: "100%", height: "100%" }}></div>
    </CompoContainer>
  );
};

export default MyComponent;
