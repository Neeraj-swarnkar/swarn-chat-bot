import React from "react";

export default function ConversationBody(props) {
  return (
    <div className="uk-card-body">
      <div className="uk-card uk-card-default uk-border-rounded uk-margin-large-top">
        {props.children}
      </div>
    </div>
  );
}
