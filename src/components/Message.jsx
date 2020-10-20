import React from "react";

export default function Message(props) {
  const msgClass =
    props.from === "user"
      ? "me conversation_body uk-flex-bottom uk-flex-right uk-text-right"
      : "guest conversation_body uk-flex-bottom uk-flex-left";
  const itemClass =
    props.from === "user"
      ? "uk-card uk-card-body uk-card-small uk-card-primary uk-border-rounded message"
      : "uk-card uk-card-body uk-card-small uk-card-default uk-border-rounded message";
  return (
    <div className={msgClass} uk-grid>
      <div className="uk-width-auto">
        <img
          className="uk-border-circle"
          width="32"
          height="32"
          src="img/bot.png"
          alt="bot"
        />
      </div>
      <div className="uk-width-auto">
        <div className={itemClass}>
          <p className="uk-margin-remove">{props.message}</p>
        </div>
      </div>
    </div>
  );
}
