import React from "react";

export default function Conversation(props) {
  return (
    <div className="uk-section main" style={{ backgroundColor: props.bgColor }}>
      <div className="uk-container uk-width-large">{props.children}</div>
    </div>
  );
}
