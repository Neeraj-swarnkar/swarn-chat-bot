import { useState } from "react";

export default function useBackgound() {
  const openColor = "white";
  const closeColor = "black";
  const [state, setState] = useState(openColor);

  const toggle = () => {
    if (state === openColor) {
      setState(closeColor);
    } else {
      setState(openColor);
    }
  };
  return [state, toggle, { openColor, closeColor }];
}
