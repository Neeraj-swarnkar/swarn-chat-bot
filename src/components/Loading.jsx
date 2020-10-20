import React from "react";

function Loading() {
  return (
    <div className="guest uk-grid-small uk-flex-bottom uk-flex-left" uk-grid>
      <div className="uk-width-auto">
        <div className="uk-card uk-card-body uk-card-small uk-card-default uk-border-rounded message">
          <p className="uk-margin-remove">
            <span className="etc">
              <i />
              <i />
              <i />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Loading;
