import React from "react";

export default function InputText(props) {
  const onSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.msg.value;
    props.onSubmit(value);
    e.target.elements.msg.value = "";
  };

  return (
    <div className="chat-input">
      <form onSubmit={onSubmit}>
        <div className="uk-card-footer uk-padding-remove">
          <div className="uk-grid-small uk-flex-middle" uk-grid>
            <div className="uk-width-auto">
              <a
                href="#"
                className="uk-icon-link uk-margin-small-left"
                uk-icon="icon: happy"
              />
            </div>
            <div className="uk-width-expand">
              <div className="uk-padding-small">
                <input
                  name="msg"
                  className="uk-textarea uk-padding-remove uk-border-remove"
                  rows="1"
                  placeholder="Your message..."
                />
              </div>
            </div>
            <div className="uk-width-auto">
              <ul className="uk-iconnav uk-margin-small-right">
                <li>
                  <a href="#" uk-icon="icon: image" />
                </li>
                <li>
                  <a href="#" uk-icon="icon: location" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
